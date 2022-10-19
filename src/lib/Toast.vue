<template>
    <div class="toast">
        {{text}}
    </div>
</template>
<script lang="ts">
export default {
    name:'xiaoToast',
    props:{
        text:{
            type:String
        },
        type:{
            type:String,
            default:'normal'
        }
    },
    setup(props) {
        console.log("props=>",props);
        
    }
}
</script>

<style lang="scss" scoped>
    .toast{
        // border: 1px solid red;
        // height:'40px';
        // border:'1px solid black';
        // fontSize:'14px';
        // position:'fixed';
        // top:200px;
        // left:'50%',
        // padding:'8px 24px',
        // display:'flex',
        // alignItems:'center',
    }
</style>