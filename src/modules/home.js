import React from 'react'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import ModuleList from './moduleList'

const moduleListSelector = createSelector(
  (state) => state.modules,
  (modules) => modules
)

export function Home () {
  const moduleList = useSelector(moduleListSelector)

  return (
    <ModuleList list={moduleList} />
  )
}
