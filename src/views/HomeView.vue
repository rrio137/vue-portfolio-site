<template>
  <section class="home">
    <div class="intro">
      <h1>Hi, I'm Ricardo Rios</h1>
      <p>Aspiring Front-End Developer passionate about Vue, Java, and Python.</p>
      <router-link to="/about" class="btn">Learn more about me</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeView"
};
</script>

<style scoped>
.home {
  height: 100vh;
  background-image: url('@/assets/Rainier20200906.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 8rem;
  color: #2c3e50;
}

.intro h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.intro p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.btn {
  background-color: #fff;
  color: #764ba2;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3 ease;
}

.btn:hover {
  background-color: #e2e2e2;
}
</style>
