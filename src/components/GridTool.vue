<template>
    <div>
        <Row gutter="20">
            <Col span="11">1</Col>
            <Col span="13">2</Col>
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