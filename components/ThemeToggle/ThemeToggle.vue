<template>
  <button class="theme-toggle" @click="toggleDarkMode">
    <icon-sun v-if="isDark" class="theme-toggle__icon" />
    <icon-moon v-if="!isDark" class="theme-toggle__icon" />
  </button>
</template>

<script src="./ThemeToggle.js" />
<style src="./ThemeToggle.css" />
