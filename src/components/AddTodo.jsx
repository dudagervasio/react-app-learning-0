import { useRef } from "react";

export const AddTodo = ({ todos, setTodos }) => {

	const addTodoInput = useRef(null);

	const handleKeyPress = ({ key }) => {

		if(key === 'Enter'){

			doAdition();
		}

	};

	const doAdition = () => {

		const {value: text }  = addTodoInput.current;

		if(!text){
			
			alert('Digite o todo...');

		}else{

			addTodoInput.current.value = '';
			setTodos([...todos, { text }]);

		}

	}

	return (
		<div className="add-todo-wrapper">
			<input ref={addTodoInput} onKeyPress={handleKeyPress} id="add-todo-input" type="text" className="add-todo-input" />
			<button onClick={doAdition} className="add-todo-button">ADD</button>
		</div>
	);
}