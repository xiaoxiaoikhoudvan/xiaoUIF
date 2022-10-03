<template>
        <div class="topnav">
            <router-link to="/" class="logo">
                <svg class="icon">
                    <use xlink:href="#icon-home"></use>
                </svg>
            </router-link>
            <ul class="menu">
                <li>
                    <router-link to="/doc">组件</router-link>
                </li>
            </ul>
            <svg 
            v-if="asideButtonVisible"
            class="toggleAside" 
            @click="toggleMenu">
            <use xlink:href="#icon-menu"></use>
            </svg>
        </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue';
export default{
    props:{
        asideButtonVisible:{
            type:Boolean,
            default:false
        }
    },
   setup() {
        const menuVisible = inject<Ref<boolean>>('menuVisible');
        const toggleMenu = ()=>{
            menuVisible.value = !menuVisible.value
        }
        return {toggleMenu}
    } 
}
</script>
<style lang="scss" scoped>
$text-color:#02273D;
    .topnav{
        color: $text-color;
        display: flex;
        padding: 16px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 10;//为了写z-index要加上position:relative
        justify-content: center;
        align-items: center;
        > .logo{
            max-width: 6em;
            margin-right: auto;
            >svg{
                width: 32px;
                height: 32px;
            }
        }
        > .menu {
            display: flex;
            white-space: nowrap;
            flex-wrap: nowrap;
            > li{
                margin: 0 1em;
            }
        }
        > .toggleAside{
            height: 24px;
            width: 24px;
            position: absolute;
            left: 16px;
            display: none;
            // top: 50%;
            // transform: translateY(-50%);
        }
        @media (max-width:500px) {
            > .menu{display: none;}
            > .logo{margin:0 auto}
            > .toggleAside{display: inline-block;}
        }
    }
</style>