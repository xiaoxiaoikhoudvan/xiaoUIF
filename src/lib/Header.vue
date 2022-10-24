<template>
    <div class="header">
        <slot></slot>
    </div>
</template>
<script lang="ts">
export default {
    name:"xiaoHeader"
}
</script>

<style lang="scss" scoped>
    .header{
        background: #B3C0D1;
        height: 50px;
    }
</style>