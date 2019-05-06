import React from 'react';
//Данный компонент рендерит поле для ввода пункта в список дел
class InputForm extends React.Component {

	//обработчик добавляет пункт в список, после клика на кнопку OK в области поля ввода
	addTolist = (e) => {
		const { inputState, todos } = this.props.state
		const newTodos = [...todos]; //копируем в массив список дел из состояния
		if (inputState && inputState.trim() !== '') { //проверяем, чтобы поле ввода было не пустым
			const newItem = {											//создаем объект с данными задачи для списка дел из состояния
				id: todos.length,
				text: inputState,
				completed: false,
				uniqId: new Date().getTime() // уникальный параметр для передачи в свойство key экземпляра компонента
			};
			newTodos.push(newItem); //добавляем его в массив списка дел
			this.props.toSetInputState(); // обнуляем инпут
		};

		this.props.toSetTodosState(newTodos); //обновляем состояние списка дел
		localStorage.setItem('todoDataInLS', JSON.stringify(newTodos)); //сохраняем в localStorage список
		this.props.toHideInput(); //скрываем поле ввода
	};

	//обрабатываем нажатие Enter при наборе в поле ввода
	handlePressKey = (e) => {
		if (e.key === 'Enter') {
			this.addTolist();
		}
	};

	render() {
		const pHolder = "Введите задачу и нажите Enter или ОК";

		return (
			<>
				<div id="add-field" onClick={(e) => e.nativeEvent.stopImmediatePropagation()}>
					<div><input
						autoComplete="off"
						id="text-input" type="text"
						placeholder={pHolder}
						onKeyUp={this.handlePressKey}
						onChange={this.props.toSetInputState}
						autoFocus={true}
					/></div>
					<div><button id="okbutton" onClick={this.addTolist} >ок</button></div>
				</div>
			</>
		)
	};
};

export default InputForm;
