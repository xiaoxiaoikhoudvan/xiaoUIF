import { createVNode, render, VNode } from 'vue';
import Toast from './lib/Toast.vue'
const showMsg = (attrs)=>{
    console.log("attrs=>",attrs);
    const div = document.createElement('div');
    document.body.appendChild(div);
    const vm = createVNode(Toast, {
        ...attrs,
        // onDestroy: () => {
        //   onDestroy(options.id, div);
        // },
    });
    render(vm, div);
}

export {showMsg}