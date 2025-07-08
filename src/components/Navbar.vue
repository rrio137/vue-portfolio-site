<template>
    <nav class="navbar">
        <div class="nav-container">
            <router-link to="/" class="logo">Ricardo Rios</router-link>
            <div class="nav-links">
                <router-link to="/" exact-active-class="active">Home</router-link>
                <router-link to="/about" exact-active-class="active">About</router-link>
                <router-link to="/projects" exact-active-class="active">Projects</router-link>
                <router-link to="/resume" exact-active-class="active">Resume</router-link>
                <router-link to="/contact" exact-active-class="active">Contact</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavbarComponent",
};
</script>

<style scoped>
.navbar {
    background-color: #2c3e50;
    padding: 1rem;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
}

.logo {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-links {
    display: flex;
    gap: 1.5rem;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
}

.nav-links .active {
    border-bottom: 2px solid #42b983;
}

</style>