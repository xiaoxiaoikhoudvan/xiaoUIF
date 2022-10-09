<demo>
默认
</demo>
<template>
    <div>示例1</div>
    <Tabs v-model:selected="x">
        <Tab title="页签1">内容1</Tab>
        <Tab title="页签2">内容2</Tab>
    </Tabs>
</template>
<script lang="ts">
import Tabs from '../../lib/Tabs.vue'
import Tab from '../../lib/Tab.vue'
import {ref} from 'vue'
export default {
    components:{Tabs,Tab},
    setup() {
        const x = ref('页签1')
        return {x}
    }
}
</script>