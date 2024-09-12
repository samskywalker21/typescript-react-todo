import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

type TodoListObj = {
	id: number;
	todo: string;
	active: boolean;
};

interface TodoListProps {
	todoList: TodoListObj[];
	removeTodo: (id: number) => void;
}

const TodoList = ({ todoList, removeTodo }: TodoListProps) => {
	console.log(todoList);

	return (
		<div>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Todo</TableHead>
						<TableHead>Action</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{todoList.length <= 0 ? (
						<TableRow>
							<TableCell>No data available.</TableCell>
						</TableRow>
					) : (
						todoList.map((row) => {
							return (
								<TableRow id="row.id">
									<TableCell>{row.todo}</TableCell>
									<TableCell>
										<Button>
											<Trash2
												onClick={() => {
													removeTodo(row.id);
												}}
											/>
										</Button>
									</TableCell>
								</TableRow>
							);
						})
					)}
				</TableBody>
			</Table>
		</div>
	);
};

export default TodoList;
