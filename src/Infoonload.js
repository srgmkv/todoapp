import React from 'react';
import styled from 'styled-components';

class InfoBlockOnLoad extends React.Component {
	render() {
		const InfoBlock = styled.div`
			position: absolute;
			background-color: rgba(244, 255, 89, 0.8);
			width: 100%;
			height: 60px;
			z-index: 2;
			text-align: center;
			font-size: 1.2em;
			color: royalblue;
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
			background-color: rgb(255, 0, 0, 0.6);
			color: white;
			vertical-align: middle;
			margin: 0 3px;
			cursor: pointer;
		`;

		return (
			<>
				<InfoBlock  >
					Для добавления пункта в список дел нажмите кнопку
					<Plus id="plus" onClick={this.props.toShowInput}>+</Plus>
					слева вверху
				</InfoBlock>
			</>
		)
	}
};

export default InfoBlockOnLoad;