# x-request

请求组件，将请求状态和组件状态绑定，结构即加载顺序，提供多种请求模式，减少代码冗余。

## Demo
<demo-x-request />

## Props
| props   | description | example |
| ------------- |:-------------| :-----|
| params | 请求参数 | { a: 2, b: 3} |
| service   | 请求接口（返回 Promise ） 函数或函数数组   | (params) => Promise |
| component | 组件名称| div |
| poll | 轮询 | { interval: 2000 } |
| processor | 返回数据处理 | data => data |
| preprocessor  | 请求参数处理 (return false则停止请求 ) | () => Boolean |
| mode | 顺序或并行请求 |  parallel 或 waterfall  |

## Slot
| props   | description | example |
| ------------- |:-------------| :-----|
| data | 请求返回数据 |  |
| error   | 请求结果状态 | true 或 false |
| loading | 加载状态 | true 或 false |
| errormessage | 异常信息 | |

<<< @/docs/.vuepress/components/demo/x-request.vue