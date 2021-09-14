# kube-pipe

级联加载，逻辑控制组件，valve 和 pipe 可分散在不同文件中

## Demo
示例

<demo-kube-pipe />

<<< @/docs/.vuepress/components/demo/kube-pipe.vue

## Props
### Pipe
| props   | description | default |
| ------------- |:-------------| :-----|
| graph | 依赖关系，层级用 > 分割，同层用 [] 包裹，,分割 |  | 
| component | 壳组件 | div | 

### Valve
| props   | description | default |
| ------------- |:-------------| :-----|
| request | 请求函数，返回 Promise |  | 
| valve | 子组件 v-model 的对象 |  | 
| name | 名称，作为 pipe graph 的映射 |  | 
| component | 壳组件 | div | 