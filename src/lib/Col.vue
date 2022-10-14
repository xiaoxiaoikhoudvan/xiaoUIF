<template>
    <div class="col" :class="colClass" :style="colStyle">
            <slot></slot>
    </div>
</template>
<script lang="ts">
import {inject,ref,computed} from 'vue'
let validator = (value)=>{
    let keys = Object.keys(value)
    let valid = true
    keys.forEach(key=>{
        if(!['span','offset'].includes(key)){
            valid = false
        }
    })
    return valid
}
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
        //     validator,
        // },
        pad:{
            type:Object,
            validator,
        },
        narrowPc:{
            type:Object,
            validator,
        },
        widePc:{
            type:Object,
            validator,
        },
        pc:{
            type:Object,
            validator,
        },
    },
    setup(props) {
        const {span,offset,pad,narrowPc,pc,widePc} = props
        console.log("props=>",props);
        console.log("props.span=>",props.span);
        
      const gutter = inject('gutter')  
      let createClasses = (obj,str='')=>{
            if(!obj){return []}
            let array = []
            if(obj.span){
                array.push(`col-${str}${obj.span}`)
            }
            if(obj.offset){
                array.push(`offset-${str}${obj.offset}`)
            }
            return array
        }
      let colClass = computed(()=>{
        console.log("this=>",this);
        return [
            ...createClasses({span,offset}),
            ...createClasses(pad,'pad-'),
            ...createClasses(narrowPc,'narrow-pc-'),
            ...createClasses(pc,'pc-'),
            ...createClasses(widePc,'wide-pc-')
            // props.span && `col-${props.span}`,
            // props.offset && `offset-${props.offset}`,
            // ...(props.phone ? [`col-phone-${props.phone.span}`] : []),
            // ...(props.pad ? [`col-pad-${props.pad.span}`] : []),
            // ...(props.narrowPc ? [`col-narrow-pc-${props.narrowPc.span}`] : []),
            // ...(props.widePc ? [`col-wide-pc-${props.widePc.span}`] : []),
            // ...(props.pc ? [`col-pc-${props.pc.span}`] : [])
        ]
      })
      let colStyle = computed(()=>{
        return {
            paddingLeft:gutter as number/2 + 'px',
            paddingRight:gutter as number/2 + 'px'
        }
      })
      return {gutter,colStyle,colClass,createClasses}
    }
}
</script>

<style lang="scss" scoped>
    .col{
        // height:100px;
        // width: 50%;
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
    @media (min-width:577px){
        $class-prefix:col-pad-;
        @for $n from 1 through 24 {
            .col.#{$class-prefix}#{$n}{
                width: ($n/24) * 100%;
            }
        }
        $class-prefix:offset-pad-;
        @for $n from 1 through 24 {
            .col.#{$class-prefix}#{$n}{
                margin-left: ($n/24) * 100%;
            }
        }
    }
    @media (min-width:769px){
        $class-prefix:col-narrow-pc-;
        @for $n from 1 through 24 {
            .col.#{$class-prefix}#{$n}{
                width: ($n/24) * 100%;
            }
        }
        $class-prefix:offset-narrow-pc-;
        @for $n from 1 through 24 {
            .col.#{$class-prefix}#{$n}{
                margin-left: ($n/24) * 100%;
            }
        }
    }
    @media (min-width:993px){
        $class-prefix:col-pc-;
        @for $n from 1 through 24 {
            .col.#{$class-prefix}#{$n}{
                width: ($n/24) * 100%;
            }
        }
        $class-prefix:offset-pc-;
        @for $n from 1 through 24 {
            .col.#{$class-prefix}#{$n}{
                margin-left: ($n/24) * 100%;
            }
        }
    }
    @media (min-width:1201px){
        $class-prefix:col-wide-pc-;
        @for $n from 1 through 24 {
            .col.#{$class-prefix}#{$n}{
                width: ($n/24) * 100%;
            }
        }
        $class-prefix:offset-wide-pc-;
        @for $n from 1 through 24 {
            .col.#{$class-prefix}#{$n}{
                margin-left: ($n/24) * 100%;
            }
        }
    }
    // @media (max-width:576px){
    //     $class-prefix:col-phone-;
    //     @for $n from 1 through 24 {
    //         .col.#{$class-prefix}#{$n}{
    //             width: ($n/24) * 100%;
    //         }
    //     }
    //     $class-prefix:offset-phone-;
    //     @for $n from 1 through 24 {
    //         .col.#{$class-prefix}#{$n}{
    //             margin-left: ($n/24) * 100%;
    //         }
    //     }
    // }
</style>