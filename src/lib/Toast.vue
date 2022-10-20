<template>
    <div class="xiao-coast" :class="classes">
        {{text}}
    </div>
</template>
<script lang="ts">
import {computed} from 'vue'
export default {
    name:'xiaoToast',
    props:{
        text:{
            type:String
        },
        type:{
            type:String,
            default:'normal'
        }
    },
    setup(props) {
        console.log("props=>",props);
        const classes = computed(()=>{
            return {
                [`xiao-coast-${props.type}`]:props.type,
            }
        })
        return{classes}
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
        position:fixed;
        top:78px;
        left:50%;
        padding:8px 24px;
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
</style>