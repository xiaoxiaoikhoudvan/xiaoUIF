<template>
    <div>示例1</div>
    <Tabs v-model:selected="x">
        <Tab title="导航11">内容13</Tab>
        <Tab title="导航2222222">内容23</Tab>
    </Tabs>
</template>
<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import {ref} from 'vue'
export default {
    components:{Tabs,Tab},
    setup() {
        const x = ref('导航11')
        return {x}
    }
}
</script>