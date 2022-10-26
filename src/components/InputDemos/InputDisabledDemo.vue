<demo>
禁用状态
</demo>
<template>
    <x-input v-model:value="value" placeholder="请输入内容" disabled />
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