import styled from 'styled-components';

const Input = styled.input`
	font-family: Brush Script MT, Brush Script Std, cursive;
	border: 1px solid var(--color-main);
	border-radius: 10px;
	box-shadow: 0 2px 4px var(--color-main);
	padding: 10px 16px;
	font-size: 1.5em;
	color: var(--color-main);
	outline: none;
	width: ${props => props.width || 'auto'};
	
`;

export default Input;