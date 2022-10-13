<template>
    <div>
        <Row>
            <Col span="24" :pad="{span:12}" :narrow-pc="{span:8}">
                <div class="demo">1</div>
            </Col>
            <Col span="24" :pad="{span:12}" :narrow-pc="{span:8}">
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
            </Col>
        </Row>
    </div>
</template>
<script lang="ts">
import Row from '../lib/Row.vue'
import Col from '../lib/Col.vue'
export default {    
    components:{Row,Col}
}
</script>
<style lang="scss" scoped>
    .demo{
        background: #ddd;
        border: 1px solid #666;
        height: 100p;
    }
</style>