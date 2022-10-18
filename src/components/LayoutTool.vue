<template>
    <div>
        <h1>Layout 组件展示</h1>
        <Demo :component="LayoutDefaultDemo" />
    </div>
        <x-layout>
            <x-header class="x-header">header</x-header>
            <x-layout>
                <x-sider class="x-sider">sider</x-sider>
                <x-content class="x-content">content</x-content>
            </x-layout>
            <x-footer class="x-footer">footer</x-footer>
        </x-layout>
        <x-layout>
            <x-header>header</x-header>
            <x-content>content</x-content>
        </x-layout>
</template>
<script lang="ts">
import Demo from './Demo.vue'
import LayoutDefaultDemo from './LayoutDemos/LayoutDefaultDemo.vue'
export default {
    components:{
        // 'x-layout':Layout,
        // 'x-header':Header,
        // 'x-content':Content,
        // 'x-footer':Footer,
        // 'x-sider':Sider,
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