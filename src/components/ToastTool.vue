<template>
    <div>
        <h1>Toast
            <Demo :component="ToastTypeDemo" />
        </h1>
    </div>
</template>
<script lang="ts">
import ToastTypeDemo from './ToastTypeDemo.vue'
import Demo from './Demo.vue'
export default {
    components:{Demo,ToastTypeDemo},
    setup(props) {
        return {
            ToastTypeDemo
        }
    }
}
</script>