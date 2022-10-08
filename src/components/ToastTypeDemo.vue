<demo>
不同状态
</demo>

<template>

  <Button @click="onClick1">普通 normal</Button>
  <Button @click="onClick2">次级 secondary</Button>
  <Button @click="onClick3">成功 success</Button>
  <Button @click="onClick4">警告 warning</Button>
  <Button @click="onClick5">错误 error</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import Toast from '../lib/Toast.vue'
export default {
    components:{Button,Toast},
}
</script>

<style lang="scss" scoped>
.coast-button {
  margin-top: 14px;
}
</style>
