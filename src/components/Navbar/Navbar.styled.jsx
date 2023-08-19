import styled from 'styled-components';

export const NavbarStyled = styled.nav`
	background-color: var(--header-bg);
	padding: 1.7rem;
	.container {
		display: flex;
		justify-content: space-between;
	}
	.nav {
		&__logo {
		}
		&__category {
			display: flex;
			gap: 3.5rem;
			align-items: center;
			.enter {
				padding: 1rem 5rem;
				border-radius: 10rem;
				background-color: #fff;
				color: black;
			}
		}
	}
`;
