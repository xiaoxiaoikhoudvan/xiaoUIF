<template>
    <button @click="click1">dddd</button>
</template>
<script lang="ts">
import {onMounted,inject} from 'vue'
import {showMsg} from '../toastPlugin'
export default {
    setup(props,context) {
        const click1 = ()=>{
            showMsg({text:'jjjjj',type:'uuuuu'})
        }
        return {click1}
    }
}
</script>
<style lang="scss" scoped>

</style>