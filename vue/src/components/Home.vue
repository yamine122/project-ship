<template>
<div id="app" >
<layout>
   <template #header="h" >
    <v-app id="inspire">
  <!-- --------------------------------------- 네비 ------------------------------------------ -->
      <div>
        <v-toolbar color="#3F51B5" :src="'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'">
          <v-toolbar-title class="white--text" style="margin-left:230px;" @click="home()" > 
            <v-icon large color="white">mdi-vuetify</v-icon>
              SHIP 
          </v-toolbar-title>

        <v-spacer></v-spacer>
          <v-toolbar-items  style="margin-right:325px;" >
            <v-btn text style="font-size:15px" class="white--text" @click="test()"   >TEST</v-btn>
            <v-btn hover text style="font-size:15px" class="white--text" @click="mypage()"   >MY PAGE</v-btn>
            <v-btn text style="font-size:15px" class="white--text" @click="logout()">LOGOUT</v-btn>

            <!-- <v-overflow-btn :items="contents" label="CONTENTS" class="white--text"></v-overflow-btn> -->

            <v-btn text style="font-size:15px" class="white--text" @click="lol()">LOL</v-btn>
            <v-badge :value="hover" color="deep-purple accent-4" left offset-x="100" offset-y="20"
                      content="9999+" transition="slide-x-transition">
              <v-hover v-model="hover">
                  <v-btn text style="font-size:15px;margin-top:13px" class="white--text" @click="futsal()">FUTSAL</v-btn>
              </v-hover>
            </v-badge>

            <!-- <v-col class="d-flex" cols="6" sm="4">
              <v-select :items="items" label="CONTENTS" class="white--text"></v-select>
            </v-col> -->
            <v-row style="margin-left:5px; margin-top:12px">
            <join></join>
            </v-row>
            <v-row style="margin-left:100px ; margin-top:12px">
            <login></login>
            </v-row>
          </v-toolbar-items>
        <!-- <template v-if="$vuetify.breakpoint.smAndUp" >
          <v-btn icon>
            <v-icon >mdi-export-variant</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-delete-circle</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon >mdi-plus-circle</v-icon>
          </v-btn>
        </template> -->
        </v-toolbar>
      </div>
    </v-app>
  </template>
   <!-- --------------------- 사이드 바  ------------------------- -->
<template #content ="c">
  <div id="app" style="width:1400px;height:700px" >
    <v-app id="inspire">
        <v-card height="700px"  >
          <v-navigation-drawer absolute temperate left width="20%" >
      <template v-slot:prepend>
              <v-list-item two-line>
              <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/women/81.jpg">
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{state.person.name}}님 환영합니다.</v-list-item-title>
              <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
      </template>
        <v-divider></v-divider>
          <v-list dense>
            <v-list-item v-for="side of sides" :key="side.title" @click="sidego(side.link)">
                <v-list-item-icon>
                  <v-icon>{{ side.icon }}</v-icon>
                </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ side.title }}</v-list-item-title>
                <router-link :to="side.link"></router-link>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      <!-- ----------------------------------------컨텐츠------------------------------------------ -->
        <v-navigation-drawer absolute right width="80%" height="auto" >
          <template>
            <router-view></router-view>
          </template>
        </v-navigation-drawer>
      </v-card>
    </v-app>
  </div>
</template>
<template #footer ="f">
</template>
  </layout>
</div>
</template>

<script>
// import mdiAccount from '@mdi/js'
import Login  from '@/components/auth/Login.vue'
import Join  from '@/components/auth/Join.vue'
import Layout from '@/components/cmm/Layout.vue'
import {store} from '@/store'
export default {
  components:{
    Layout, Login, Join
  },
  data(){
   return{
     contents: [
        { text: 'LOL' },
        { text: 'FUTSAL' },
      ],
      sides: [
          { title: 'Home', icon: 'mdi-home', link:'/'},
          { title: '구장 등록', icon: 'mdi-account-group-outline', link:'/register' },
          { title: '회원 관리', icon: 'mdi-account-group-outline', link:'/membermanage' },
        ],
      state:store.state,
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      hover: false,
      }
  },
  methods:{
    home(){
      this.$router.push({path:'/'})
    },
    logout(){
      this.state.person={}
      this.$router.push({path:'/'})
    },
    mypage(){
      this.$router.push({path:'/mypage'})
    },
    test(){
      this.$router.push({path:'/test'})
    },
    admin(){
      this.$router.push({path:'/admin'})
    },
    lol(){
      this.$router.push({path:'/lol'})
    },
    futsal(){
      this.$router.push({path:'/futsal'})
    },
    sidego(x){
      this.$router.push({path:`${x}`})
    }
  }
}
</script>
<style scoped>
.v-application--wrap{
}
</style>