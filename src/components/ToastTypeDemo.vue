<demo>
不同状态
</demo>

<template>
  <div>
    <Button @click="onClick1">普通 normal</Button>
    <Button @click="onClick2">次级 secondary</Button>
    <Button @click="onClick3">成功 success</Button>
    <Button @click="onClick4">警告 warning</Button>
    <Button @click="onClick5">错误 error</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import Toast from '../lib/Toast.vue'
export default {
    components:{Button,Toast},
    setup(props,context){
      const onClick1 = ()=>{
      }
      const onClick2 = ()=>{
        // Toast({text: '这是一条普通的消息提示~', type: 'normal'})
      }
      const onClick3 = ()=>{
        // Toast({text: '这是一条普通的消息提示~', type: 'normal'})
      }
      const onClick4 = ()=>{
        // Toast({text: '这是一条普通的消息提示~', type: 'normal'})
      }
      const onClick5 = ()=>{
        // Toast({text: '这是一条普通的消息提示~', type: 'normal'})
      }
      return {onClick1,onClick2,onClick3,onClick4,onClick5}
    }
}
</script>

<style lang="scss" scoped>
.coast-button {
  margin-top: 14px;
}
</style>
