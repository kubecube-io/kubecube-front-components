# x-request load everything

## Cases

### Table Data
```vue
<template>
    <x-request
      ref="request"
      :service="service"
      :params="requestParam"
      :processor="resolver"
    >
      <template slot-scope="{ data, loading, error }">
        <kube-table
          :loading="loading"
          :columns="columns"
          :items="data ? data.list : []"
          :error="error"
          >
          <!-- slots -->
        </kube-table>
      </template>
    </x-request>
</template>
<script>
export default {
    data() {
        return {
            service: SomeService
        }
    },
    computed: {
        requestParam() {
            return {
                ... somedata
            }
        }
    },
    methods: {
        resolver(response) {
            return resolve(response) // 处理数据
        }
    }
}
</script>
```

### Select DataSource
```vue
<template>
    <x-request
      ref="request"
      :service="service"
      :params="requestParam"
      :processor="resolver"
    >
      <template slot-scope="{ data, loading }">
        <u-loading v-if="loading" />
        <u-select
            v-if="data.length"
            key="list"
            v-model="model.field"
            :disabled="isEdit"
            size="large"
            :data="data"
        />
            <u-select
            v-else
            key="none"
            disabled
            size="large"
            :data="[{ text: '暂无选项'}]"
        />
      </template>
    </x-request>
</template>
<script>
import {
    setValueIfListNotPresent,
} from 'kubecube/utils/functional';
export default {
    data() {
        return {
            service: SomeService,
            model: { field: '' },
        }
    },
    computed: {
        requestParam() {
            return {
                ...somedata
            }
        }
    },
    methods: {
        resolver(response) {
            const list = resolve(response) // 处理数据
             setValueIfListNotPresent({
                list,
                path: 'value',
                current: this.model.field,
            }, val => {
                this.model.field = val.value;
            });
            return list
        }
    }
}
</script>
```
#### setValueIfListNotPresent
```javascript
import { get } from 'lodash';
export function setValueIfListNotPresent({
    list,
    path,
    current,
},
callback) {
    const t = list.find(c => get(c, path, null) === current);
    if (list.length && !t) {
        callback(list[0]);
    } else {
        callback(t);
    }
}
```

### Instance Detail
```vue
<template>
      <x-request
        ref="request"
        :service="service"
        :params="requestParam"
        :processor="resolver"
      >
        <template slot-scope="{ data, loading, error }">
          <u-loading v-if="loading" />
          <div v-else-if="error">
            加载出错！
          </div>
          <template v-else>
            <router-view :instance="data" />
          </template>
        </template>
      </x-request>
</template>
<script>
export default {
    data() {
        return {
            service: SomeService
        }
    },
    computed: {
        requestParam() {
            return {
                ... somedata
            }
        }
    },
    methods: {
        resolver(response) {
            return resolve(response) // 处理数据
        }
    }
}
</script>
```