<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script lang="ts">
export default {
    name:'xiaoToast'
}
</script>

<style lang="scss" scoped>
    .toast{
        border: 1px solid red;
    }
</style>