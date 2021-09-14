<template>
  <kube-table
    :columns="columns"
    :items="items"
    itemKey="metadata.name"
  >
   <template #[`item.metadata.creationTimestamp`]="{ item }">
        {{ item.metadata.creationTimestamp | formatLocaleTime }}
        </template>
        <template #[`item.operation`]="{ item }">
            <a @click="view(item)">
                查看详情
            </a>
            <a @click="deleteItem(item)">
                删除
            </a>
        </template>
  </kube-table>
</template>

<script>
import kubeTable from '@kubecube/common/kube-table/index.vue';
export default {
    filters: {
        formatLocaleTime(val) {
            if (!val) return '-';
            const datetime = new Date(val);
            return new Intl.DateTimeFormat('zh-Hans-CN', { dateStyle: 'medium', timeStyle: 'medium' }).format(datetime);
        }
    },
    components: {
        kubeTable,
    },
    data() {
        return {
            columns: [
                { type: 'selection' },
                { title: '副本名称', name: 'metadata.name', sortable: true, textwrap: true },
                { title: 'IP', name: 'status.podIP', width: '100px' },
                { title: '副本状态', name: 'status.phase', width: '120px', sortable: true },
                { title: '重启次数', name: 'status.containerStatuses[0].restartCount', width: '70px' },
                { title: 'CPU 使用量', name: 'status.cpuUsage', width: '100px' },
                { title: '内存使用量', name: 'status.memoryUsage', width: '100px' },
                { title: '创建时间', name: 'metadata.creationTimestamp', width: '160px', sortable: true },
                { title: '操作', name: 'operation', width: '120px' },
            ],
            items: [
                {
                    "metadata": {
                        "name": "domain-registrar-65f4554c4d-mssmg",
                        "creationTimestamp": "2021-08-11T11:31:36Z"
                    },
                    "status": {
                        "containerStatuses": [
                            {
                                "containerID": "docker://78b05f7555baff1b7c936316aeb98a4a7143cc6e053f977a06777ed3c958b1af",
                                "image": "domain-registrar/domain-registrar:202108111",
                                "imageID": "docker://sha256:c74bd080b6e591af3417b720a8430927a500495f1ff30bc737e028ae4b2f44b3",
                                "lastState": {
                                    "terminated": {
                                        "containerID": "docker://8059b0f32766a2044bcc1b7b0334fbbcd41e41eeffdbe352eab11f21ccf77c87",
                                        "exitCode": 0,
                                        "finishedAt": "2021-08-24T02:09:00Z",
                                        "reason": "Completed",
                                        "startedAt": "2021-08-23T08:09:39Z"
                                    }
                                },
                                "name": "domain-registrar",
                                "ready": true,
                                "restartCount": 10,
                                "started": true,
                                "state": {
                                    "running": {
                                        "startedAt": "2021-08-24T02:10:59Z"
                                    }
                                }
                            }
                        ],
                        cpuUsage: '40%',
                        memoryUsage: '60%',
                        "hostIP": "10.173.32.129",
                        "phase": "Running",
                        "podIP": "192.168.28.253",
                        "podIPs": [
                            {
                                "ip": "192.168.28.253"
                            }
                        ],
                        "qosClass": "Guaranteed",
                        "startTime": "2021-08-17T03:08:23Z"
                    }
                },
                {
                    "metadata": {
                        "name": "domain-registrar-858c749f6d-8gxfg",
                        "creationTimestamp": "2021-08-11T11:32:01Z"
                    },
                    "status": {
                        "containerStatuses": [
                            {
                                "containerID": "docker://39c1b5fd436a897dd751f92dd5c26ba8dcca53f8a72f1bf42d1a883339fc2f80",
                                "image": "domain-registrar/domain-registrar:202108111",
                                "imageID": "docker://sha256:c74bd080b6e591af3417b720a8430927a500495f1ff30bc737e028ae4b2f44b3",
                                "lastState": {
                                    "terminated": {
                                        "containerID": "docker://968293c4eec165f3527e0792089cb865b63aa42a308624b27432b9f2c11b7068",
                                        "exitCode": 0,
                                        "finishedAt": "2021-08-24T02:09:00Z",
                                        "reason": "Completed",
                                        "startedAt": "2021-08-23T08:10:01Z"
                                    }
                                },
                                "name": "domain-registrar",
                                "ready": true,
                                "restartCount": 14,
                                "started": true,
                                "state": {
                                    "running": {
                                        "startedAt": "2021-08-24T02:12:30Z"
                                    }
                                }
                            }
                        ],
                        cpuUsage: '10%',
                        memoryUsage: '20%',
                        "hostIP": "10.173.32.129",
                        "phase": "Running",
                        "podIP": "192.168.28.229",
                        "podIPs": [
                            {
                                "ip": "192.168.28.229"
                            }
                        ],
                        "qosClass": "Burstable",
                        "startTime": "2021-08-11T11:32:01Z"
                    }
                }
            ]
        }
    },
    methods: {
        view() {

        },
        deleteItem() {

        }
    }
}
</script>

<style>

</style>