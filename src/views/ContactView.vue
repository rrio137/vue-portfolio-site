<template>
    <section class="contact">
        <h2>Contact</h2>
        <p>Ricardo Rios</p>
        <!-- <p>Phone: +1 (425) 238-8463</p> -->
        <p>Email: rich.rios1990@gmail.com</p>
        <p><a href="https://www.linkedin.com/in/ricardo-rios-a8568626/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        <p><a href="https://github.com/rrio137" target="_blank" rel="noopener noreferrer">GitHub</a></p>
    </section>
</template>

<script>
export default {
    name: "ContactView",
};
</script>

<style scoped>
.contact {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #0c0b0b;
}

.contact h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #764ba2;
}

.contact p {
  font-size: 1.1rem;
  line-height: 1.6;
}
</style>