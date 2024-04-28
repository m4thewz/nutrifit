import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipeView from '../views/RecipeView.vue'
import RecipesView from '../views/RecipesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/receitas/:recipe',
    name: 'recipe',
    component: RecipeView
  },
  {
    path: '/receitas',
    name: 'recipes',
    component: RecipesView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
