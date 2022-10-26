<demo>
密码框
</demo>
<template>
    <x-input v-model:value="value" placeholder="请输入密码" type="password" />
</template>

<script lang="ts">
import Input from '../../lib/Input.vue'
import {ref} from 'vue'
export default {
    components:{
        'x-input':Input
    },
    setup(props){
        const value = ref('')
        return {value}
    }
}
</script>
<style lang="scss" scoped>

</style>