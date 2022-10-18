import Toast from './lib/Toast.vue'
import { createApp,h } from 'vue'
import { createVNode, render } from "vue";
export default{
    install:(app,options)=>{
        console.log("app=>",app);
        
        app.config.globalProperties.$toast = (message)=>{
            console.log("message=>",message);
            const div = document.createElement('div')
            const app = createApp({extends:Toast})
            const instance = app.mount(div)
            console.log("instance=>",instance);
            console.log("instance。el=>",instance.$el);
            
            // const app = createApp({
            //     render(){
            //         return h('div',{style:{
            //             border:'1px solid black',
            //             fontSize:'14px',
            //             position:'fixed',
            //             top:'200px',
            //             left:'50%'
            //         }},`${message}`)
            //     }
            // })
            // const div = document.createElement('div');
            // app.mount(div)
            // document.body.appendChild(div);


            
            // document.body.appendChild(div);
            // const toast = createApp({extends:Toast},{message})
            // toast.mount(div)
            
            
            // let Constructor = app.extend(Toast)
            // const vm = createVNode(Toast,message)
            // render(vm,div)
            // let parent = document.createElement('div')
            // const instance = app.mount(parent)
            // console.log("instance=>",instance);
            // console.log("instance.el=>",instance.$el);
            
            // render(app,parent)
            // document.body.appendChild(parent)
            
            // let constance = app.mount(parent)
            // constance.$slots = message
            // constance.$slots.default = [message]
            // console.log("constance=>",constance);
            // console.log("constance.$el=>",constance.$el);
            // console.log("app=>",app);
            
            // let toast = new Constructor()
            // toast.$slots.default = [message]
            // toast.$mount()
            // document.body.appendChild(toast.$el)
        }
    }
}