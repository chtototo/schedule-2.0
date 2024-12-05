<template>
    <button class="border-none rounded-xl bg-[#5e5eed] text-white px-3 py-2 text-sm font-semibold">{{ text }}</button>
</template>

<script setup>
defineProps({
  text: String,
});
</script>