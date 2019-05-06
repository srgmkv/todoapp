import React from 'react';
import styled from 'styled-components';
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
			color: #d00;
			font-size: 1.45em;
			font-weight: bold;
			line-height: 1;
			margin-left: auto;
			padding-right: 5px;
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
				<Remove onClick={() => this.props.delItem(this.props.item.id)}>&times;</Remove>
			</div>
		)
	}
};

export default TodoItem;