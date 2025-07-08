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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  text-align: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem;
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
