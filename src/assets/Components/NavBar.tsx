import React from 'react'
import ItemMenu from './ItemMenu'

export default function NavBar() {
  return (
    <>
    <ItemMenu content='Home' link='#'></ItemMenu>
    <ItemMenu content='Features' link='#'></ItemMenu>
    <ItemMenu content='Contact' link='#'></ItemMenu>
   </>
  )
}
