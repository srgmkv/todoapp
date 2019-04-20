import React from 'react';
import styled from 'styled-components';

class InfoBlockOnLoad extends React.Component {
	render() {
		const InfoBlock = styled.div`
			position: absolute;
			background-color: rgba(0, 200, 0, 0.6);
			width: 100%;
			height: 60px;
			z-index: 2;
			text-align: center;
			font-size: 1.2em;
			color: rgb(1, 29, 116);
			padding-top: 20px;
			border-radius: 3px;
			max-width: 400px;
			top: 60px;
			left: 50%;
			transform: translateX(-50%);
    `;

		const Plus = styled.span`
			display: inline-block;
			padding: 0px 3px;
			background-color: rgb(255, 0, 0);
			color: white;
			vertical-align: middle;
			margin: 0 3px;
			cursor: pointer;
			border-radius: 2px;
			padding: 2px 6px;
		`;

		return (
			<>
				<InfoBlock  >
					Для добавления задачи в список дел нажмите кнопку
					<Plus id="plus" onClick={this.props.toShowInput}>+</Plus>
					 или слева вверху
				</InfoBlock>
			</>
		)
	}
};

export default InfoBlockOnLoad;