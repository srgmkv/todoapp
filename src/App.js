
import React from 'react';
import Todoitem from './Todoitem'; //Компонент рендерит пункт списка дел
import Inputform from './Inputform'; //Компонент рендерит поле для добавления пункта в список
import Infoblock from './Infoblock'; //Рендерит инфоблок при загрузке пустого списка

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: [], //Здесь будем хранить список дел в виде массива объектов
			isInputShown: false, //Здесь - состояние поля для добавления
			justloaded: false, //состояни определяет загрузку инфоблока
			inputState: null, //состояние определяет дл конторлируемого инпута
			uniqId: null // сюда будем генерировать уникальный id для свойства key компонента
		};
	};

	//данным методом будем менять состояние списка дел из дочерних компонентов
	toSetTodosState = (array) => this.setState({ todos: array });

	//делаем инпут контролируемым (затем передадим метод в компонент инпута)
	toSetInputState = (e) =>
		typeof e === 'object' ? this.setState({ inputState: e.target.value }) :
			this.setState({ inputState: null });



	//метод обратывает клик на пункт списка, меняет его состояние сделано/не_сделано
	handleChange = (id) => {
		const todos = [...this.state.todos];
		const updatedTodos = todos.map(item => {
			if (item.id === id) {
				item.completed = !item.completed
			}
			return item;
		});
		this.setState({ todos: updatedTodos })
		localStorage.setItem('todoDataInLS', JSON.stringify(updatedTodos)); //сохраняем локально состояние списка
	};

	//метод обрабатывает удаление пункта из списка
	delItem = id => {
		const todos = [...this.state.todos];
		const updatedTodos = todos.filter(item => item.id !== id)
			.map((item, index) => {
				item.id = index
				return item
			});
		this.setState({ todos: updatedTodos });
		localStorage.setItem('todoDataInLS', JSON.stringify(updatedTodos));
		this.setState({ justloaded: false });
	};

	//два метода ниже меняют состояние для отображения/скрытия поля ввода и ифноблока 
	toShowInput = (e) => {
		this.setState({ justloaded: false });
		this.setState({ isInputShown: true });
		e.nativeEvent.stopImmediatePropagation();//останавливаем всплытие, дабы не запустить обработчик *X* 
	};

	toHideInput = () => this.setState({ isInputShown: false });

	//перед рендерингом компонента(при загрузке страницы):
	componentDidMount() {
		//подгружаем список дел в состояние из localStorage
		const updTodos = JSON.parse(localStorage.getItem('todoDataInLS'));
		if (updTodos) this.setState({ todos: updTodos });
		this.setState({ justloaded: true });

		//вешаем обработчики на клики вне поля ввода и на нажатие клавиши Esc, убирающий поле ввода
		document.addEventListener('click', () => this.toHideInput()); // *X*

		document.addEventListener('keyup', e => e.key === 'Escape' && this.toHideInput());

	};

	render() {
		//из массива списка дел формируем нужно кол-во компонентов для отображения списка дел,
		//передавая компоненту данные и методы из родителя в виде свойст
		const todoList = this.state.todos.map(
			item => <Todoitem
				key={item.uniqId}
				item={item}
				handleChange={this.handleChange}
				delItem={this.delItem}
				toShowInput={this.toShowInput}
			/>
		);

		return (
			<>
				{//Показываем инфоблок сразу после загрузки и пустом списке
					this.state.justloaded && !this.state.todos.length &&
					<Infoblock
						toShowInput={this.toShowInput}
					/>}
				{//Показываем или убираем поле ввода, передавая ему данные и методы 
					this.state.isInputShown &&
					<Inputform
						addTolist={this.addTolist}
						handlePressKey={this.handleChange}
						state={this.state}
						toSetTodosState={this.toSetTodosState}
						toHideInput={this.toHideInput}
						toSetInputState={this.toSetInputState}
					/>
				}

				<div id="main"
					//делаем область страницы неактивной под полем ввода
					className={this.state.isInputShown ? 'list-disable' : undefined}>

					<button id="add-button" onClick={this.toShowInput}>+</button>
					<div id="header">Мой список дел</div>

					<div className="todo-list" /* здесь отобразим элементы списка дела */>
						{todoList}
					</div>
				</div >
			</>
		)
	};
};

export default App;
