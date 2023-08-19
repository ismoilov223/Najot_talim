import React from 'react';
import { NavbarStyled } from './Navbar.Styled';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<NavbarStyled className='nav'>
			<div className='container'>
				<div className='nav__logo'>
					<img src='' alt='' className='nav__logo-img' />
				</div>
				<div className='nav__category'>
					<Link className='nav__category-item'>
						<p>Kurslar</p>
					</Link>
					<Link className='nav__category-item'>
						<p>Blog</p>
					</Link>
					<Link className='nav__category-item enter'>
						<p>Kirsh</p>
					</Link>
				</div>
			</div>
		</NavbarStyled>
	);
};

export default Navbar;
