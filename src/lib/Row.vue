<template>
    <div class="row" :style="rowStyle">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import { provide,computed } from 'vue'
export default {
    props:{
        gutter:{
            type:[Number,String]
        }
    },
    setup(props){
        const {gutter} = props;
        const rowStyle = computed(()=>{
            return {
                marginLeft:-gutter/2+'px',
                marginRight:-gutter/2+'px'
            }
        })
        provide('gutter',gutter)
        return {rowStyle}
    }
}
</script>

<style lang="scss" scoped>
    .row{
        display: flex;
        flex-wrap: wrap;
    }
</style>