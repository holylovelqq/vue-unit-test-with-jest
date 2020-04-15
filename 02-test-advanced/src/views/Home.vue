<template>
  <div class="home">
    <v-row align="center">
      <v-col class="text-center">
        <div class="my-2 ">
          <v-btn to="test" large depressed  color="error">点我跳转</v-btn>
        </div>
      </v-col>
    </v-row>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
