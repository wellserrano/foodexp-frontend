import React, { useState } from 'react'

import { Container, Form } from './styles'

import { Link, useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { Button } from '../../components/Button'
import { TextInput } from '../../components/TextInput'

export function SignUp () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function HandleSignUp () {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/
    const isEmailValid = emailRegex.test(email)
    if (!isEmailValid) return alert('E-mail inválido')

    api.post('/users', {
      name,
      email,
      password
    })
      .then(() => {
        alert('Usuário cadastrado com sucesso!')
        navigate('/')
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          console.error(error)
          alert('Não foi possível cadastrar o usuário')
        }
      })
  };

  return (
    <Container>

      <h1>
        <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.0318 0.216492L43.4349 12.0918V35.8425L22.0318 47.7179L0.628698 35.8425V12.0918L22.0318 0.216492Z" fill="#065E7C"/>
        </svg>

        food.exp
      </h1>

      <Form>
        <h2>Crie sua conta</h2>

        <TextInput
          caption='Seu nome'
          placeholder='Maria da Silva'
          onChange={e => setName(e.target.value) }
        />
        <TextInput
          caption='Email'
          type='email'
          placeholder='exemplo@exemplo.com.br'
          onChange={e => setEmail(e.target.value) }
        />
        <TextInput
          caption='Senha'
          placeholder='Mínimo 6 caracteres'
          type='password'
          onChange={e => setPassword(e.target.value) }
        />

        <Button
          type="button"
          title="Criar conta"
          onClick={HandleSignUp}
        />

        <Link to='/'>Já tenho uma conta</Link>

      </Form>
    </Container>
  )
}
