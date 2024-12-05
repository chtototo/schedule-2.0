<template>
    <div class="flex flex-col w-full items-center gap-8">
        <div
          class="w-full h-[30vw] bg-zinc-300 rounded-xl flex justify-center items-center relative"
        >
          <div class="uppercase font-extrabold text-zinc-500">poster</div>
          <div
            class="bg-white w-[55%] h-0 absolute bottom-12 left-8 rounded-xl flex flex-row items-center justify-between box-border px-4 py-7 gap-2"
          >
            <span>
              <svg
                fill="#27272a"
                height="15px"
                width="15px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 488.4 488.4"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6
                              s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2
                              S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7
                              S381.9,104.65,381.9,203.25z"
                    />
                  </g>
                </g>
              </svg>
            </span>
            <input class="text-zinc-800 outline-none flex-grow" placeholder="Search" />
            <Button text="Search" />
          </div>
      </div>

      <div class="flex flex-col gap-4 w-full">
          <h3 class="self-start font-bold">Popular products</h3>
          <div class="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-2">
            <div v-for="product of 7" :key="product" class="flex flex-col gap-2">
                <div class="bg-zinc-300 w-full aspect-square flex justify-center items-center uppercase rounded-xl text-zinc-500 font-extrabold text-sm">product</div>
                <p class="text-sm">Product title</p>
            </div>
          </div>
      </div>
      
      <div class="flex flex-col gap-4 w-full">
          <h3 class="self-start font-bold">Popular suppliers</h3>
          <div class="grid grid-cols-5 gap-2">
            <div v-for="supplier of 7" :key="supplier" class="flex flex-col gap-2">
                <div class="bg-zinc-300 w-full aspect-square flex justify-center items-center uppercase rounded-xl text-zinc-500 font-extrabold text-sm">supplier</div>
                <p class="text-sm">Firstname Lastname</p>
            </div>
          </div>
      </div>
    </div>
</template>

<script setup>
import Button from "./Button.vue";
</script>