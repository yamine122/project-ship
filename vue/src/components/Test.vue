/* 최초 롤 게시판 */

<template>
<div id="app">
  <v-app id="inspire">
  
    <v-data-table dark class=""
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
    >

    </v-data-table>
     <div>
        <v-btn class="float-right" @click="createroom()">방만들기</v-btn>
        <v-btn class="float-right" @click="joinroom()">참여하기</v-btn>
        <v-btn class="float-right" @click="test()">ddd</v-btn>
      </div>
   
  </v-app>
   
</div>
</template>
<script>
export default {
  data () {
    return {
      pagination: {
        sortBy: 'name'
      },
      headers: [
        {
          text: 'no',
          align: 'left',
          value: 'name',
        },
        { text: '내용', value: 'room' },
        { text: '상세보기', value: 'look' },
        { text: '', value: 'join' },
      ],
      desserts: [
        {
          name: 1,
          room: '실버구함',
          look: '상세보기',
        },
        {
          name: 2,
          room: '실버구함',
          look: '상세보기',
        },
        {
          name: 3,
          room: '실버구함',
          look: '상세보기',
        },
        {
          name: 4,
          room: '실버구함',
          look: '상세보기',
        },
        {
          name: 5,
          room: '실버구함',
          look: '상세보기',
        },
        {
          name: 6,
          room: '실버구함',
          look: '상세보기',
        },
        {
          name: 7,
          room: '실버구함',
          look: '상세보기',
        },
        {
          name: 8,
          room: '실버구함',
          look: '상세보기',
          },
        {
          name: 9,
          room: '실버구함',
          look: '상세보기',
        },
        {
          name: 10,
          room: '실버구함',
          look: '상세보기',
        },
      ]
    }
  },
    methods :{
      createroom(){
       this.$router.push({path:'/createRoom'})
      },
      joinroom(){
        this.$router.push({path:'/joinRoom'})
      },
      test(){
        this.$router.push({path:'/test'})
      }
    }
  
}
</script>
<style scoped>
#app{
  height:100%;
  width:100%;
  position: absolute;
}
</style>