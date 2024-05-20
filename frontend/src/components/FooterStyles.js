import styled from "styled-components";

export const Box = styled.div`
	padding: 5% 2.5%;
	background: black;
	bottom: 0;
	width: 100%;

	@media (max-width: 1000px) {
		padding: 70px 30px;
	}
`;

export const FooterContainer = styled.div`
display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 50px;
    padding-right: 50px;
	max-width: 1000px;
	margin: 0 auto;
`;




export const FooterLink = styled.a`
	color: #fff;
	margin-bottom: 20px;
	font-size: 18px;
	text-decoration: none;

	&:hover {
		color: white;
		transition: 200ms ease-in;
	}
`;


