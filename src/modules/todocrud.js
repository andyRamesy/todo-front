import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const getTodo = () => {
	const route = useRoute();
	const router = useRouter();

	const todoId = computed(() => route.params.id);
	console.log("todoId:", todoId.value);

	const state = ref({
		newAuthor: "",
		newTodoItem: "",
		todos: {}
	});

	const GetAllTodos = async () => {
		try {
			await fetch("http://localhost:3000/todos")
				.then((res) => res.json())
				.then((data) => {
					state.value.todos = data;
					// debugger
				});
		} catch (error) {
			console.log(error);
		}
	};

	const newTodo = () => {
		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"

				// "auth-token": state.token
			},
			body: JSON.stringify({
				author: state.value.newAuthor,
				todo: state.value.newTodoItem
			})
		};
		fetch("http://localhost:3000/todos/new/", requestOptions).then((data) => {
			data.status === 200 && GetAllTodos()
		});
	};

	const deleteTodo = (_id) => {
		fetch("http://localhost:3000/todos/delete/" + _id, {
			method: "DELETE"
		}).then(GetAllTodos());
	};
	const editTodo = () => {
		const requestOptions = {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
				// "auth-token": state.token
			},
			body: JSON.stringify({
				author: state.value.newAuthor,
				todo: state.value.newTodoItem
			})
		};
		fetch("http://localhost:3000/todos/update/" + todoId.value, requestOptions)
			.then((res) => res.body)
			.then((res) => console.log(res));
		router.push("/todos");
	};

	//get the clicked id
	const todo = ref({});
	const GetSpecificTodo = async () => {
		try {
			fetch("http://localhost:3000/todos")
				.then((res) => res.json())
				.then((data) => {
					todo.value = data.filter((todo) => todo._id === todoId.value);
				});
		} catch (error) {
			console.log(error);
		}
	};

	return {
		todoId,
		todo,
		GetSpecificTodo,
		state,
		GetAllTodos,
		newTodo,
		deleteTodo,
		editTodo
	};
};

export default getTodo;
