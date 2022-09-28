<template>
    <button class="xiao-button"
        :class="classes"
        :disabled="disabled">
        <span v-if="loading" class="xiao-loading">

        </span>
        <slot />
    </button>
</template>
<script lang="ts">
import {computed} from 'vue'
export default{
    props:{
        theme:{
            type:String,
            default:"button"
        },
        size:{
            type:String,
            default:"normal"
        },
        level:{
            type:String,
            default:"normal"
        },
        disabled:{
            type:Boolean,
            default:false
        },
        loading:{
            type:Boolean,
            default:false
        }
    },
    setup(props){
        const {theme,size,level} = props
        const classes = computed(()=>{
            return {
                [`xiao-theme-${theme}`]:theme,
                [`xiao-size-${size}`]:size,
                [`xiao-level-${level}`]:size
            }
        })
        return {classes}
    }
}
</script>
<style lang="scss">
    $h: 32px;
    $border-color: #d9d9d9;
    $color: #333;
    $blue: #1989FA;
    $radius: 4px;
    $red:red;
    $grey:grey;
    $green:#07C160;
    .xiao-button{
        box-sizing: border-box;
        height: $h;
        padding: 0 12px;
        cursor: pointer;
        // display: inline-box;
        // justify-content: center;
        // align-items: center;
        // white-space: nowrap;
        background: white;
        color: $color;
        border: 1px solid $border-color;
        border-radius: $radius;
        box-shadow: 0 1px 0 fade-out(black, 0.95);
        // transition: background 250ms;
        & + & {
            margin-left: 8px;
        }
        &:hover,
        &:focus{
            color: $blue;
            border-color: $blue;
        }
        &:focus {
            outline: none;
        }
        &.xiao-theme-color {
            background: $blue;
            color: white;
            border-color: $blue;
            box-shadow: none;
            // &:hover,&:focus{
            //     color: lighten(white,10%);
            // }
        }
        &.xiao-theme-link{
            border-color: transparent;
            color: $blue;
            box-shadow: none;
            &:hover,
            &:focus{
                color: lighten($blue,10%);
            }
        }
        &.xiao-theme-text{
            border-color: transparent;
            box-shadow: none;
            &:hover,
            &:focus{
                background: darken(white,5%);
            }
        }
        &.xiao-theme-button {
            &.xiao-size-big {
                font-size: 24px;
                height:48px;
                padding: 0 16px;
            }
            &.xiao-size-small {
                font-size: 12px;
                height:20px;
                padding: 0 4px;
            }
            &.xiao-theme-button {
                &.xiao-level-main {
                    background: $blue;
                    color: white;
                    border-color: $blue;
                    &:hover,
                    &:focus{
                        background: darken($blue,10%);
                        border-color: darken($blue,10%);
                    }
                }
                &.xiao-level-danger{
                    background: $red;
                    color: white;
                    border-color: $red;
                    &:hover,
                    &:focus{
                        background: darken($red,10%);
                        border-color: darken($red,10%);
                    }
                }
                &.xiao-level-success{
                    background: $green;
                    color: white;
                    border-color: $green;
                    &:hover,
                    &:focus{
                        background: darken($green,10%);
                        border-color: darken($green,10%);
                    }
                }
            }
        }
        &.xiao-theme-button{
            &[disabled] {
                cursor: not-allowed;
                color: $grey;
                &:hover{
                    border-color:$grey
                }
            }
        }
        &.xiao-theme-link,&.xiao-theme-text{
            &[disabled]{
                cursor:not-allowed;
                color:$grey;
            }
        }
        > .xiao-loading{
            width: 14px;
            height: 14px;
            display: inline-block;
            // background: green;
            margin-right: 4px;
            border-radius: 8px;
            border-color: $blue $blue $blue transparent;
            border-style: solid;
            // border-width: 2px;
            animation: xiao-spin 1s infinite linear;
        }
    }
    @keyframes xiao-spin{
        0%{transform: rotate(0deg);}
        100%{transform: rotate(360deg);}
    }
</style>
