import { Container, Table } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { SelectBox } from '../../components/SelectBox'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'


import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export function Orders() {
  const [data, setData] = useState([]);

  const { user } = useAuth();
  const navigate = useNavigate();
  
  function handleOrderDetails(e) {
    const order_id = Number(e.target.innerHTML);


    navigate('/orders/details', { state: { order_id: order_id } })
  }

  useEffect(() => {
    //needs to check if user is admin or not

    async function getOrders() {
      const response = await api.get(`/orders/?id=${user.id}`)  
      setData(response.data)
    }

    getOrders()

  }, [])

  return (
    <Container>
      
      <Header />

        <Table>

          <h1>Pedidos</h1>

          <table>
            <tbody>
            <tr key={'trheader'}>
              <th>Status</th>
              <th>Código</th>
              <th>Detalhamento</th>
              <th>Data e Hora</th>
            </tr>            
            {
              data &&
              data.map((order, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <SelectBox  
                        order={ order.id }
                        status={ order.status }
                      />
                    </td>
                    <td><div className='open-order-details' onClick={ handleOrderDetails }>{ order.id }</div></td>
                    <td>{ order.details }</td>
                    <td>{ order.date }</td>
                  </tr>
                )
              })
            }

            </tbody>
          </table>

        </Table>

      <Footer />

    </Container>
  )
}