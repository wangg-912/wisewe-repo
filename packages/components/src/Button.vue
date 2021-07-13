<template>
    <ElButton :type="defaultType" :disabled="defaultDisabled" >{{defaultVal}}</ElButton>
</template>
<script lang="ts">
import { computed, defineComponent, SetupContext } from 'vue';
import { ElButton } from 'element-plus';
export enum EWButtonType{
    PRIMARY = 'primary',
    SUCCESS = 'success',
    INFO = 'info',
    WARNING = 'warning',
    DANGER = 'danger'
}
export interface IWButtonProps {
  type: string
  disabled: boolean,
  value: string
}

export default defineComponent({
    name: 'WButton',
    props:{
        type: {
            type: String,
            required: true,
            default: EWButtonType.INFO
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false
        },
        value:{
            type:String,
            required:true,
            default:'按钮'
        }
    },
    components:{ElButton},
    setup(props:IWButtonProps,context: SetupContext){
        const defaultType = computed(()=>props.type);
        const defaultDisabled = computed(()=>props.disabled);
        const defaultVal = computed(()=>props.value);
        return{
            defaultType,
            defaultDisabled,
            defaultVal
        }
    }
})
</script>