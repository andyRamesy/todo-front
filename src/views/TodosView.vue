<template>
	<div>
		<h1>All todos</h1>
		<button @click="newTodo()">New</button>
		<br />
		<input type="text" placeholder="Author" v-model="state.newAuthor" />
		<span>Test: {{ state.newAuthor }}</span>
		<br />
		<input type="text" placeholder="todo" v-model="state.newTodoItem" />
		<span>Test: {{ state.newTodoItem }}</span>

		<div v-for="item in state.todos" :key="item.author">
			<router-link :to="`/todo/${item._id}`">
				<h4>
					{{ item.author }}
				</h4>
				<p>
					{{ item.todo }}
				</p>
				<button @click="editTodo(item._id)">Edit</button>
			</router-link>
			<button @click="deleteTodo(item._id)">Delete</button>
		</div>
	</div>
</template>

<script>
import { onMounted } from "vue";
import todocrud from "../modules/todocrud.js";

export default {
	setup() {
		const { state, GetAllTodos, newTodo, deleteTodo, editTodo } = todocrud();

		onMounted(() => {
			GetAllTodos();
		});
		return { state, GetAllTodos, newTodo, deleteTodo, editTodo };
	}
};
</script>

<style></style>
