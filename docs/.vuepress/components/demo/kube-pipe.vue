<template>
  <div>
        全局加载中 <u-loading v-if="loading" />
        <br />
        <kube-pipe
            ref="pipe"
            component="u-linear-layout"
            :graph="graph"
            direction="vertical"
            @pipestatechange="loading = $event"
        >
         <kube-valve
            name="a"
            :valve="model.a"
            :request="loadA"
          >
            A: <u-select v-model="model.a" :data="data.a" />
         </kube-valve>
        <kube-valve
            name="b"
            :valve="model.b"
            :request="loadB"
          >
            B: <u-select v-model="model.b" :data="data.b" />
         </kube-valve>
        <kube-valve
            name="c"
            :valve="model.c"
            :request="loadC"
          >
            C: <u-select v-model="model.c" :data="data.c" />
         </kube-valve>
        <kube-valve
            name="d"
            :valve="model.d"
            :request="loadD"
          >
            D: <u-select v-model="model.d" :data="data.d" />
         </kube-valve>
    </kube-pipe>

    <demo-visualize-data v-model="model" />
  </div>
</template>

<script>
import kubePipe from '@kubecube/mixins/pipe/kube-pipe.vue';
import kubeValve from '@kubecube/mixins/pipe/kube-valve.vue';
import { setValueIfListNotPresent } from '@kubecube/utils/functional'
function loadFac(list) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(list);
        }, 800);
    });
    return promise;
}
export default {
    components: {
        kubePipe,
        kubeValve,
    },
    data() {
        return {
            loading: false,
            graph: 'a > [b, c] > d',
            model: {
                a: '',
                b: '',
                c: '',
                d: '',
            },
            data: {
                a: [],
                b: [],
                c: [],
                d: [],
            }
        }
    },
    methods: {
        async loadA() {
            const list = await loadFac([
                { text: 'a', value: 'a' },
                { text: 'b', value: 'b' },
                { text: 'c', value: 'c' },
            ]);
            this.data.a = list;
            setValueIfListNotPresent({
                list,
                path: 'value',
                current: this.model.a,
            }, val => {
                this.model.a = val.value;
            });
        },
        async loadB() {
            const list = await loadFac([
                { text: 'd', value: 'd' },
                { text: 'e', value: 'e' },
                { text: 'f', value: 'f' },
            ]);
            this.data.b = list;
            setValueIfListNotPresent({
                list,
                path: 'value',
                current: this.model.b,
            }, val => {
                this.model.b = val.value;
            });
        },
        async loadC() {
            const list = await loadFac([
                { text: 'g', value: 'g' },
                { text: 'h', value: 'h' },
                { text: 'i', value: 'i' },
            ]);
            this.data.c = list;
            setValueIfListNotPresent({
                list,
                path: 'value',
                current: this.model.c,
            }, val => {
                this.model.c = val.value;
            });
        },
        async loadD() {
            const list = await loadFac([
                { text: 'j', value: 'j' },
                { text: 'k', value: 'k' },
                { text: 'l', value: 'l' },
            ]);
            this.data.d = list;
            setValueIfListNotPresent({
                list,
                path: 'value',
                current: this.model.d,
            }, val => {
                this.model.d = val.value;
            });
        },
    }
}
</script>

<style>

</style>