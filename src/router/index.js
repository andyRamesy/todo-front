import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TodosView from "../views/TodosView.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView
	},
	{
		path: "/todos",
		name: "todos",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		// component: () =>
		// 	import(/* webpackChunkName: "about" */ "../views/TodosView.vue")
		component: TodosView
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
