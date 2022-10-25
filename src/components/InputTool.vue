<template>
    <div>
        <Demo :component="InputDefaultDemo" />
        <!-- <h1>Input 输入框</h1> -->
        <!-- <Input value="战三" @change="inputChange" />
        <Input disabled />
        <Input value="王五" readonly />
        <Input value="李四" error="姓名难听" /> -->
    </div>
</template>
<script lang="ts">
import Demo from './Demo.vue'
import InputDefaultDemo from './InputDemos/InputDefaultDemo.vue'
import Input from '../lib/Input.vue'
export default {
    components:{Demo},
    setup(props) {
        return{InputDefaultDemo}
    }
}
</script>