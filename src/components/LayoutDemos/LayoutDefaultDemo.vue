<demo>
默认
</demo>
<template>
    <x-layout>
            <x-header>header</x-header>
            <x-layout>
                <x-sider>sider</x-sider>
                <x-content>content</x-content>
            </x-layout>
            <x-footer>footer</x-footer>
    </x-layout>
    <br />
    <x-layout>
            <x-header>header</x-header>
            <x-content>content</x-content>
    </x-layout>
    <br />
    <x-layout>
            <x-sider>sider</x-sider>
            <x-layout>
                <x-header>header</x-header>
                <x-content>content</x-content>
                <x-footer>footer</x-footer>
            </x-layout>
    </x-layout>
</template>

<script lang="ts">
import Layout from '../../lib/Layout.vue'
import Header from '../../lib/Header.vue'
import Sider from '../../lib/Sider.vue'
import Content from '../../lib/Content.vue'
import Footer from '../../lib/Footer.vue'
export default {
    components:{
        'x-layout':Layout,
        'x-header':Header,
        'x-content':Content,
        'x-footer':Footer,
        'x-sider':Sider,
    }
}
</script>
<style lang="scss" scoped>
    .header{
        text-align: center;
        line-height: 50px;
    }
    .sider{
        text-align: center;
        line-height: 200px;
    }
    .content{
        text-align: center;
        line-height: 200px;
    }
    .footer{
        text-align: center;
        line-height: 50px;
    }
</style>