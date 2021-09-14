# kube-form-tab

kube-form-tab 优化了 tab 的切换模式，也可以更方便的使用 v-model 关联组件状态，数组内所有数据均为mutable，可以被绑定到子组件上，方便表单结构和数据结构的统一。

## Demo
示例

<demo-kube-form-tab />

### demo.vue
<<< @/docs/.vuepress/components/demo/kube-form-tab.vue

## v-model
list: Array\<Object\>

## Props
| props   | description | default |
| ------------- |:-------------| :-----|
| disabled | 隐藏增删 | false | 
| titleKey | tab名对应的key值 | undefined | 
| tabKey | tab的具名插槽名 | undefined | 
| dataTemplate | 对象模板 | () => ({}) | 
| initRequired | 初始化一个 | true | 
| errorPrefix | 报错名前缀 | '' | 

## Slots
具名插槽

### tab 上的具名插槽
```javascript
[ 
    { title: 'xxxx', tab: 'bbbb' },
    { title: 'pppp', tab: 'qqqqq' },
] // 数据
```
对应的表格中会创建两个具名插槽，分别对应对tab头和tab页的插槽
``` vue
<tempate>
<kube-tab 
    v-model="tabs" 
    title-key="title"
    tab-key="tab">
    <template #[`bbbb.tab`]="{ model }">
        <!-- tab 头 -->
    </teamplte>
    <template #bbbb="{ model, state }">
        <!-- tab 页 -->
    </teamplte>
    <template #qqqqq="{ model, state }">
        <!-- tab 页 -->
    </teamplte>
</kube-tab>
</template>
```
