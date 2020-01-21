import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  	0% {
		transform: rotate(0deg);
	}
	20% {
		transform: rotate(76deg‬);
	}
	40% {
		transform: rotate(230deg);
	}
	55% {
		transform: rotate(600deg);
	}
	80% {
		transform: rotate(520deg);
	}
	100% {
		transform: rotate(720deg);
	}
`;

const Spinner = styled.div`
	max-width: 100%;
	max-height: 100%;

	::before  {
		margin: 10px;
		box-sizing: content-box;
		content: ' ';
		width: 40px;
		height: 40px;
		display: inline-block;
		border: 15px solid rgba(166, 40, 239, 0.7);
		border-color: rgba(166, 40, 239, 0.44) transparent rgba(166, 40, 239, 0.44) transparent;
		border-radius: 50%;
		animation: ${rotate} 2s linear infinite;
	}
`;

export default Spinner;