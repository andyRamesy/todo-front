import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const getTodo = () => {
	const route = useRoute();
	// const router = useRouter()

	const todoId = computed(() => route.params.id);
	console.log("todoId:", todoId);

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
		fetch("http://localhost:3000/todos/new/", requestOptions).then(
			GetAllTodos()
		);
	};

	const deleteTodo = (_id) => {
		fetch("http://localhost:3000/todos/delete/" + _id, {
			method: "DELETE"
		});
	};
	const editTodo = (_id) => {
		const requestOptions = {
			method: "PUT"
		};
		fetch("http://localhost:3000/todos/update/" + _id, requestOptions)
			.then((res) => res.body)
			.then((res) => console.log(res));
	};

	return {
		state,
		GetAllTodos,
		newTodo,
		deleteTodo,
		editTodo
	};
};

export default getTodo;
