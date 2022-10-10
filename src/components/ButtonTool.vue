<template>
    <h1>Button 按钮</h1>
    <Demo :component="ButtonDefaultDemo" />
    <Demo :component="ButtonDisabledDemo" />
    <Demo :component="ButtonLevelDemo" />
    <Demo :component="ButtonLoadingDemo" />
    <Demo :component="ButtonSizeDemo" />
</template>
<script lang="ts">
import Demo from './Demo.vue'
import ButtonDefaultDemo from './ButtonDemos/ButtonDefaultDemo.vue'
import ButtonDisabledDemo from './ButtonDemos/ButtonDisabledDemo.vue'
import ButtonLevelDemo from './ButtonDemos/ButtonLevelDemo.vue'
import ButtonLoadingDemo from './ButtonDemos/ButtonLoadingDemo.vue'
import ButtonSizeDemo from './ButtonDemos/ButtonSizeDemo.vue'

export default{
    components:{
        Demo,
        ButtonDefaultDemo,
        ButtonDisabledDemo,
        ButtonLevelDemo,
        ButtonLoadingDemo,
        ButtonSizeDemo
        },
    setup() {
        return {
        ButtonDefaultDemo,
        ButtonDisabledDemo,
        ButtonLevelDemo,
        ButtonLoadingDemo,
        ButtonSizeDemo}
    }
}
</script>