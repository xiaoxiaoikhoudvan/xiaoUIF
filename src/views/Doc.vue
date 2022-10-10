<template>
    <div class="layout">
        <Topnav asideButtonVisible class="nav"/>
        <div class="content">
            <Aside />
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
        console.log("menuVisible=>",menuVisible.value);
        
        return {menuVisible}
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
    // aside{
    //     background: #F7FFFD;
    //     width: 150px;
    //     padding: 16px 0;
    //     position: fixed;
    //     top: 0;
    //     left: 0;
    //     padding-top: 70px;
    //     height: 100%;
    //     z-index: $aside-index;
    //     @media (max-width:500px){
    //     }
    //     > h2 {
    //         margin-bottom: 4px;
    //     }
    //     > ol{
    //         > li{
    //             >a{
    //                 //a标签默认是inline元素 要改成block
    //                 display: block;
    //                 padding: 4px 16px;
    //                 text-decoration: none;
    //             }
    //             // .router-link-active{
    //             //     background: white;
    //             // }
    //         }
    //     }
    // }
</style>