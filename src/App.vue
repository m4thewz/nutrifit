<template>
  <nav class="flex items-center justify-between py-3 px-5">
    <h1 class="text-4xl font-bold"><a href="/">NutriFit</a></h1>
    <ul class="flex gap-2">
      <li><a class="text-xl font-medium hover:text-green-500 transition-colors" href="/">Início</a></li>
      <li><a class="text-xl font-medium hover:text-green-500 transition-colors" href="/receitas">Receitas</a></li>
      <li><a class="text-xl font-medium hover:text-green-500 transition-colors" href="/sobre">Sobre</a></li>
      <li><a class="text-xl font-medium hover:text-green-500 transition-colors" href="https://github.com/m4thewz/nutrifit" target="_blank">Repositório</a></li>
    </ul>
  </nav>
  <router-view />
</template>
