import Vue from 'vue'
import Router from 'vue-router'
import Lol from '@/components/Lol.vue'
import CreateRoom from '@/components/CreateRoom.vue'
import JoinRoom from '@/components/JoinRoom.vue'
import Test from '@/components/Test.vue'


Vue.use(Router)

export default new Router({
	mode: 'history',
	routes : [
		{path: '/lol', name: 'lol', component: Lol},
		{path: '/createRoom', name: 'createRoom', component: CreateRoom},
		{path: '/joinRoom', name: 'joinRoom', component: JoinRoom},
		{path: '/test', name: 'test', component: Test},
	]
})