<template>
	<div>
		<h1>Edit a todo</h1>
        <div v-for="item in todo" :key="item._id">
            <h4>{{item.author}}</h4>
            <h4>{{item.todo}}</h4>
        </div>
		<hr />
		<input type="text" placeholder="Author" v-model="state.newAuthor" />
		<span>Test: {{ state.newAuthor }}</span>
		<br />
		<input type="text" placeholder="todo" v-model="state.newTodoItem" />
		<span>Test: {{ state.newTodoItem }}</span>
		<button @click="editTodo()">update item</button>
		<hr />
	</div>
</template>

<script>
import todocrud from "../modules/todocrud.js";
export default {
	setup() {
		const { editTodo, state } = todocrud();
		return { editTodo, state };
	}
};
</script>

<style></style>
