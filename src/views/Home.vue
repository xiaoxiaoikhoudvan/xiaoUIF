<template>
    <div class="topnavBanner">
        <Topnav />
        <div class="banner">
            <h1>XIAO</h1>
            <h2>UI组件</h2>
            <p class="actions">
                <router-link class="begin" to="/doc">
                    快速上手<svg class="icon">
                        <use xlink:href="#icon-right"></use>
                    </svg>
                </router-link>
                <a href="https://github.com">
                Github <svg class="icon">
                        <use xlink:href="#icon-github"></use>
                    </svg></a>
            </p>
        </div>
    </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue"
export default{
    components:{Topnav}
}
</script>
<style lang="scss" scoped>
$green:#43B97F;
$border-radius:20px;
$text-color:#02273D;
.topnavBanner{
    background: #F7FFFD;
}
    .banner{
        color: #01293D;
        padding: 240px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        // background: lightblue;
        > .actions{
            padding:8px 0;
            a {
                margin: 0 8px;
                background: #fff;
                display: inline-block;
                $h:28px;
                padding: 8px 24px;
                border-radius: $border-radius;
                &:hover{
                    text-decoration: none;
                }
            }
            .begin{
                // letter-spacing:3px;
                background: $green;
            }
        }
    }
</style>