<template>
    <div style="border: 1px solid black">
        <Row gutter="20">
            <Col>1</Col>
            <Col>2</Col>
        </Row>
        <Row gutter="20">
            <Col>3</Col>
            <Col>4</Col>
            <Col>5</Col>
        </Row>
        <Row gutter="20">
            <Col>6</Col>
            <Col>7</Col>
            <Col>8</Col>
            <Col>9</Col>
        </Row>
        <Row gutter="20">
            <Col span="2">10</Col>
            <Col span="22">11</Col>
        </Row>
        <Row gutter="20">
            <Col span="2">12</Col>
            <Col span="20" offset="2">13</Col>
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