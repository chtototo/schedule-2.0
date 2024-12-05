<template>
    <div class="w-full flex flex-row justify-between rounded-t-3xl items-center px-8 py-3">
        <!-- logo -->
        <div class="flex items-center space-x-4">
            <img
                src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png"
                alt="ChillGuys"
                class="h-10 w-auto"
            />
            <h1 class="font-bold">ChillGuys</h1>
        </div>
        <!-- right -->
        <div class="flex flex-row gap-6 items-center">
            <!-- nav -->
            <nav class="md:flex flex-row gap-6 font-semibold hidden">
                <router-link to="/">Home</router-link>
                <router-link to="/">Schedule</router-link>
            </nav>
            <!-- sign up / log in -->
            <div class="flex flex-row gap-2">
                <Button text="Sign up" />
                <Button text="Log in" class="bg-[#e7e8f3] text-zinc-700" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from './Button.vue';
</script>