
<template>
  <div class="pic-of-the-day">
    <h1 class="header-text">space cat of the day</h1>
    <div class="potd-image" v-bind:style="{backgroundImage: 'url(' + pic.url + ')'}">
      <img class="cat-pic" v-bind:src="cat" alt="space cat">
    </div>
    <h3 class="pic-title">{{pic.title}}</h3>
    <p class="pic-date">{{pic.date}}</p>
  </div>
</template>

<script>
export default {
  name: "PicOfTheDay",
  props: ["pic", "cat"],
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pic-of-the-day {
  background: #f2f2f2;
  padding-top: 2rem;
}
.header-text,
.pic-title,
.pic-date {
  color: #333;
  text-align: center;
  font-family: "Verdana";
}
.potd-image {
  height: 400px;
  width: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  margin: auto;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
}
.cat-pic {
  max-width: 170px;
  max-height: 170px;
}
</style>
