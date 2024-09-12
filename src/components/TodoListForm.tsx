import { useEffect, useRef } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface Inputs {
	todoDesc: string;
}

interface TodoListObj {
	todo: string;
	active: boolean;
}

type TodoListProps = {
	addTodo: ({ todo, active }: TodoListObj) => void;
};

const TodoListForm = ({ addTodo }: TodoListProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		addTodo({ todo: data.todoDesc, active: true });
		reset();
	};

	return (
		<div className="flex flex-col gap-4">
			<h3 className="text-left text-lg font-semibold">Add To Do</h3>
			<form
				className="flex flex-col gap-4"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="flex flex-col gap-3 pr-40">
					<Label htmlFor="todoDesc">To Do Description</Label>
					<Input
						defaultValue={""}
						type="text"
						id="todoDesc"
						{...register("todoDesc", { required: true })}
					></Input>
					{errors.todoDesc && (
						<span className="font-light italic text-red-400">
							Required
						</span>
					)}
				</div>
				<div className="flex flex-row gap-3">
					<Button type="submit" variant={"default"}>
						Add
					</Button>
					<Button type="reset" variant={"destructive"}>
						Reset
					</Button>
				</div>
			</form>
		</div>
	);
};

export default TodoListForm;
