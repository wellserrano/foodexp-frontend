import React from 'react'
import { Container } from './styles'

export function Footer () {
  return (
    <Container>
      <div className="logo">
        <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.0318 0.216492L43.4349 12.0918V35.8425L22.0318 47.7179L0.628698 35.8425V12.0918L22.0318 0.216492Z" fill="#065E7C"/>
        </svg>

        <p>food.exp</p>
      </div>

      <span>© 2022 - Todos os direitos reservados.</span>
    </Container>

  )
}
