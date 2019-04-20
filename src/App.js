
import React from 'react';
import Todoitem from './Todoitem'; //Компонент рендерит пункт списка дел
import Inputcomp from './Inputcomp'; //Компонент рендерит поле для добавления пункта в список
import Infoonload from './Infoonload';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: [], //Здесь будем хранить список дел в виде массива объектов
			isInputShown: false, //Здесь - состояние поля для добавления
			justloaded: false
		};
	};

	//данным методом будем менять состояние списка дел из дочерних компонентов
	toSetNewState = (array) => this.setState({ todos: array });

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

	//два метода ниже меняют состояние отображения поля для добавления пункта в список
	toShowInput = () => {
		this.setState({ justloaded: false });
		this.setState({ isInputShown: true});
	};

	toHideInput = () => this.setState({ isInputShown: false });

	//перед рендерингом компонента(при загрузке страницы):
	componentDidMount() {
		//подгружаем список дел в состояние из localStorage
		const updTodos = JSON.parse(localStorage.getItem('todoDataInLS'));
		this.setState({ todos: updTodos }); 
		this.setState({ justloaded: true });

		/*if (!updTodos.length) {
			this.setState({ isInputShown: true });
			}*/
		
		//вешаем обработчики событий на клики мыши вне поля ввода пункта и на нажатие клавиши Esc,
		//убирающее поле ввода скрывалось
		document.addEventListener('click', e => {
			const id = e.target.id;
			console.log(id)
			if (id !== 'add-field' && id !== 'text-input' && id !== 'okbutton'
				&& id !== 'add-button' && id !== 'plus') {
				this.toHideInput();
			};
		});

		document.addEventListener('keyup', e => {
			if (e.key === "Escape") {
				this.toHideInput();
			};
		});
	};

	render() {
		//из массива списка дел формируем нужно кол-во компонентов для отображения списка дел,
		//передавая компоненту данные и методы из родителя в виде свойст
		const todoList = this.state.todos.map(
			item => <Todoitem
				key={item.id}
				item={item}
				handleChange={this.handleChange}
				delItem={this.delItem}

						toShowInput={this.toShowInput}
			/>
		);

		return (
			<>
			{this.state.justloaded && !this.state.todos.length &&
			<Infoonload 
			toShowInput={this.toShowInput}
			/>}
				{//Показываем или убираем поле ввода, передавая ему данные и методы 
					this.state.isInputShown &&
					<Inputcomp
						addTolist={this.addTolist}
						handlePressKey={this.handleChange}
						state={this.state}
						toSetNewState={this.toSetNewState}
						toHideInput={this.toHideInput}
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
