<demo>
基础布局
</demo>
<template>
    <x-row>
        <!-- <x-col span="24" :pad="{span:24}" :narrow-pc="{span:24}"> -->
        <x-col span="24">
                <div class="xiao-grid-content bg-purple-dark"></div>
        </x-col>
    </x-row>
    <x-row>
        <x-col :span="12"><div class="xiao-grid-content bg-purple"></div></x-col>
        <x-col :span="12"><div class="xiao-grid-content bg-purple-light"></div></x-col>
    </x-row>
    <x-row>
        <x-col :span="8"><div class="xiao-grid-content bg-purple"></div></x-col>
        <x-col :span="8"><div class="xiao-grid-content bg-purple-light"></div></x-col>
        <x-col :span="8"><div class="xiao-grid-content bg-purple"></div></x-col>
    </x-row>
    <x-row>
        <x-col :span="6"><div class="xiao-grid-content bg-purple"></div></x-col>
        <x-col :span="6"><div class="xiao-grid-content bg-purple-light"></div></x-col>
        <x-col :span="6"><div class="xiao-grid-content bg-purple"></div></x-col>
        <x-col :span="6"><div class="xiao-grid-content bg-purple-light"></div></x-col>
    </x-row>
    <x-row>
        <x-col :span="4"><div class="xiao-grid-content bg-purple"></div></x-col>
        <x-col :span="4"><div class="xiao-grid-content bg-purple-light"></div></x-col>
        <x-col :span="4"><div class="xiao-grid-content bg-purple"></div></x-col>
        <x-col :span="4"><div class="xiao-grid-content bg-purple-light"></div></x-col>
        <x-col :span="4"><div class="xiao-grid-content bg-purple"></div></x-col>
        <x-col :span="4"><div class="xiao-grid-content bg-purple-light"></div></x-col>
    </x-row>
</template>

<script lang="ts">
import Row from '../../lib/Row.vue'
import Col from '../../lib/Col.vue'
export default {
    components:{
        'x-row':Row,
        'x-col':Col
    }
}
</script>
<style lang="scss" scoped>
    .xiao-grid-content{
        border-radius: 4px;
        min-height: 36px;
        margin-bottom: 20px;
    }
    .bg-purple-dark{
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
</style>