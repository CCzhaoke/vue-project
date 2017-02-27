import index from './components/index'
import item from './components/item'
import my from './components/my'
import details from './components/details'
import login from './components/login'
import head from './components/head'
import mate from './components/mate'
import butler from './components/butler'
import ass from './components/ass'
import panel from './components/panel'
import exclusive from './components/exclusive'
import refer from './components/refer'
import view from './components/view'
import about from './components/about'
import plan from './components/plan'
import des from './components/des'
import testState from './components/test/testState'
import caseState from './components/test/caseState'

const routes=[
	{
		name:'index',
		path:'/index',
		component:index
	},
	{
		name:'item',
		path:'/item',
		component:item
	},{
		name:'des',
		path:'/des',
		component:des
	},
	{
		name:'my',
		path:'/my',
		component:my
	},{
		name:'details',
		path:'/',
		component:details
	},{
		name:'butler',
		path:'/butler',
		component:butler
	},{
		name:'ass',
		path:'/ass',
		component:ass
	},{
		name:'head',
		path:'/head',
		component:head
	},{
		name:'mate',
		path:'/mate',
		component:mate
	},{
		name:'login',
		path:'/login',
		component:login
	},{
		name:'panel',
		path:'/panel',
		component:panel
	},{
		name:'exclusive',
		path:'/exclusive',
		component:exclusive
	},{
		name:'refer',
		path:'/refer',
		component:refer
	},{
		name:'view',
		path:'/view',
		component:view
	},{
		name:'about',
		path:'/about',
		component:about
	},{
		name:'plan',
		path:'/plan',
		component:plan
	},{
		name:'testState',
		path:'/testState',
		component:testState
	},{
		name:'caseState',
		path:'/caseState',
		component:caseState
	}
]

module.exports=routes
