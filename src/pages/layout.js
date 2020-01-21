import React from "react"
import Aux from "../components/hoc/aux"
import Header from "../components/header"
const Layout = props => {
  return (
    <Aux>
      <Header />
      <main> {props.children}</main>
    </Aux>
  )
}

export default Layout
