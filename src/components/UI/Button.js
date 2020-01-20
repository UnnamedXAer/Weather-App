import styled from "styled-components";

const Button = styled.button`
	color: ${props => props.color || 'var(--color--main)'};
	border: ${props => props.border || '2px solid var(--color-main)'};
	border-radius: 3px;
	padding: 4px 10px;
	background-color: inherit;
	font-family: inherit;
	margin: 5px;
`;

export default Button;