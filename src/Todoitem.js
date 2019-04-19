import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
	render() {
		//объект со стилями для изменения вида пункта списка при переключении true/false
		const completedStyle = {
			fontStyle: "italic",
			color: "#cdcdcd",
			textDecoration: "line-through"
		};
		//Используем styled-components для создания стилизованного компонента, отобрающего кнопку Удалить
		const Remove = styled.div`
			font-size: 0.9em;
			padding:0 2px;
			color: red;
			border: 1px dotted red;
			border-radius: 25%;
			margin-left: auto;
			cursor: pointer;
		`;

		return (
			<div className='todo-item'>
				<input
					id={this.props.item.id}
					type="checkbox"
					checked={this.props.item.completed}
					onChange={() => this.props.handleChange(this.props.item.id)}
				/><label htmlFor={this.props.item.id}>
					<p style={this.props.item.completed ? completedStyle : null}>{this.props.item.text}</p>
				</label>
				<Remove onClick={() => this.props.delItem(this.props.item.id)}>x</Remove>
			</div>
		)
	}
};

export default TodoItem;

//применяем способ статической типизации, проверяя, соответсвуют ли полученные даные из App нужному типу
TodoItem.propTypes = {
	item: PropTypes.object
};