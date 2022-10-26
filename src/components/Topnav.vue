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
        console.log("menuVisible===>",menuVisible);
        
        const toggleMenu = ()=>{
            menuVisible.value = !menuVisible.value
            console.log("toggleMenu_menuVisible.value",menuVisible.value);
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
        background-color: #fff;
        top: 0;
        left: 0;
        width: 100%;
        box-shadow: 0 5px 5px rgba(#333, 0.1);
        z-index: 11;//为了写z-index要加上position:relative
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
            // left: 16px;
            // top: 50%;
            // overflow: hidden;
            // top: 50%;
            // transform: translateY(-50%);
        }
        @media (max-width:500px) {
            > .toggleAside{
                display: inline-block;
            }
            > .menu{
                display: none;
            }
            > .logo{
                margin:0 auto
            }
        }
    }
</style>