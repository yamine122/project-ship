<template>
<div>
<form>
<input type="text" value="" />
<button @click.prevent="api()">.gg</button>
</form>

<div>
<h1>test</h1>
</div>
</div>
</template>
<script>
import axios from "axios"
export default{
	data(){
					
		return{
			a: [],
			b: ''
			
		}
	},
	methods:{
		api(){
			let url = `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/yamine?api_key=RGAPI-2170e2ea-0654-407a-9a58-014c2feb2ac2/`
		axios
		.get(url)
		.then(res=>{
			
			this.a = res.data.lol
			
			alert(this.a)
			
		})
		.catch(()=>{
			alert(`실패`)
		})
		}
		
	}
	
}
</script>