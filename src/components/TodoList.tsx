import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	TableCaption,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { motion } from "framer-motion";

type TodoListObj = {
	id: number;
	todo: string;
	active: boolean;
};

interface TodoListProps {
	todoList: TodoListObj[];
	removeTodo: (id: number) => void;
}

const rowVariants = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: { opacity: 1, scale: 1 },
};

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
						<></>
					) : (
						todoList.map((row) => {
							return (
								<motion.span
									variants={rowVariants}
									initial="hidden"
									animate="visible"
									transition={{
										duration: 0.5,
										ease: "easeInOut",
									}}
								>
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
								</motion.span>
							);
						})
					)}
				</TableBody>
				{todoList.length <= 0 ? (
					<TableCaption>No Data Available</TableCaption>
				) : (
					<></>
				)}
			</Table>
		</div>
	);
};

export default TodoList;
