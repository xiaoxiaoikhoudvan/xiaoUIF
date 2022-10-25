<demo>
基础用法
</demo>
<template>
    <Input v-model:value="value" @change="inputChange" />
    <p>{{value}}</p>
</template>

<script lang="ts">
import Input from '../../lib/Input.vue'
import {ref} from 'vue'
export default {
    components:{
        'x-input':Input
    },
    setup(props) {
        const value = ref(null)
        return{value}
    }
}
</script>
<style lang="scss" scoped>
    .xiao-grid-content{
        border-radius: 4px;
        min-height: 36px;
        margin-bottom: 20px;
    }
    .bg-purple-dark{
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
</style>