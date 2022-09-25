<template>
    <div>Button 示例</div>
    <h1>示例1</h1>
    <div>
        <Button>你好</Button>
        <Button theme="button">你好</Button>
        <Button theme="color">你好</Button>
        <Button theme="link">你好</Button>
        <Button theme="text">你好</Button>
    </div>
    <h1>示例2</h1>
    <div>
        <Button size="big">大按钮</Button>
        <Button>默认大小</Button>
        <Button size="small">小按钮</Button>
    </div>
    <h1>示例3</h1>
    <div>
        <Button level="main">主要按钮</Button>
        <Button level="normal">普通按钮</Button>
        <Button level="danger">危险按钮</Button>
        <Button level="success">成功按钮</Button>
    </div>
    <h1>示例4</h1>
    <div>
        <Button disabled>普通禁用按钮</Button>
        <Button theme="link" disabled>链接式禁用按钮</Button>
        <Button theme="text" disabled>文本式禁用按钮</Button>
    </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue"
export default{
    components:{Button},
    setup() {
        const onClick = ()=>{
            
        }
        return {onClick}
    }
}
</script>