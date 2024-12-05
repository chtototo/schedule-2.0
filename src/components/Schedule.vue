<template>
    <div class="w-full flex flex-col">
      <!-- Schedule -->
      <div class="mx-10 my-6">
        <h2 class="text-xl font-semibold mb-4">Расписание</h2>
  
        <!-- Buttons to toggle between weeks (visible on small screens) -->
        <div class="lg:hidden mb-4 sticky top-2 bg-neutral-100 rounded-lg p-1">
          <a href="#week_1"
            @click="currentWeek = 0"
            :class="{'bg-[#5e5eed] text-white': currentWeek === 0, 'bg-gray-200': currentWeek !== 0}"
            class="px-4 py-2 rounded-md mr-2 inline-block"
          >
            Неделя 1
        </a>
          <a href="#week_2"
            @click="currentWeek = 1"
            :class="{'bg-[#5e5eed] text-white': currentWeek === 1, 'bg-gray-200': currentWeek !== 1}"
            class="px-4 py-2 rounded-md inline-block"
          >
            Неделя 2
          </a>
        </div>
  
        <!-- Week schedule in grid layout -->
        <div class="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <!-- Week 1 -->
          <div id="week_1">
          <h3 class="font-bold text-lg mb-4">Неделя 1</h3>
            <div
              v-for="(day, dayIndex) in schedule[0].days"
              :key="dayIndex"
              class="mb-8"
            >
              <h4 class="font-semibold text-md mb-2">{{ day.name }}</h4>
              <div
                v-for="(subject, index) in day.subjects"
                :key="index"
                class="mb-4"
              >
                <div
                  class="bg-white p-4 rounded-md shadow-md border-l-[7px] border-[#ddddee
                  ]"
                  :class="subject.name ? 'text-gray-500' : 'text-white'"
                >
                  <!-- Flex контейнер для названия, типа и подгруппы -->
                  <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-2">
                      <p class="font-medium text-lg text-black">
                        {{ index }}. {{ subject.name || "" }}
                      </p>
                      <p class="text-sm">
                        {{ subject.type || "" }}
                      </p>
                    </div>
                    <!-- Подгруппа в правом углу -->
                    <p
                      v-if="subject.subgroup"
                      class="bg-gray-200 text-sm text-black px-2 py-1 rounded-md"
                    >
                      {{ subject.subgroup }}
                    </p>
                  </div>
  
                  <p class="text-sm">
                    Аудитория: {{ subject.audience || "Не указано" }}
                  </p>
                  <p class="text-sm">
                    Преподаватель: {{ subject.teacher || "Не указано" }}
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Week 2 -->
          <div id="week_2">
            <h3 class="font-bold text-lg mb-4">Неделя 2</h3>
            <div
              v-for="(day, dayIndex) in schedule[1].days"
              :key="dayIndex"
              class="mb-8"
            >
              <h4 class="font-semibold text-md mb-2">{{ day.name }}</h4>
              <div
                v-for="(subject, index) in day.subjects"
                :key="index"
                class="mb-4"
              >
                <div
                  class="bg-white p-4 rounded-md shadow-md border-l-[7px] border-[#ddddee
                  ]"
                  :class="subject.name ? 'text-gray-500' : 'text-white'"
                >
                  <!-- Flex контейнер для названия, типа и подгруппы -->
                  <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-2">
                      <p class="font-medium text-lg text-black">
                        {{ index }}. {{ subject.name || "" }}
                      </p>
                      <p class="text-sm">
                        {{ subject.type || "" }}
                      </p>
                    </div>
                    <!-- Подгруппа в правом углу -->
                    <p
                      v-if="subject.subgroup"
                      class="bg-gray-200 text-sm text-black px-2 py-1 rounded-md"
                    >
                      {{ subject.subgroup }}
                    </p>
                  </div>
  
                  <p class="text-sm">
                    Аудитория: {{ subject.audience || "Не указано" }}
                  </p>
                  <p class="text-sm">
                    Преподаватель: {{ subject.teacher || "Не указано" }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from "./Button.vue";
import schedule from "../schedule.js";

let currentWeek = ref(0);
</script>
  