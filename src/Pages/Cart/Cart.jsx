import React, { useContext } from 'react'
import Layout from '../../components/Layout/Layout'
import { DataContext } from '../../components/DataProvider/DataProvider'

function Cart() {
  const [state,dispatch] = useContext(DataContext)
  return (
    <Layout>
      <p>cart page</p>
      <p>{state.basket.length}</p>
    </Layout>
  )
}

export default Cart
