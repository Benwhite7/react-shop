import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '../components/Menu';
import MyOrder from '../containers/MyOrder';
import menu from '../assets/icons/icon_menu.svg';
import logo from '../assets/logos/logo_yard_sale.svg';
import AppContext from '../context/AppContext';
import shoppingCart from '../assets/icons/icon_shopping_cart.svg';
import styles from "../styles/Header.module.scss";

const Header = () => {
	const { state, toggleOrder, toggleMenu } = useContext(AppContext);

	return (
		<>
			<nav className={styles.Nav}>
				<div className={styles.menu}>
					<Image src={menu} alt="menu" width={50} height={50}/>
				</div>
				<div className={styles["navbar-left"]}>
					<Link href="/">
						<Image src={logo} alt="logo" className={styles["nav-logo"]} />
					</Link>
					<ul>
						<li>
							<Link href="/">All</Link>
						</li>
						<li>
							<Link href="/">Clothes</Link>
						</li>
						<li>
							<Link href="/">Electronics</Link>
						</li>
						<li>
							<Link href="/">Furnitures</Link>
						</li>
						<li>
							<Link href="/">Toys</Link>
						</li>
						<li>
							<Link href="/">Others</Link>
						</li>
					</ul>
				</div>
				<div className={styles["navbar-right"]}>
					<ul>
						<button className={styles["more-clickable-area navbar-email pointer"]} onClick={() => toggleMenu()}>
							platzi@example.com
						</button>
						<button
							className={styles["navbar-shopping-cart"]}
							onClick={() => toggleOrder()}
						>
							<Image className="more-clickable-area pointer" src={shoppingCart} width={40} height={40}  alt="shopping cart" />
							{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
						</button>
					</ul>
				</div>
				{state.menuIsOpen && <Menu />}
			</nav>
			{state.orderIsOpen && <MyOrder />}
		</>
	);
};

export default Header;
