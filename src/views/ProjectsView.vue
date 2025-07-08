<template>
    <section class="projects">
        <h2>Projects</h2>
        <p>Here are some projects I have worked on...</p>
    </section>
</template>

<script>
export default {
    name: 'ProjectsView',
};
</script>

<style scoped>
.projects {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

.projects h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #764ba2;
}

.projects p {
  font-size: 1.1rem;
  line-height: 1.6;
}
</style>