<template>
    <div class="layout">
        <Topnav asideButtonVisible class="nav"/>
        <div class="content">
            <Aside :visible="menuVisible" @change="asideVisibleChange"/>
            <!-- <aside v-if="menuVisible">
                <h2>文档</h2>
                <ol>
                    <li>
                        <router-link to="/doc/intro">介绍</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/install">安装</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/start">开始</router-link>
                    </li>
                </ol>
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/doc/switch">Switch 开关</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button 按钮</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog 弹出框</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs 标签页</router-link>
                    </li>
                </ol>
            </aside> -->
            <main>
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>
<script lang="ts">
import { inject, Ref,onMounted } from 'vue'
import Topnav from "../components/Topnav.vue"
import Aside from './Aside.vue'
import { router } from "../router";
export default{
    components:{Topnav,Aside},
    setup() {
        // onMounted(() => {
        //     let main = document.querySelector("main");
        //     console.log("main=>",main);
        //     router.beforeEach(() => {
        //         main.scrollTop = 0;
        //     });
        // });
        const menuVisible = inject<Ref<boolean>>('menuVisible');
        const asideVisibleChange = (visible: boolean) => {
            menuVisible.value = visible;
        };
        console.log("menuVisible=>",menuVisible.value);
        
        return {menuVisible,asideVisibleChange}
    }
}
</script>
<style lang="scss" scoped>
// $aside-index : 10;
.layout{
    display: flex;
    flex-direction: column;
    height: 100vh;
    > .nav{
        flex-shrink: 0;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }
    > .content {
        display: flex;
        padding-top: 60px;
        padding-left: 285px;
        > main {
            overflow: auto;
            flex-grow:1;
            padding: 16px;
        }
        @media (max-width:500px){
            padding-left: 0px;
            main {
                height: 90vh;
                overflow: auto;
                flex-grow: 1;
                // padding: 32px;
            }
        }
    }
}
</style>