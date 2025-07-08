<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="projects">Projects</router-link>
        <router-link to="resume">Resume</router-link>
        <router-link to="contact">Contact</router-link>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    gap: 1rem;
    background-color: #2c3e50;
    padding: 1rem;
}
a {
    color: white;
    text-decoration: none;
}
</style>