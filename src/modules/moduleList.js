import React from 'react'
import { useDispatch } from 'react-redux'
import { moduleToCart, setCoverage } from './moduleSlice'
import { arrayOf, object } from 'prop-types'
import classNames from 'classnames'
import styles from './moduleList.module.css'

ModuleList.propTypes = {
  list: arrayOf(object)
}

function ModuleList (props) {
  const dispatch = useDispatch()
  const moduleList = props.list.map(item => item)

  return (
    <ul className={styles.list}>
    {moduleList.map((item) =>
      <li key={item.id}
      className={classNames(styles.block, { [styles.active]: item.isInCart })}>

        <h3>{item.name}</h3>

        <div className={styles.input}>
          <input type="range"
          min={item.coverage[0]} max={item.coverage[1]}
          defaultValue={item.selectedCoverage}
          onInput={(event) => {
            dispatch(setCoverage({ id: item.id, newCoverage: event.target.value }))
          }}/>

          <p className={styles.lowerBound}>{item.coverage[0]}</p>
          <p className={styles.upperBound}>{item.coverage[1]}</p>
          <p className={styles.value}>{item.selectedCoverage}</p>
        </div>

        <div className={styles.stats}>
          <p>Risk: {item.risk}</p>
          <p>Price: {item.price}</p>
        </div>

        <div className={styles.btn}
        onClick={() => dispatch(moduleToCart({ id: item.id }))}>
        {item.isInCart ? 'Remove from cart' : 'To cart'}
        </div>

      </li>
    )}</ul>
  )
}

export default ModuleList
