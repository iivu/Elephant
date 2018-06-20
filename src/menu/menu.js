import Reorder from '@material-ui/icons/Reorder'
import Group from '@material-ui/icons/Group'
import Person from '@material-ui/icons/Person'
import SystemUpdate from '@material-ui/icons/SystemUpdate'
import Store from '@material-ui/icons/Store'
import LocalActivity from '@material-ui/icons/LocalActivity'
import TransferWithinAStation from '@material-ui/icons/TransferWithinAStation'
import InsertChart from '@material-ui/icons/InsertChart'
import AddAlert from '@material-ui/icons/AddAlert'
import Message from '@material-ui/icons/Message'


const MENU_CONFIG = [
    {
        name:'账号管理',
        icon:Group,
        path:'',
    },
    {
        name:'角色管理',
        icon:Person,
        path:'',
    },
    {
        name:'流量管理',
        icon:SystemUpdate,
        children:[
            {name:'类型列表',path:''},
            {name:'流量包列表',path:''},
        ],
    },
    {
        name:'订单管理',
        icon:Reorder,
        children:[
            {name:'总订单记录',path:''},
            {name:'退款订单记录',path:''},
            {name:'支付订单异常记录',path:''},
            {name:'联通订单异常记录',path:''},
        ],
    },
    {
        name:'福利管理',
        icon:Store,
        children:[
            {name:'福利商品',path:''},
            {name:'话费券',path:''},
            {name:'商品卡券',path:''},
            {name:'兑换记录',path:''},
        ],
    },
    {
        name:'活动管理',
        icon:LocalActivity,
        children:[
            {name:'活动列表',path:''},
            {name:'活动记录',path:''},
        ]
    },
    {
        name:'用户管理',
        icon:TransferWithinAStation,
    },
    {
        name:'统计管理',
        icon:InsertChart,
        children:[
            {name:'话费产品统计',path:''},
            {name:'流量产品统计',path:''},
        ],
    },
    {
        name:'模板管理',
        icon:Message,
        path:'',
    },
    {
        name:'通知管理',
        icon:AddAlert,
        path:'',
    },
]

export default MENU_CONFIG