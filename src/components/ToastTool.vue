<template>
    <x-button @click="click1">默认</x-button>
    <x-button @click="click2">成功</x-button>
    <x-button @click="click3">警告</x-button>
    <x-button @click="click4">错误</x-button>
</template>
<script lang="ts">
import {onMounted,inject} from 'vue'
import Button from '../lib/Button.vue'
import {showMsg} from '../toastPlugin'
export default {
    components:{'x-button':Button},
    setup(props,context) {
        const click1 = ()=>{
            showMsg({text:'这是一条普通消息',type:'normal'})
        }
        const click2 = ()=>{
            showMsg({text:'这是一条成功消息',type:'success'})
        }
        const click3 = ()=>{
            showMsg({text:'这是一条警告消息',type:'warning'})
        }
        const click4 = ()=>{
            showMsg({text:'这是一条错误消息',type:'error'})
        }
        return {click1,click2,click3,click4}
    }
}
</script>
<style lang="scss" scoped>

</style>