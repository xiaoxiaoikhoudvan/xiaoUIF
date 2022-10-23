import { createVNode, render, VNode } from 'vue';
import Toast from './lib/Toast.vue'
const toastQueue: Array<VNode> = [];
let count = 1
const showMsg = (attrs)=>{
    console.log("attrs=>",attrs);
    const _attrs = {
        ...attrs,
        id: `xiao-toast-${count++}`,
    };
    createToast(_attrs)
    
}
const createToast = (attrs)=>{
    console.log("attrs2=>",attrs);
    
    const div = document.createElement('div');
    document.body.appendChild(div);
    const vm = createVNode(Toast, {
        ...attrs,
        onDestroy: () => {
          onDestroy(attrs.id, div);
        },
    });
    console.log("vm=>",vm);
    toastQueue.push(vm);
    render(vm, div);
}
const onDestroy = (id:string,wrapper:HTMLDivElement)=>{
    console.log("id=>",id);
    console.log("wrapper=>",wrapper);
    render(null, wrapper);
    wrapper.remove();
    console.log("toastQueue=>",toastQueue);
    const currentIndex = toastQueue.findIndex(item => {
        console.log("item=>",item);
        const _id = item.component!.props.id;
        return _id === id;
    });
    console.log("currentIndex=>",currentIndex);
    // if (currentIndex === -1) return
    // console.log("toastQueue[currentIndex].el=>",toastQueue[currentIndex].el);
    // const h = toastQueue[currentIndex].el!.offsetHeight;
    // console.log("h=>",h);
    // toastQueue.splice(currentIndex, 1);
    // console.log("toastQueue2=>",toastQueue);
    // if (toastQueue.length < 1) return
    // for (let i = currentIndex; i < toastQueue.length; i++) {
    //     toastQueue[i].component!.props.top = parseInt(toastQueue[i].el!.style.top) - h - 60;
    // }
}

export {showMsg}