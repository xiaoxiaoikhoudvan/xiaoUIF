<template>
  <router-view />
</template>

<script lang="ts">
import {ref,provide} from "vue"
import {router} from './router'
import plugin from './plugin'
export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 500 ? false : true);
    provide('menuVisible',menuVisible);
    provide('plugin',plugin)
    router.afterEach(()=>{
      if(width <= 500){
        menuVisible.value = false;
      }
    })
  } 
}
</script>
