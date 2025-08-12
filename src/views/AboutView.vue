<template>
    <section class="about">
        <h2>About Me</h2>
        <img :src="IMG_4124" alt="Ricardo Rios" class="profile-pic" />
        <div class="about-card">
           <p>I'm Rich Rios, an aspiring developer passionate about building web apps using Vue, Java, and Python.
            I enjoy crafting clean, maintainable code and learning new technologies.</p>
            <p>I graduated June 2025 with a degree in Computer Science from WGU,
                and I am eaglerly looking for work opportunities. Thank you for visiting this page!
            </p>
            <p>In addition to my computer science degree I have degrees in philosophy (BA) and theology (MA).
                I am recently married and live in the greater Seattle area of Washington state--go Mariners!
            </p>
            <p>I'm interested in game development, full-stack development, and web development.
                I want to use my CS degree to exercise my creative side and I love it when a project comes together. Check out my <router-link to="/projects">Projects</router-link> page
                to see the kinds of things I've worked on.
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: "AboutView",
    data() {
        return {
            IMG_4124
        };
    }
};
</script>

<style scoped>
.about {
    max-width: 800px;
    margin: 4rem auto;
    padding: 2rem 3rem;
    /* background: #a88080; */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #1a1919;
}

.about h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #764ba2;
}
.about-card {
    background-color: #4688a7;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.about p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1rem;
    font-weight: bold;
}

.profil-pic {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid #4ba261;
    margin-bottom: 1rem;
}
</style>