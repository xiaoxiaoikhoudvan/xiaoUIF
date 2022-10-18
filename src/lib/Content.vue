<template>
    <div class="content">
        <slot></slot>
    </div>
</template>
<script lang="ts">
export default {
    name:'xiaoContent'
}
</script>

<style lang="scss" scoped>
    .content{
        flex-grow: 1;
        background: #E9EEF3;
        
    }
</style>