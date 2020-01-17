import styled from "styled-components";

const Button = styled.button`
	color: ${props => props.color || 'var(color--main'};
	border: 2px solid ${props => props.borderColor || 'var(--color-main)'};
	border-radius: 3px;
	padding: 4px 10px;
	background-color: inherit;
	margin: 5px;
`;

export default Button;