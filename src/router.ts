import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchTool from './components/SwitchTool.vue'
import ButtonTool from './components/ButtonTool.vue'
import DialogTool from './components/DialogTool.vue'
import TabsTool from './components/TabsTool.vue'
import ToastTool from './components/ToastTool.vue'
import InputTool from './components/InputTool.vue'
import GridTool from './components/GridTool.vue'
import LayoutTool from './components/LayoutTool.vue'
import Introduce from './views/Introduce.vue'
import Start from './views/Start.vue'
import Install from './views/Install.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {
            path:'/doc',
            component:Doc,
            children:[
            {path:'',redirect:'/doc/intro'},
            {path:'intro',component:Introduce},
            {path:'start',component:Start},
            {path:'install',component:Install},
            {path:"switch",component:SwitchTool},
            {path:"button",component:ButtonTool},
            {path:"dialog",component:DialogTool},
            {path:"tabs",component:TabsTool},
            {path:"toast",component:ToastTool},
            {path:"input",component:InputTool},
            {path:"grid",component:GridTool},
            {path:"layout",component:LayoutTool}
        ]},
    ]
});