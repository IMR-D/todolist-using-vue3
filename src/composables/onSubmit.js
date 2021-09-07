import { reactive } from "vue";
export function onSubmit() {
	//create todo start
	const todoList = reactive([])
	function addingTodo(title,description){
		return todoList.push({
			title: title.value,
			done: false,
			content: description.value
		})
	}
	//create todo end

	return {
		addingTodo,
		todoList
	};
}