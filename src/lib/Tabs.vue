<template>
    <div class="xiao-tabs">
        <div class="xiao-tabs-nav" ref="container">
            <div class="xiao-tabs-nav-item"
                v-for="(t,index) in titles"
                :ref="el => { if(t===selected) selectedItem = el}"
                @click="select(t)" :class="{selected:t===selected}"
                :key="index">{{t}}
            </div>
            <div ref="indicator" class="xiao-tabs-nav-indicator"></div>
        </div>
        <div class="xiao-tabs-content">
            <!-- <component class="xiao-tabs-content-item" 
            :class="{selected:c.props.title === selected}"
            v-for="(c,index) in defaults" :is="c" :key="index" /> -->
            <component :is="current" :key="current.props.title" />
        </div>
    </div>
</template>
<script lang="ts">
import Tab from './Tab.vue'
import {computed,ref,watchEffect,onMounted,onUpdated} from 'vue'
export default {
    props:{
        selected:{
            type: String
        }
    },
    setup(props,context) {
        const selectedItem = ref<HTMLDivElement>(null)
        const indicator = ref<HTMLDivElement>(null)
        const container = ref<HTMLDivElement>(null)
        // const x = ()=>{
            
        // }
        //第一次挂载以及更新后都会执行
        onMounted(()=>{
            watchEffect(()=>{
                console.log("effect");
                console.log("selectedItem=>",selectedItem);
                const {width} = selectedItem.value.getBoundingClientRect()
                indicator.value.style.width = width + 'px'
                const {left:left1} = container.value.getBoundingClientRect()
                const {left:left2} = selectedItem.value.getBoundingClientRect()
                const left = left2 - left1
                indicator.value.style.left = left + 'px'
            })
        })
        // onUpdated(x)
        
        //检查子组件的标签类型
        const defaults = context.slots.default()
        defaults.forEach((tag)=>{
            //@ts-ignore
            if(tag.type.name !== Tab.name){
                throw new Error('Tabs 子标签必须是 Tab')
            }
        })
        const current = computed(()=>{
            return defaults.find(tag => tag.props.title === props.selected)
        })
        const titles = defaults.map((tag)=>{
            return tag.props.title
        })
        console.log("titles=>",titles);
        
        const select = (title:string)=>{
            context.emit('update:selected',title)
        }
        return {defaults,titles,select,selectedItem,indicator,container,current}
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
        position: relative;
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
        &-indicator{
            position: absolute;
            width: 100px;
            height: 3px;
            left: 0;
            background: $blue;
            bottom: -1px;
            transition: all 250ms;
        }
    }
    &-content{
        padding: 8px 0;
    }
}
</style>