<template>
    <div class="bg-[#d0d0e7] w-full flex flex-col">
        <div class="flex flex-row justify-between items-center mt-8 mx-10">
            <!-- logo -->
            <div class="flex items-center space-x-4">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png"
                    alt="ChillGuys"
                    class="h-10 w-auto"
                />
                <h1 class="font-bold">ChillGuys</h1>
            </div>
            <!-- nav -->
            <nav class="flex flex-row gap-6 font-semibold">
                <router-link to="/">Home</router-link>
                <router-link to="/">Search</router-link>
            </nav>
        </div>
        <hr class="h-[2px] w-full my-6 bg-[#c3c3e1]">
        <!-- Копирайт -->
        <div class="text-zinc-500 font-medium mx-10 mb-2">
            <p class="text-sm">&copy; 2024 ChillGuys. Все права защищены.</p>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>