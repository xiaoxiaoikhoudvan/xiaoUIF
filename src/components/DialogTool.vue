<template>
    <div>
        <p>Dialog 的文档</p>
    </div>
    <h1>示例1</h1>
    <Button @click="showMessage">提示弹窗</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
        <template v-slot:content>
            <Strong>h11</Strong>
            <div>h22</div>
        </template>
        <template v-slot:title>
            <Strong>加速的标题</Strong>
        </template>
    </Dialog>
    <h2>示例2</h2>
    <Button @click="showDialog">show</Button>
</template>
<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {openDialog} from '../lib/openDialog'
import {ref} from 'vue'
export default{
    components:{Dialog,Button},
    setup(){
        const x = ref(false)
        const showMessage = ()=>{
            x.value = !x.value
        }
        const f1 = ()=>{
            return true
        }
        const f2 = ()=>{
            
        }
        const showDialog = ()=>{
            openDialog({
                title:'标题1',
                content:'你好',
                ok(){
                    console.log("ok");
                },
                cancel(){
                    console.log("cancel");
                    
                }
            })
        }

        return {x,showMessage,f1,f2,showDialog}
    }
}
</script>