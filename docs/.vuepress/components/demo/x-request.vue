<template>
<div>
    <input v-model="a"/> + 
    <input v-model="b"/> > 40
    <button @click="refresh">refresh</button>
    <x-request
        ref="request"
        :service="service"
        :params="requestParam"
        :processor="resolver"
        >
        <template slot-scope="{ data, loading, error }">
            <!-- <div> loading: {{ loading }}</div>
             <div> data: {{ data }}</div>
              <div> error: {{ error }}</div> -->
              <demo-visualize-data :value="{
                  a,
                  b,
                  loading,
                  data,
                  error,
              }" />
        </template>
    </x-request>
    
</div>
</template>

<script>
import xRequest from '@kubecube/common/x-request.vue';
const service = async (req) => {
    return await new Promise((r, j) => {
        setTimeout(() => {
            const { a, b } = req;
            const result = a + b;
            if(result > 40) {
                r(result); 
            } else {
                j(result)
            }
        }, 2000);
        
    })
}
export default {
    components: {
        xRequest
    },
    data() {
        return {
            a: '20',
            b: '40',
            service,
        }
    },
    computed: {
        requestParam() {
            return {
                a: +this.a,
                b: +this.b,
            }
        }
    },
    methods: {
        resolver(result) {
            console.log(result)
            return result;
        },
        refresh() {
            this.$refs.request.request();
        }
    }
}
</script>

<style>

</style>