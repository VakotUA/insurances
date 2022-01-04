import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { moduleToCart } from './moduleSlice';
import styles from './moduleList.module.css';

const moduleListSelector = createSelector(
	(state) => state.modules,
	(modules) => modules
)

export function Cart() {
		const moduleList = []
		useSelector(moduleListSelector).forEach(item => {if(item.isInCart) moduleList.push(item)})
		const dispatch = useDispatch()

	return (
		<ul className={styles.list}>
		{moduleList.map((item) => 
			<li key={item.id} className={styles.block}>
				<h3 className={styles.name}>{item.name}</h3>
					<div className={styles.stats}>
						<p>Coverage: {item.selectedCoverage}</p>
						<p>Risk: {item.risk}</p>
						<p>Price: {item.price}</p>
					</div>
					<div 
					className={styles.btn}
					onClick={() => dispatch(moduleToCart({id: item.id}))}>
						Remove from cart
					</div>
			</li>
		)}
		</ul>
	)
}
