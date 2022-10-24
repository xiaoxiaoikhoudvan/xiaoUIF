<template>
    <div
    v-show="visible"
    class="xiao-coast" 
    :class="classes"
    @mouseleave="startTimer"
    @mouseenter="clearTimer"
    >
        <span>{{text}}</span>
        <div class="line" :class="lineStyle"></div>
        <span class="close" @click="handleClose">关闭</span>
    </div>
</template>
<script lang="ts">
import {computed,onMounted,ref} from 'vue'
export default {
    name:'xiaoToast',
    props:{
        text:{
            type:String
        },
        type:{
            type:String,
            default:'normal'
        },
        autoClose:{
            type:Boolean,
            default:true
        },
        autoCloseDelay:{
            type:Number,
            default:0
        },
        id:{
            type: String,
            required: false,
            default: '',
        },
        // closeButton:{
        //     type:Object,
        //     default:()=>{
        //         return {
        //             text:'关闭',callback:(toast)=>{
        //                 // toast.close()
        //             }
        //         }
        //     }
        // }
    },
    setup(props,context) {
        console.log("props=>",props);
        const {type,text,autoClose,autoCloseDelay} = props
        const timer = ref(null)
        const visible = ref(false)
        onMounted(()=>{
            visible.value = true
            startTimer()
        })
        const handleClose = () => {
            visible.value = false;
            context.emit('destroy');
        };
        const startTimer = ()=>{
            if(props.autoCloseDelay > 0){
                // timer.value = setTimeout(()=>{
                //     handleClose();
                // },autoCloseDelay * 1000)
            }
        }
        const classes = computed(()=>{
            return {
                [`xiao-coast-${type}`]:type,
            }
        })
        const lineStyle = computed(()=>{
            return {
                [`xiao-line-${type}`]:type
            }
        })
        return{classes,visible,timer,handleClose,lineStyle}
    }
}
</script>

<style lang="scss" scoped>
    $font-size:14px;
    $toast-height:40px;
    $border-radius:4px;
    $normal-bg:#EDF2FC;
    $normal-textColor:#909399;
    $normal-border:#EBEEF5;
    $success-bg:#F0F9EB;
    $success-textColor:#67C23A;
    $success-border:#E1F3D8;
    $warning-bg:#FDF6EC;
    $warning-textColor:#E6A23C;
    $warning-border:#FAECD8;
    $error-bg:#FEF0F0;
    $error-textColor:#F56C6C;
    $error-border:#FDE2E2;
    .xiao-coast{
        height:$toast-height;
        font-size:$font-size;
        position:relative;
        top:-870px;
        left:800px;
        width: 200px;
        padding:8px 16px;
        border-radius: 4px;
        display:flex;
        align-items:center;
        &.xiao-coast-normal{
            background: $normal-bg;
            color: $normal-textColor;
        }
        &.xiao-coast-success{
            background: $success-bg;
            color: $success-textColor;
            border: 1px solid $success-border;
        }
        &.xiao-coast-warning{
            background: $warning-bg;
            color: $warning-textColor;
            border: 1px solid $warning-border;
        }
        &.xiao-coast-error{
            background: $error-bg;
            color: $error-textColor;
            border: 1px solid $error-border;
        }
    }
    .close{
        // border: 1px solid red;
        padding-left: 2px;
        font-size:$font-size;
        position:absolute;
        top:9px;
        left:154px;
        &:hover{
            cursor: pointer;
        }
    }
    .line{
        height: 100%;
        margin-left: 14px;
    }
    .xiao-line-normal{
        border-left: 1px solid $normal-textColor;
    }
    .xiao-line-success{
        border-left: 1px solid $success-textColor;
    }
    .xiao-line-warning{
        border-left: 1px solid $warning-textColor;
    }
    .xiao-line-error{
        border-left: 1px solid $error-textColor;
    }

</style>