# kube-table

kube-table 优化了表格加载样式，使用具名插槽的方式，可以适配更多情况，减少代码冗余，中间穿插 meta 数据，与源数据隔离，且与表格绑定，可以轻松实现展开收起，框选，排序等功能。

## Demo
<demo-kube-table-normal />

## Props
| props   | description | example |
| ------------- |:-------------| :-----|
| columns | 列定义(name定义了数据结构中，数据所在结构的path)       | [ { name: 'demo.xxx.vvvv', title: '示例' } ] |
| items   | 行定义       | [ { demo: 1 } ] |
| itemKey | 行唯一键值（仅在选择行时有效）|  |
| maxHeight | 最大高度（表格最大高度） | |
| loading | 表格数据加载状态 |  |
| error   | 加载错误状态 | |
| resizable | 表头是否可拖动 |  |


## Slots
具名插槽

### 列名具名插槽
```javascript
[ { name: 'xxx.ccc.vvv', title: 'foo' } ] // columns 定义
```
对应的表格中会创建两个具名插槽，分别对应对表头和每行数据的插槽
``` vue
<tempate>
<kube-table :columns="columns" :items="items">
    <template #[`column.xxx.ccc.vvv`]="{ column }">
        {{ column }}
    </template>
    <template #[`item.xxx.ccc.vvv`]="{ item, itemMeta, column }">
        {{ item }}
    </template>
</kube-table>
</template>
```
+ item 列数据
+ itemMeta 列元数据 
{ expand: false }
+ column 行定义

### 默认具名插槽
| slot   | description |  props |
| ------------- |:-------------|:-------------|
| error |  加载错误时展示     |  |
| noData |  无数据时展示     |  |
| expand |  行展开内容     | item: 单行数据   |

### Events
+ sort
```javascript
@sort="(order, name) => {}"
```

<<< @/docs/.vuepress/components/demo/kube-table/normal.vue