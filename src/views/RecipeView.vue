<template>
  <div class="flex justify-center">
    <div v-if="recipe" class="w-[80%] pb-5">
      <h1 class="text-5xl font-medium text-center">{{ recipe.name }}</h1>
      <img class="max-w-[40vw] rounded-xl my-5 mx-auto" :src="require(`@/assets/recipes_images/${recipe.image}`)"
        :alt="recipe.name" />
      <p class="text-center">{{ recipe.description }}</p>
      <h2 class="bg-zinc-200 py-3 my-5 text-2xl text-center font-medium rounded-md">Ingredientes:</h2>
      <ul class="list-disc ml-6">
        <li v-for="(item, index) in recipe.ingredients" :key="index">{{ item }}</li>
      </ul>
      <h2 class="bg-zinc-200 py-3 my-5 text-2xl text-center font-medium rounded-md">Modo de preparo:</h2>
      <ul>
        <li class="py-5 border-b border-gray-300 last:border-0" v-for="(item, index) in recipe.preparation"
          :key="index">
          <span
            class="inline-block list-index bg-white font-bold text-green-500 w-8 leading-8 text-center rounded-full mr-2">{{
      index + 1 }}</span>
          <span>{{ item }}</span>
        </li>
      </ul>

      <h3 class="text-2xl font-medium">Confira outras receitas:</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2.5">
        <div class="flex flex-col gap-2.5" v-for="(column, columnIndex) in recipeColumns" :key="columnIndex">
          <div v-for="(recipe, recipeIndex) in column" :key="recipeIndex">
            <a :href="`/receitas/${recipe.route}`" class="recipe-link">
              <div class="recipe border border-black rounded-md">
                <img :src="require(`@/assets/recipes_images/${recipe.image}`)" :alt="recipe.name" class="rounded-md" />
                <span class="block p-2.5 bg-white w-full  text-lg rounded-md font-medium text-center">{{ recipe.name
                  }}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <span>Receita não encontrada, tente retornar a página inicial e procurar por outras receitas</span>
    </div>
  </div>
</template>
<style lang="scss">
.list-index {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .3);
}
</style>
<script>
import recipes from '@/recipes.json';

export default {
  name: 'RecipeView',
  data() {
    return {
      recipes: recipes.filter((recipe) => recipe.route != this.$route.params.recipe).reverse(),
      recipe: recipes.find((recipe) => recipe.route === this.$route.params.recipe)
    }
  },
  computed: {
    recipeColumns() {
      const numColumns = 4;
      const columns = Array.from({ length: numColumns }, () => []);

      this.recipes.forEach((recipe, index) => {
        const columnIndex = index % numColumns;
        columns[columnIndex].push(recipe);
      });

      return columns;
    },
  },
}
</script>