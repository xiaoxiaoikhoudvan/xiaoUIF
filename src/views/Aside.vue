<template>
  <!-- <transition name="slide"> -->
    <Teleport to="body">
    <div class="aside-overlay" v-show="overlayVisible" @click="closeAsideNav"></div>
    <aside :class="{visible}" @click="clickAsideNav">
    <!-- <aside v-show="menuVisible" :class="visible" @click="clickAsideNav"> -->
      <h2>文档</h2>
      <ol>
        <li>
          <router-link to="/doc/intro">介绍</router-link>
        </li>
        <li>
          <router-link to="/doc/install">安装</router-link>
        </li>
        <li>
          <router-link to="/doc/start">开始使用</router-link>
        </li>
      </ol>
      <h2>组件</h2>
      <ol>
        <li>
          <router-link to="/doc/button">Button 按钮</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog 弹窗</router-link>
        </li>
        <li>
          <router-link to="/doc/switch">Switch 开关</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 标签页</router-link>
        </li>
        <!-- <li>
          <router-link to="/doc/toast">Toast 组件</router-link>
        </li> -->
         <li>
          <router-link to="/doc/input">Input 输入框</router-link>
        </li>
         <li>
          <router-link to="/doc/grid">Grid 布局</router-link>
        </li>
         <li>
          <router-link to="/doc/layout">layout 布局</router-link>
        </li>
      </ol>
    </aside>
    </Teleport>
  <!-- </transition> -->
</template>
<script lang="ts">
import { computed, inject, Ref } from "vue";
export default {
  props:{
    visible:{
      type:Boolean
    }
  },
  setup(props,context) {
    // const menuVisible = inject<Ref<boolean>>("menuVisible");
    const {visible} = props
    const closeAsideNav = ()=>{
      console.log("???????????????");
      
      context.emit("update:visible",false)
    }
    const overlayVisible = computed(()=>{
      console.log("aside_props=>",props);
      
      const clientWidth = document.documentElement.clientWidth
      
      return clientWidth <= 500 ? visible : false;
    })
    return { overlayVisible,closeAsideNav };
  },
};
</script>
<style lang="scss" scoped>
$lightbgc: #E6F7FF;
$black: #02273D;
$deepBlue:#1890FF;
$asideIndex:10;
.aside-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: $asideIndex;
}
aside {
  position: fixed;
  top: 0;
  left: 0;
  width: 285px;
  height: 100vh;
  // padding: 16px 0;
  padding-top: 80px;
  background: #fff;
  box-shadow: 5px 0 5px rgba(#333, 0.1);
  z-index: $asideIndex;
  opacity: 0;
  // transition: all 0.25s cubic-bezier(0.68, 0.18, 0.53, 0.18) 0.1s;
  transition: all 0.25s;
  transform: translateX(-100%);

  &.visible{
    transform: translateX(0);
    opacity: 1;
  }
  @media (min-width: 501px) {
    transform: translateX(0);
    opacity: 1;
  }
  // @media (max-width: 500px) {
  //   background: red;
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   padding-top: 80px;
  //   box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  // }
  > h2 {
    margin-bottom: 4px;
    margin-top: 16px;
    padding: 0 40px;
  }
  > ol {
    line-height: 40px;
    > li {
      > a {
        position: relative;
        height: 40px;
        color: $black;
        display: block;
        padding: 4px 50px;
        text-decoration: none;
        &:hover {
          // color: #fff;
          background: lighten($lightbgc, 0.9) ;
          border-bottom: none;
        }
      }
      .router-link-active {
        background: $lightbgc;
        // color: #fff;
        border-right: 3px solid $black;
        @media (min-width: 500px) {
          border-right: none;
          &::after {
            content: "";
            display: block;
            animation: bdrolate 0.8s;
            position: absolute;
            top: 0;
            right: 0;
            width: 3px;
            height: 40px;
            background-color: $deepBlue;
          }
        }
      }
    }
  }

  @keyframes bdrolate {
    0% {
      transform: rotateX(90deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }
}
</style>
