<template>
    <div>
        <h1>Layout 组件展示</h1>
        <Demo :component="LayoutDefaultDemo" />
    </div>
</template>
<script lang="ts">
import Demo from './Demo.vue'
import LayoutDefaultDemo from './LayoutDemos/LayoutDefaultDemo.vue'
export default {
    components:{
        Demo
    },
    setup(props) {
      return{
        LayoutDefaultDemo
      }  
    }
}
</script>
<style lang="scss" scoped>
    
</style>