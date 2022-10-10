<template>
    <div>
        <Row>
            <Col></Col>
            <Col></Col>
        </Row>
        <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
        </Row>
        <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
        </Row>
        <Row>
            <Col span="2"></Col>
            <Col span="22"></Col>
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