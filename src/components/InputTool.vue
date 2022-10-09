<template>
    <div>
        <h1>Input 输入框</h1>
        <Input></Input>
        <Input disabled></Input>
        <Input value="王五" readonly></Input>
        <Input value="李四" error="姓名难听"></Input>
    </div>
</template>
<script lang="ts">
import Demo from './Demo.vue'
import Input from '../lib/Input.vue'
export default {
    components:{Input}
}
</script>