<template>
  <div class="home">
    <h2 class="text-2xl font-medium text-center py-2" id="receitas">Todas receitas</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 px-5">
      <div class="flex flex-col gap-5" v-for="(column, columnIndex) in recipeColumns" :key="columnIndex">
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
</template>

<style lang="scss">
.recipe {
  transition: transform ease .3s;

  img {
    width: 100%;
    border-radius: 5px 5px 0 0;
  }

  span {
    border-top: none;
    border-radius: 0 0 5px 5px;
  }

  &:hover {
    transform: scale(1.05);
  }
}
</style>
<script>
import recipes from '@/recipes.json';

export default {
  name: 'HomeView',
  data() {
    return {
      recipes,
    };
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
};
</script>
