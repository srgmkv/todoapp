import React from 'react';
import PropTypes from 'prop-types';

//Данный компонент рендерит поле для ввода пункта в список дел
class InputComponent extends React.Component {
	constructor() {
		super();
		this.input = React.createRef(); //получаем ссылку на поле ввода
	};

	//обработчик добавляет пункт в список, после клика на кнопку OK в области поля ввода
	addTolist = () => {
		const textVal = this.input.current.value; //получаем знаение из поля ввода
		const todos = [...this.props.state.todos]; //копируем в массив список дел из состояния
		if (textVal && textVal.trim() !== '') { //проверяем, чтобы поле ввода было не пустым
			const newItem = {											//создаем объект с данными пункта для списка дел
				id: this.props.state.todos.length,
				text: textVal,
				completed: false
			};
			todos.push(newItem); //добавляем его в массив списка дел
			this.input.current.value = null; //обнуляем поле ввода
		};

		this.props.toSetNewState(todos); //обновляем состояние списка дел
		localStorage.setItem('todoDataInLS', JSON.stringify(todos)); //сохраняем в localStorage список
		this.props.toHideInput(); //скрываем поле ввода
	};

	//обрабатываем нажатие Enter при наборе в поле ввода
	handlePressKey = (e) => {
		if (e.key === 'Enter') {
			this.addTolist();
		}
	};

	//при рендеринге поля ввода устанавляем в него курсор
	componentDidMount() {
		this.input.current.focus();
	}

	render() {
		const pHolder = "Type here task to do, then click Enter or + ";

		return (
			<>
				<div id="add-field">
					<div><input
						id="text-input" type="text"
						placeholder={pHolder}
						onKeyUp={this.handlePressKey}
						ref={this.input}
					/></div>
					<div><button id="okbutton" onClick={this.addTolist} >ок</button></div>
				</div>
			</>
		)
	};
};

export default InputComponent;

//применяем способ статической типизации, проверяя, соответсвуют ли полученные даные из App нужному типу
InputComponent.propTypes = {
	state: PropTypes.object
};
