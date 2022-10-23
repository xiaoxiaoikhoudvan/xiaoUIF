<template>
    <h1>Toast 提示组件</h1>
    <Demo :component="ToastDefaultDemo" />
    <!-- <Demo :component="ButtonDisabledDemo" />
    <Demo :component="ButtonLevelDemo" />
    <Demo :component="ButtonLoadingDemo" />
    <Demo :component="ButtonSizeDemo" /> -->
</template>
<script lang="ts">
import Demo from './Demo.vue'
import ToastDefaultDemo from './ToastDemos/ToastDefaultDemo.vue'

export default{
    components:{Demo},
    setup() {
        return {ToastDefaultDemo}
    }
}
</script>