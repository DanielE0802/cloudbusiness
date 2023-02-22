import React from 'react'
import useStore from '../../states'
import {shallow} from 'zustand/shallow';

function Dashboard() {

  const {numberOfProducts} = useStore((state) => ({
    numberOfProducts: state.numberOfProducts
    }), shallow)

  return (
    <div>{numberOfProducts}</div>
  )
}

export default Dashboard