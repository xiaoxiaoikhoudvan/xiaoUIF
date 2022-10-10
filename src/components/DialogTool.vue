<template>
    <div>
        <h1>Dialog 弹窗</h1>
        <Demo :component="DialogDefaultDemo" />
    </div>
    
</template>
<script lang="ts">
import {openDialog} from '../lib/openDialog'
import {ref} from 'vue'
import Demo from './Demo.vue'
import DialogDefaultDemo from './DialogDemos/DialogDefaultDemo.vue'
export default{
    components:{Demo,DialogDefaultDemo},
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

        return {DialogDefaultDemo,x,showMessage,f1,f2,showDialog}
    }
}
</script>