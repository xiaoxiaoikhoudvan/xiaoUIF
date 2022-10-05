<template>
    <div>
        <h1>Switch 组件展示</h1>
        <Demo :component="SwitchDemo1" />
        <Demo :component="SwitchDemo2" />
        <Demo :component="SwitchDemo3" />
    </div>
</template>
<script lang="ts">
import SwitchDemo1 from './SwitchDemo1.vue'
import SwitchDemo2 from './SwitchDemo2.vue'
import SwitchDemo3 from './SwitchDemo3.vue'
import Demo from './Demo.vue'
import {ref} from 'vue'
export default{
    components:{Demo,SwitchDemo1,SwitchDemo2,SwitchDemo3},
    setup(){
        return {SwitchDemo1,SwitchDemo2,SwitchDemo3}
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