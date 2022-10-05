<template>
    <div>
        <h1>Dialog组件展示</h1>
        <Demo :component="DialogDemo1" />
    </div>
    
</template>
<script lang="ts">
import {openDialog} from '../lib/openDialog'
import {ref} from 'vue'
import Demo from './Demo.vue'
import DialogDemo1 from './DialogDemo1.vue'
export default{
    components:{Demo},
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

        return {DialogDemo1,x,showMessage,f1,f2,showDialog}
    }
}
</script>