<template>
    <button @click="$toast('hello world')">dddd</button>
</template>
<script lang="ts">
import {onMounted,inject} from 'vue'
export default {
    setup(props,context) {
        // $toast()
        // const x = inject('plugin')
        // console.log("xxxxx=>",x);
        // toast()
        // let showToast = ()=>{
        //     console.log("this=====>",this);
        // }
        // return {showToast}
    }
}
</script>
<style lang="scss" scoped>

</style>