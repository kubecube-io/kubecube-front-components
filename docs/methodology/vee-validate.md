# vee-validate

[vee-validate](https://vee-validate.logaretm.com/v3/overview.html#getting-started)

验证规则集中管理，[规则集](https://github.com/kubecube-io/kubecube-front/blob/main/src/kubecube/plugins/validators.js)

表单中使用 [Validation Provider](https://vee-validate.logaretm.com/v3/api/validation-provider.html#validation-provider) 及 [Validate Observer](https://vee-validate.logaretm.com/v3/api/validation-observer.html#validation-observer)

## Case
```vue
<template>
    <validation-observer
      ref="observer"
      v-slot="{ invalid }"
    >
        <kube-form>
            <validation-provider
              v-slot="{ errors }"
              name="xxxx"
              rules="required"
            >
              <kube-form-item
                label="xxxxx"
                :message="errors && errors[0]"
              >
                <u-input
                  v-model="model.xxxxx"
                  :color="errors && errors[0] ? 'error' : ''"
                  size="huge"
                />
              </kube-form-item>
            </validation-provider>

            <u-submit-button
              :click="submit.bind(this)"
              place="right"
            >
              <template slot-scope="scope">
                <u-linear-layout>
                  <u-button
                    color="primary"
                    :disabled="invalid || scope.submitting"
                    :icon="scope.submitting ? 'loading' : ''"
                    @click="scope.submit"
                  >
                    确定
                  </u-button>
                  <u-button @click="close">
                    取消
                  </u-button>
                </u-linear-layout>
              </template>
            </u-submit-button>
        </kube-form>
    </validation-observer>
</template>
```