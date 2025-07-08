<template>
    <section class="about">
        <h2>About Me</h2>
        <p>I'm Rich Rios, an aspiring developer passionate about building web apps using Vue, Java, and Python.</p>
        <p>I enjoy crafting clean, maintainable code and learning new technologies.</p>
    </section>
</template>

<script>
export default {
    name: "AboutView",
};
</script>

<style scoped>
.about {
    max-width: 800px;
    margin: 2rem auto;
    padding: 1rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
}

.about h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #764ba2;
}

.about p {
    font-size: 1.1rem;
    line-height: 1.6;
}
</style>