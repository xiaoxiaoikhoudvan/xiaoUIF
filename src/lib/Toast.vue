<template>
    <div
        v-show="visible"
        :class="classes"

        @mouseenter="stopTimer"
        @mouseleave="startTimer"
    >
    <span>{{text}}</span>
    <Icon v-if="showClose" class="coast-toast-close" name="clear" @click="handleClose" />
    </div>
</template>

<script lang="ts">
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

    }
}
</script>