<script setup lang="ts">
import { ref } from 'vue';
import { twMerge } from 'tailwind-merge';

export interface Tab {
  label: string;
  content: string;
  comments?: string[];
}

const props = defineProps<{
  tabs: Tab[];
  customClass?: string;
}>();

const activeIndex = ref(0);

const selectTab = (index: number) => {
  activeIndex.value = index;
};


const buttonBaseClasses =
  "w-full py-2 text-sm leading-5 font-medium rounded-md transition-colors duration-100 cursor-pointer";
const selectedClasses = "bg-primary-500 text-white dark:bg-primary-600";
const notSelectedClasses = "text-secondary-700 dark:text-secondary-300";
</script>

<template>
  <div :class="twMerge('space-y-4', customClass || '')">
    <!-- Lista de pestañas -->
    <div class="flex p-1.5 rounded-md bg-secondary-100 dark:bg-secondary-950">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        type="button"
        @click="selectTab(index)"
        :class="twMerge(buttonBaseClasses, activeIndex === index ? selectedClasses : notSelectedClasses, 'flex-1')"
      >
        {{ tab.label }}
      </button>
    </div>
    <!-- Contenido de la pestaña activa -->
    <div class="p-4 border rounded-md">
      <!-- Mostrar el contenido de la pestaña activa -->
      <div v-html="tabs[activeIndex].content" />
      <!-- Mostrar comentarios si existen -->
      <div
      v-if="tabs[activeIndex]?.comments?.length"
      class="mt-4 border-t pt-4"
      >
        <h4 class="text-lg font-bold mb-2">Comments</h4>
        <ul class="list-disc pl-5 space-y-1">
          <li v-for="(comment, idx) in tabs[activeIndex].comments" :key="idx">
            {{ comment }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
