<template>
    <div>
        <h1>Switch 弹窗</h1>
        <Demo :component="SwitchDefaultDemo" />
        <Demo :component="SwitchDisabledDemo" />
        <Demo :component="SwitchLoadingDemo" />
    </div>
</template>
<script lang="ts">
import SwitchDefaultDemo from './SwitchDemos/SwitchDefaultDemo.vue'
import SwitchDisabledDemo from './SwitchDemos/SwitchDisabledDemo.vue'
import SwitchLoadingDemo from './SwitchDemos/SwitchLoadingDemo.vue'
import Demo from './Demo.vue'
export default{
    components:{Demo,SwitchDefaultDemo,SwitchDisabledDemo,SwitchLoadingDemo},
    setup(){
        return {SwitchDefaultDemo,SwitchDisabledDemo,SwitchLoadingDemo}
    }
}
</script>

<style lang="scss">
$border-color:#d9d9d9;

.demo{
    border: 1px solid $border-color;
    margin: 16px 0 32px;
    >h2{
        font-size: 20px;
        padding: 8px 16px;
        border-bottom: 1px solid $border-color;
    }
    &-component{
        padding: 16px;
    }
    &-actions{
        padding: 8px 16px;
        border-top: 1px dashed $border-color;
    }
    &-code{
        padding: 8px 16px;
        border-top: 1px dashed $border-color;

        >pre{
            line-height: 1.1;
            font-family: Consolas,'Courier New',Courier,monospace;
            margin: 0;
        }
    }
}
</style>