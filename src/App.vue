<template>
  <div id="app">
    <PicOfTheDay v-if="pic" v-bind:cat="cat" v-bind:pic="pic"/>
    <Loading v-if="!pic"/>
    <nav class="button-container">
      <button v-if="day < 30" v-on:click="backDay()">back one space cat</button>
      <button v-if="day >= 30" class="disabled-btn">back one space cat</button>
      <button v-if="day > 0" v-on:click="forwardDay()">forward one space cat</button>
      <button v-if="day === 0" class="disabled-btn">forward one space cat</button>
      <button v-if="day !== 0" v-on:click="currentDay()">today's space cat</button>
      <button v-if="day === 0" class="disabled-btn">today's space cat</button>
    </nav>
  </div>
</template>

<script>
import PicOfTheDay from "./components/PicOfTheDay.vue";
import Loading from "./components/Loading.vue";
import { fetchPicOfTheDay } from "./utils/fetchCalls";
import { catHelper } from "./utils/catHelper";

export default {
  name: "app",
  components: {
    PicOfTheDay,
    Loading
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
  background: #333;
  min-height: 100vh;
}
nav {
  width: 34 0px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
button {
  margin: 1rem auto;
  display: block;
  border: 2px solid #f2f2f2;
  background: #333;
  box-shadow: 1px 1px 1px #f2f2f2;
  transition: 0.2s;
  width: 150px;
  color: #f2f2f2;
  padding: 0.5rem 0;
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

.disabled-btn {
  opacity: 0.2;
}

.button-container {
  max-width: 600px;
}
</style>
