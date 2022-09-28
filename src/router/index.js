import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TodosView from "../views/TodosView.vue";
import TodoDetail from "../views/TodoDetail.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView
	},
	{
		path: "/todos",
		name: "todos",
		component: TodosView
	},
	{
		path: "/todo/:id",
		name: "todo single",
		component: TodoDetail
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
