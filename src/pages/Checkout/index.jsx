import { Container, Items, Payment } from './styles';

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { OrderItems } from '../../components/OrderItems'
import { PaymentMethod } from '../../components/PaymentMethod'
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

export function Checkout() {
  const [itemsData, setItemsData] = useState([])
  const [total, setTotal] = useState(0);
  
  const { fetchOrderedItems, dropOrderedItems } = useAuth();


  useEffect(() => {
    const itemStorage = fetchOrderedItems();

    async function fetchItemDetails() {
      const response = await api.get('/checkout', { params: { products: itemStorage }})

      setItemsData(response.data);

      const totalPrice = response.data.reduce((accumulator, currentValue) => accumulator + currentValue['price'], 0)
      setTotal(totalPrice)

    }

    fetchItemDetails();
  }, [])

  return (
    <Container>
      <Header />

      <Items>
        <h2>Meu Pedido</h2>
        <OrderItems data={ itemsData } total={ total }/>
      </Items>

      <Payment>
        <h2>Pagamento</h2>
        <PaymentMethod></PaymentMethod>
      </Payment>

      <Footer />
    </Container>

  )
    
};
