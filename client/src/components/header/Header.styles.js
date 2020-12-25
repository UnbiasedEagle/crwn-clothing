import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;

	@media screen and (max-width: 528px) {
		display: block;
	}
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 25px;

	@media screen and (max-width: 528px) {
		margin:auto;
		display:block;
	}
`;

export const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	@media screen and (max-width: 528px) {
		width: 100%;
		justify-content: center;
		padding-bottom: 1.2rem;
		text-align: center;
	}
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
	cursor: pointer;
`;
