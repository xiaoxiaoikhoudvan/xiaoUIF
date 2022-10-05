<template>
    <button 
    class="xiao-switch" 
    @click="toggle" 
    :disabled="disabled"
    :class="{'xiao-checked':value,'xiao-disabled':disabled}">
        <span><span class="xiao-switch-loading" v-if="loading"></span></span>
    </button>
</template>
<script lang="ts">
import { ref } from "vue";
export default{
    props:{
            value:Boolean,
            loading:{
                type:Boolean,
                default:false
            },
            disabled:{
                type:Boolean,
                default:false
            }
    },
    setup(props,context){
        const toggle = ()=>{
            context.emit('update:value',!props.value)
        }
        return {toggle}
    }
}
</script>
<style lang="scss">
    $h: 30px;
    $h2: $h - 4px;
    $blue: #1989FA;
    .xiao-switch{
        height: $h;
        width: $h * 2;
        border: none;
        background: grey;
        border-radius: $h / 2;
        position: relative;
        > span {
            position: absolute;
            top: 2px;
            left: 2px;
            height: $h2;
            width: $h2;
            background: white;
            border-radius: $h2 /2;
            transition: all 250ms;

            >.xiao-switch-loading{
                margin-top: 3px;
                width: 20px;
                height: 20px;
                display: inline-block;
                border-radius: 15px;
                border-color: $blue $blue $blue transparent;
                border-style: solid;
                border-width: 2px;
                animation: xiao-spin 1s infinite linear;
            }
        }
        &.xiao-disabled {
            cursor: not-allowed;
        }
        &.xiao-checked {
            background: #1989FA
        }
        &.xiao-checked > span{
            left: calc(100% - #{$h2} - 2px);
        }
    }
</style>