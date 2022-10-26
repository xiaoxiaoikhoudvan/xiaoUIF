<template>
    <div class="xiao-wrapper" :class="{'xiao-error':error}">
      <input 
      v-bind="$attrs"
      :value="value" 
      :disabled="disabled" 
      :placeholder="placeholder"
      :readonly="readonly"
      :type="type"
      @change="onChange">
      <template v-if="error">
          <svg class="icon">
            <use xlink:href="#icon-error"></use>
          </svg>
          <span class="xiao-errorMessage">{{error}}</span>
      </template>
    </div>
</template>
<script lang="ts">
export default {
    name:'xiao-input',
    props:{
      value:{
        type:String
      },
      disabled:{
        type:Boolean,
        default:false
      },
      readonly:{
        type:Boolean,
        default:false
      },
      error:{
        type:String
      },
      placeholder:{
        type:String
      },
      type:{
        type:String,
        default:'text'
      }
    },
    setup(props,context) {
      const onChange = (e)=>{
        context.emit("update:value",e.target.value)
      }
      return {onChange}
    }
}
</script>
<style lang="scss" scoped>
$border-color:#C0C4CC;
$border-color-hover:#409EFF;
$border-radius:4px;
$font-size:14px;
$box-shadow-color:rgba(0,0,0,0);
$red:#F1453D;
  .xiao-wrapper{
    font-size:$font-size;
    // display: inline-flex;
    // align-items: center;
    > :not(:last-child) {
      margin-right: .5em;
    }
    > input{
      height: 35px;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 0 8px;
      font-size:inherit;
      &:hover{
        border-color: $border-color-hover;
      }
      &:focus{
        // box-shadow: inset 0 1px 3px;
        border-color: $border-color-hover;
        outline: none;
      }
      &[disabled],&[readonly]{
        border-color:$border-color;
        color:$border-color;
        background:#F5F7FA;
        cursor:not-allowed;
      }
    }
    &.xiao-error{
      > input{
        border-color:$red;
      }
    }
    .xiao-errorMessage{
      color: $red;
      font-size: 10px;
    }
  }
</style>