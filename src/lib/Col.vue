<template>
    <div class="col" :class="colClass" :style="colStyle">
            <slot></slot>
    </div>
</template>
<script lang="ts">
import {inject,ref,computed} from 'vue'
export default {
    props:{
        span:{
            type:[Number,String]
        },
        offset:{
            type:[Number,String]
        },
        // phone:{
        //     type:Object,
        // }
    },
    setup(props) {
      const gutter = inject('gutter')  
      let colClass = computed(()=>{
        return [
            props.span && `col-${props.span}`,
            props.offset && `offset-${props.offset}`
        ]
      })
      let colStyle = computed(()=>{
        return {
            paddingLeft:gutter as number/2 + 'px',
            paddingRight:gutter as number/2 + 'px'
        }
      })
      return {gutter,colStyle,colClass}
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
    @media (max-width:576px){

    }
</style>