import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchTool from './components/SwitchTool.vue'
import ButtonTool from './components/ButtonTool.vue'
import DialogTool from './components/DialogTool.vue'
import TabsTool from './components/TabsTool.vue'
import DocDemo from './components/DocDemo.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc,children:[
            {path:'',component:DocDemo},
            {path:"switch",component:SwitchTool},
            {path:"button",component:ButtonTool},
            {path:"dialog",component:DialogTool},
            {path:"tabs",component:TabsTool}
        ]},
    ]
});