/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
import icon from 'kube-vusion/icon/u-icon.vue'
// import * as CloudUI from 'cloud-ui.vusion/dist';
import 'cloud-ui.vusion/dist/index.css';
import pageComponents from '@internal/page-components'
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import kubeCheckboxTree from '@kubecube/common/kube-checkbox-tree/kube-checkbox-tree.vue';
import kubeTree from '@kubecube/common/kube-checkbox-tree/kube-tree.vue';
// import checkbox from 'kube-vusion/checkbox/index.vue'
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
    
    import('cloud-ui.vusion/dist').then((CloudUI) => {
        Vue.use(CloudUI);
        Vue.component('ValidationObserver', ValidationObserver);
        Vue.component('ValidationProvider', ValidationProvider);
        Vue.component('KubeTree', kubeTree);
        Vue.component('KubeCheckboxTree', kubeCheckboxTree);
    })
    
    // https://github.com/vuejs/vuepress/issues/1173
    for (const [name, component] of Object.entries(pageComponents)) {
        Vue.component(name, component)
    }

}
