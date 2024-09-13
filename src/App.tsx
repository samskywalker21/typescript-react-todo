import { useState } from "react";

import Wrapper from "./layout/Wrapper";
import TodoListForm from "./components/TodoListForm";
import TodoList from "./components/TodoList";

import { TodoListObj } from "./types";

function App() {
	const [todoList, setTodoList] = useState<TodoListObj[]>([]);

	const addTodo = ({ todo, active }: Omit<TodoListObj, "id">): void => {
		setTodoList((prevState) => {
			return [...prevState, { id: Date.now(), todo, active }];
		});
	};

	const removeTodo = (id: number) => {
		setTodoList((prevState) => {
			return prevState.filter((row) => {
				if (row.id !== id) {
					return row;
				}
			});
		});
	};

	return (
		<Wrapper>
			<div className="flex w-full flex-row flex-wrap gap-3 px-10 pt-4">
				<div className="flex-1">
					<TodoListForm addTodo={addTodo} />
				</div>
				<div className="flex-1">
					<TodoList todoList={todoList} removeTodo={removeTodo} />
				</div>
			</div>
		</Wrapper>
	);
}

export default App;
