import React from 'react'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import ModuleList from './moduleList'

const moduleListSelector = createSelector(
  (state) => state.modules,
  (modules) => modules
)

export function Cart () {
  const moduleList = useSelector(moduleListSelector)
  const cartList = moduleList.filter(item => item.isInCart)

  function getTotalPrice () {
    let totalPrice = 0
    for (let i = 0; i < cartList.length; i++) {
      totalPrice += cartList[i].price
    }
    return Math.ceil(totalPrice * 100) / 100
  }

  return (
    <div>
      <ModuleList list={cartList} />
      <div>Total price: {getTotalPrice()}</div>
    </div>
  )
}
