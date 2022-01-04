import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moduleAdded, moduleToCart, setCoverage } from './moduleSlice';
import { createSelector } from 'reselect';
import classNames from 'classnames';
import styles from './moduleList.module.css';

const moduleListSelector = createSelector(
  (state) => state.modules,
  (modules) => modules
)

export function ModuleList() {
  const moduleList = useSelector(moduleListSelector)
  const dispatch = useDispatch()

  console.log(moduleList)

  return (
    <ul className={styles.list}>
      {moduleList.map((item) => 
        <li key={item.id} className={classNames(styles.block, {[styles.active]: item.isInCart})}>
          <h3>{item.name}</h3>
          <input
          type="range"
          min={item.coverage[0]} max={item.coverage[1]}
          defaultValue={item.selectedCoverage}
          onMouseUp={(event) => {
            dispatch(setCoverage({id: item.id, newCoverage: event.target.value}))
          }}
          />
          <p>Risk: {item.risk}</p>
          <div
          className={styles.btn}
          onClick={() => dispatch(moduleToCart({id: item.id}))}>
            {item.isInCart ? "Remove from cart" : "To cart"}
          </div>
        </li>
      )}
    </ul>
  )
}
