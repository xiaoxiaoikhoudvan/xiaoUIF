import Toast from './lib/Toast.vue'
import { createApp,h } from 'vue'
import { createVNode, render } from "vue";
export default{
    install:(app,options)=>{
        console.log("app=>",app);
        console.log("options=>",options);
        
        app.config.globalProperties.$toast = (attrs)=>{
            console.log("attrs=>",attrs);
            
            const app = createApp({
                render(){
                    return h('div',{style:{
                        lineHeight:'1.8',
                        height:'40px',
                        border:'1px solid black',
                        fontSize:'14px',
                        position:'fixed',
                        top:'200px',
                        left:'50%',
                        padding:'8px 24px',
                        display:'flex',
                        alignItems:'center',
                    }},`${attrs.message}`)
                }
            })
            const div = document.createElement('div');
            app.mount(div)
            document.body.appendChild(div);


            
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