import React from 'react';
import { NavLink  } from 'react-router-dom'
import styles from './Navbar.module.css';

function Navbar(id) {
	return (
		<div className={styles.navbar}>
			<NavLink exact to="/modules/modulelist" className={styles.btn} activeClassName={styles.active}>Home</NavLink>
			<NavLink to="/modules/cart" className={styles.btn} activeClassName={styles.active}>Cart</NavLink>
		</div>
	)
}

export default Navbar;
