# kube-dynamic

kube-dynamic-* 可以更方便的使用 v-model 关联组件状态，数组内所有数据均为mutable，可以被绑定到子组件上，方便表单结构和数据结构的统一。

## Demo
<demo-kube-dynamic-form-item />

## v-model
list: Array\<Object\>

## Props
| props   | description | example | default | 
| ------------- |:-------------| :-----| :----- | 
| dataTemplate | 行对象模板 | () => ({ a: 'xx', b: 'ccc' }) | |
| initRequired | 是否需要初始一行| true or false | true |
| disabled | 不允许增删 | true or false | true | 
| prefixKey | 报错前缀（配合vee-validator） | 'xxxx' | | 
| layoutComp   | 布局组件 |  | kube-dynamic-table-layout/index |
| rowComp | 行组件 |  | kube-dynamic-table-layout/row | 
| columnComp  | 列组件 |  | kube-dynamic-table-layout/column |

## Slot
| props   | description | example |
| ------------- |:-------------| :-----|
| model | 当前行对象 |  |
| index | 当前行序号 |  |
| remove | 删除操作（Function） |  |

### table.vue
<<< @/docs/.vuepress/components/demo/kube-dynamic/table.vue

### block.vue
<<< @/docs/.vuepress/components/demo/kube-dynamic/block.vue

### form-item.vue
<<< @/docs/.vuepress/components/demo/kube-dynamic/form-item.vue