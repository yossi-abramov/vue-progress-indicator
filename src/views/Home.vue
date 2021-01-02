<template>
  <div class="home">
    <h1>Posts</h1>
    <div class="post" v-for="n in 100" :key="n">
      <h2>#{{ n }} Post</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi distinctio
        eveniet neque, nostrum alias nisi, nobis incidunt aspernatur vitae
        perferendis, voluptatem porro natus libero eius?
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.post {
  h2 {
    text-align: left;
  }
  p {
    text-align: left;
  }
}
</style>
