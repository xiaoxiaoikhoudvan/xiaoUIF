<template>
    <div>
        <Demo :component="GridDefaultDemo" />
        <Demo :component="GridGutterDemo" />
        <Demo :component="GridMixedDemo" />
        <Demo :component="GridOffsetDemo" />
        <Demo :component="GridResponseDemo" />
        <!-- <Row> -->
            <!-- <Col span="23" offset="1" :pad="{span:12,offset:12}" :narrow-pc="{span:8,offset:12}">
                <div class="demo">1</div>
            </Col> -->
            <!-- <Col span="24" :pad="{span:12}" :narrow-pc="{span:8}">
                <div class="demo">2</div>
            </Col>
            <Col span="24" :pad="{span:12}" :narrow-pc="{span:8}">
                <div class="demo">3</div>
            </Col>
            <Col span="24" :pad="{span:12}" :narrow-pc="{span:8}">
                <div class="demo">4</div>
            </Col>
            <Col span="24" :pad="{span:12}" :narrow-pc="{span:8}">
                <div class="demo">5</div>
            </Col>
            <Col span="24" :pad="{span:12}" :narrow-pc="{span:8}">
                <div class="demo">6</div>
            </Col> -->
        <!-- </Row> -->
    </div>
</template>
<script lang="ts">
import Demo from './Demo.vue'
import GridDefaultDemo from './GridDemos/GridDefaultDemo.vue'
import GridGutterDemo from './GridDemos/GridGutterDemo.vue'
import GridMixedDemo from './GridDemos/GridMixedDemo.vue'
import GridOffsetDemo from './GridDemos/GridOffsetDemo.vue'
import GridResponseDemo from './GridDemos/GridResponseDemo.vue'
export default {    
    components:{Demo},
    setup(props) {
        return {GridDefaultDemo,GridGutterDemo,GridMixedDemo,GridOffsetDemo,GridResponseDemo}
    }
}
</script>
<style lang="scss" scoped>
    // .demo{
    //     background: #ddd;
    //     border: 1px solid #666;
    //     height: 100p;
    // }
</style>