<template>
    <div class="xiao-tabs">
        <div class="xiao-tabs-nav">
            <div class="xiao-tabs-nav-item"
                v-for="(t,index) in titles"
                @click="select(t)"
                :class="{selected:t===selected}"
                :key="index">{{t}}</div>
        </div>
        <div class="xiao-tabs-content">
            <component class="xiao-tabs-content-item" 
            :class="{selected:c.props.title === selected}"
            v-for="(c,index) in defaults" :is="c" :key="index" />
        </div>
    </div>
</template>
<script lang="ts">
import Tab from './Tab.vue'
import {computed} from 'vue'
export default {
    props:{
        selected:{
            type: String
        }
    },
    setup(props,context) {
        //检查子组件的标签类型
        const defaults = context.slots.default()
        defaults.forEach((tag)=>{
            if(tag.type !== Tab){
                throw new Error('Tabs 子标签必须是 Tab')
            }
        })
        //获取当前点击的页签
        const current = computed(()=>{
            return defaults.filter((tag)=>{
                return tag.props.title === props.selected
            })[0]
        })
        const titles = defaults.map((tag)=>{
            return tag.props.title
        })
        const select = (title:string)=>{
            context.emit('update:selected',title)
        }
        return {defaults,titles,select,current}
    }
}
</script>
<style lang="scss">
$blue:#1989FA;
$color:#333;
$border-color:#d9d9d9;

.xiao-tabs{
    &-nav{
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;
        &-item{
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;

            &:first-child{
                margin-left: 0;
            }
            &.selected{
                color: $blue;
            }
        }
    }
    &-content{
        padding: 8px 0;
        &-item {
            display: none;

            &.selected{
                display: block;
            }
        }
    }
}
</style>