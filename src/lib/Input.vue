<template>
    <div class="xiao-wrapper" :class="{'xiao-error':error}">
      <input 
      :value="value" 
      type="text" 
      :disabled="disabled" 
      :readonly="readonly"
      >
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
      }
    }
}
</script>
<style lang="scss" scoped>
$height:32px;
$border-color:#999;
$border-color-hover:#666;
$border-radius:4px;
$font-size:12px;
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
      height: 32px;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 0 8px;
      font-size:inherit;
      &:hover{
        border-color: $border-color-hover;
      }
      &:focus{
        box-shadow: inset 0 1px 3px;
        outline: none;
      }
      &[disabled],&[readonly]{
        border-color:#333;
        color:#333;
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