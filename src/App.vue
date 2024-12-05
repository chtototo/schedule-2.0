<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Home from "./components/Home.vue";
import Schedule from "./components/Schedule.vue";
</script>

<template>
 <Header />
 <div class="flex-grow h-full md:mx-[10%] py-8 flex flex-col items-center">
    <!-- <Home /> -->
     <Schedule />
 </div>
 <Footer />
</template>