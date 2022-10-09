<template>
    <div>
        <h1>Tabs 标签页</h1>
        <Demo :component="TabsDemo1" />
    </div>
</template>
<script lang="ts">
import Demo from './Demo.vue'
import TabsDemo1 from './TabsDemo1.vue'
import {ref} from 'vue'
export default {
    components:{Demo},
    setup() {
        const x = ref('导航11')
        return {x,TabsDemo1}
    }
}
</script>