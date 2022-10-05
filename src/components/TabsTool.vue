<template>
    <Demo :component="TabsDemo1" />
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