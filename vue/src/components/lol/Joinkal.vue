<template>
<div>
    <v-row>
      <v-card>
        
          <v-row style="margin:5px;">
         
              <v-card style="width:120px; height:300px; margin:10px;" >
                <v-img src="https://kr-publish.s3.amazonaws.com/notice/3fbb6a84d42dd93cb41e7580777a6ee7510db2cd.png"></v-img>
                <v-icon style="margin:20px;">mdi-crown</v-icon>
                <v-icon v-bind:title="msg1">mdi-key</v-icon>
                <v-card-text dark> 소환사명 : </v-card-text>
                <v-card-text>칼바람 전적 : </v-card-text>
                <v-card-text>최근 10경기 승률: </v-card-text>
              </v-card>
     
              <v-card style="width:120px; height:300px; margin:10px;" >
                <v-img src="https://kr-publish.s3.amazonaws.com/notice/3fbb6a84d42dd93cb41e7580777a6ee7510db2cd.png"></v-img>
                <v-icon style="margin:20px;">참가자</v-icon>
                <v-card-text dark> 소환사명 : </v-card-text>
                <v-card-text>칼바람 전적 : </v-card-text>
                <v-card-text>최근 10경기 승률: </v-card-text>
              </v-card>
              
              
             
              <v-card style="width:120px; height:300px; margin:10px;" >
                <v-img src="https://kr-publish.s3.amazonaws.com/notice/3fbb6a84d42dd93cb41e7580777a6ee7510db2cd.png"></v-img>
                <v-icon style="margin:20px;">참가자</v-icon>
                <v-card-text dark> 소환사명 : </v-card-text>
                <v-card-text>칼바람 전적 : </v-card-text>
                <v-card-text>최근 10경기 승률: </v-card-text>
              </v-card>
           
              
              
              <v-card style="width:120px; height:300px; margin:10px;" >
                <v-img src="https://kr-publish.s3.amazonaws.com/notice/3fbb6a84d42dd93cb41e7580777a6ee7510db2cd.png"></v-img>
                <v-icon style="margin:20px;">참가자</v-icon>
                <v-card-text dark> 소환사명 : </v-card-text>
                <v-card-text>칼바람 전적 : </v-card-text>
                <v-card-text>최근 10경기 승률: </v-card-text>
              </v-card>
              
              <v-card style="width:120px; height:300px; margin:10px;" >
                <v-img src="https://kr-publish.s3.amazonaws.com/notice/3fbb6a84d42dd93cb41e7580777a6ee7510db2cd.png"></v-img>
                <v-icon style="margin:20px;">참가자</v-icon>
                <v-card-text dark> 소환사명 : </v-card-text>
                <v-card-text>칼바람 전적 : </v-card-text>
                <v-card-text>최근 10경기 승률: </v-card-text>
              </v-card>
              
              
              <v-content >
        <v-flex style="margin-right:5px; margin-top:5px">
          <v-card color="primary lighten-4">
            <v-toolbar dark color="primary darken-1">
              <v-toolbar-title>채팅</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
        <v-list ref="chat" id="logs">
          <template v-for="(item, index) of logs">
            <v-subheader v-if="item" :key="index">{{ item }}</v-subheader>
          </template>
        </v-list>
            </v-card-text>
            <v-card-actions>
              <v-form @submit.prevent="submit">
              <v-text-field style="width:400px; height:200px; margin-top:40px;" v-model="msg" label="메세지입력" single-line solo-inverted class="d-flex"></v-text-field>
              <v-btn x-large class="float-right" fab dark small color="primary" type="submit">
                <v-icon small dark>send</v-icon>
              </v-btn>
                </v-form>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-icon @click="lol()">mdi-reply</v-icon><h4 @click="lol()">뒤로가기</h4>

        </v-content>
              
          </v-row>
          
       
      </v-card>
    </v-row>
</div>
</template>
<script>
export default{
  data(){
    return {
      logs: [],
      msg: null,
      msg1: '방장위임'
    }
  },
  methods: {
    submit() {
      this.logs.push(this.msg);
      this.msg = "";
    },
    kalbaram(){
      this.$router.push({path:'/kalbaram'})
    }
  },
  watch: {
    logs() {
      setTimeout(() => {
        this.$refs.chat.$el.scrollTop = this.$refs.chat.$el.scrollHeight;
      }, 0);
    }
  }
}
</script>
<style scoped>
#logs{
  width:220px;
  height: 50px;
  overflow: auto;
}
</style>