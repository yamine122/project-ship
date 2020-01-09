import Vue from 'vue'
import Router from 'vue-router'
import Lol from '@/components/lol/Lol.vue'
import CreateRoom from '@/components/lol/CreateRoom.vue'
import JoinRank from '@/components/lol/JoinRank.vue'
import Test from '@/components/Test.vue'
import Kalbaram from '@/components/lol/Kalbaram.vue'
import Joinkal from '@/components/lol/Joinkal.vue'


Vue.use(Router)

export default new Router({
	mode: 'history',
	routes : [
		{path: '/lol', name: 'lol', component: Lol},
		{path: '/createRoom', name: 'createRoom', component: CreateRoom},
		{path: '/joinRank', name: 'joinRank', component: JoinRank},
		{path: '/test', name: 'test', component: Test},
		{path: '/kalbaram', name: 'kalbaram', component: Kalbaram},
		{path: '/joinkal', name: 'joinkal', component: Joinkal},
	]
})