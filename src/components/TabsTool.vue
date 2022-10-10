<template>
    <div>
        <h1>Tabs 标签页</h1>
        <Demo :component="TabsDefaultDemo" />
    </div>
</template>
<script lang="ts">
import Demo from './Demo.vue'
import TabsDefaultDemo from './TabsDemos/TabsDefaultDemo.vue'
import {ref} from 'vue'
export default {
    components:{Demo,TabsDefaultDemo},
    setup() {
        const x = ref('导航11')
        return {x,TabsDefaultDemo}
    }
}
</script>