<template>
    <div class="layout" :class="{'hasSider':hasSider}">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import {onMounted,computed,ref} from 'vue'
export default {
    name:'xiaoLayout',
    setup(props,context) {
        let hasSider = ref(false)
         onMounted(()=>{
                context.slots.default().forEach((tag)=>{
                //@ts-ignore
                if(tag.type.name === "xiaoSider"){
                    hasSider.value = true
                }
            })
        })
        return {hasSider}
    }
}
</script>

<style lang="scss" scoped>
    .layout{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        &.hasSider{
            flex-direction: row;
        }
    }
</style>