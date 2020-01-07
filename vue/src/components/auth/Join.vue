<template>
<div id="app">
  <v-btn color="blue" dark fixed center @click="dialog = !dialog"> join </v-btn>
    <v-dialog v-model="dialog" width="400px">
      <v-card>
        <v-card-title class="blue darken-2" font-color="white"> CREATE ACCOUNT </v-card-title>
        
        <v-container fluid >
          <v-layout wrap >
            <v-flex xs12  >
                <v-text-field v-validate="'required|max:10'" :counter="10" required
                center prepend-icon="people" v-model="userid" placeholder="ID"></v-text-field>
                <v-text-field prepend-icon="lock" placeholder="PASSWORD" v-model="passwd"></v-text-field>
                <v-text-field prepend-icon="" placeholder="Name"></v-text-field>
            </v-flex>
            <v-flex xs12>
                <v-text-field prepend-icon="business" placeholder="Job"></v-text-field>
            </v-flex>
            <v-flex xs12>
                <v-text-field prepend-icon="email" placeholder="Email"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field type="date" prepend-icon="settings" placeholder="birthday"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field prepend-icon="notes" placeholder="Notes"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="dialog = false">Submit</v-btn>
          <v-btn text color="red" @click="dialog = false">Cancel</v-btn>
        </v-card-actions>
    </v-card>
  </v-dialog>
</div>
</template>
<script>
export default {
    name: 'join',
    data () {
		return {
    dialog:false,
    name: '',
    email: '',
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: null,
    dictionary: {
      attributes: {
        email: 'E-mail Address',
        // custom attributes
      },
      custom: {
        name: {
          required: () => '이름을 입력해야 합니다',
          max: '이름을 10자를 초과할 수 없습니다',
          // custom messages
        },
        select: {
          required: 'Select field is required',
        },
      },
    },
    }
  }
}
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css?family=Montserrat|Open+Sans';
</style>