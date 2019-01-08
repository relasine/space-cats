<template>
  <div id="app">
    <PicOfTheDay v-if="pic" v-bind:cat="cat" v-bind:pic="pic"/>
    <nav class="button-container">
      <button v-if="day < 30" v-on:click="backDay()">back one space cat</button>
      <button v-if="day > 0" v-on:click="forwardDay()">forward one space cat</button>
      <button v-if="day !== 0" v-on:click="currentDay()">current space cat</button>
    </nav>
  </div>
</template>

<script>
import PicOfTheDay from "./components/PicOfTheDay.vue";
import { fetchPicOfTheDay } from "./utils/fetchCalls";
import { catHelper } from "./utils/catHelper";

export default {
  name: "app",
  components: {
    PicOfTheDay
  },
  data() {
    return {
      day: 0,
      error: null,
      pic: undefined,
      cat: catHelper[Math.floor(Math.random() * 14)]
    };
  },
  mounted() {
    this.fetchPic();
  },
  methods: {
    backDay: function() {
      this.day++;
      this.fetchPic();
      this.cat = catHelper[Math.floor(Math.random() * 14)];
    },
    forwardDay: function() {
      this.day--;
      this.fetchPic();
      this.cat = catHelper[Math.floor(Math.random() * 14)];
    },
    currentDay: function() {
      this.day = 0;
      this.fetchPic();
      this.cat = catHelper[Math.floor(Math.random() * 14)];
    },
    fetchPic: async function() {
      try {
        const pic = await fetchPicOfTheDay(this.day);
        this.pic = pic;
      } catch (error) {
        console.log(error);
        this.error = true;
      }
    }
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  background: #f2f2f2;
  height: 100vh;
}
nav {
  width: 340px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
button {
  margin: 1rem auto;
  display: block;
  border: 2px solid #333;
  background: #f2f2f2;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  transition: 0.2s;
  width: 150px;
}

button:focus,
button:active {
  outline: none;
}

button:active {
  box-shadow: none;
}

button:hover {
  cursor: pointer;
}
</style>
