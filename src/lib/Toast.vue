<template>
    <div
        v-show="visible"
        :class="classes"

        @mouseenter="stopTimer"
        @mouseleave="startTimer"
    >
    <span>{{text}}</span>
    <Icon v-if="showClose" class="xiao-toast-close" name="clear" @click="handleClose" />
    </div>
</template>

<script lang="ts">
import {ref,computed} from 'vue'
export default {
    props:{
        text:{
            type:String,
            default:''
        },
        type:{
            type:String,
            default:'normal'
        },
        delay:{
            type:Number,
            default:3,
        },
        showClose:{
            type:Boolean,
            default:false,
        },
        id:{
            type:String,
            default:''
        }
    },
    setup(props){
        console.log("props=>",props);
        
        const {type} = props
        const visible = ref(false)
        const timer = ref(null)
        const classes = computed(()=>{
            return{
                [`xiao-toast-${type}`]:type
            }
        })
        return {classes}
    }
}
</script>
<style lang="scss">
    .xiao-toast-normal{
        border: 1px solid red;
    }
</style>