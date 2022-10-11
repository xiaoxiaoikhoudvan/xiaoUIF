<template>
    <div class="col" :class="[span && `col-${span}`,offset && `offset-${offset}`]"
        :style="{paddingLeft:x/2 + 'px',paddingRight: x/2 + 'px'}">
        <div style="border: 1px solid green">
            <slot></slot>
        </div>
        
    </div>
</template>
<script lang="ts">
import {inject} from 'vue'
export default {
    props:{
        span:{
            type:[Number,String]
        },
        offset:{
            type:[Number,String]
        }
    },
    setup(props) {
      const x = inject('gutter')  
      console.log("x=>",x);
      return {x}
    }
}
</script>

<style lang="scss" scoped>
    .col{
        height:100px;
        width: 50%;
        $class-prefix:col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n}{
                width: ($n/24) * 100%;
            }
        }
        $class-prefix:offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n}{
                margin-left: ($n/24) * 100%;
            }
        }
        
    }
</style>