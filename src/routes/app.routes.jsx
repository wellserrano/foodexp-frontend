import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { NewProduct } from '../pages/NewProduct';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/details" element={ <Details />} />
      <Route path="/newproduct" element={ <NewProduct />} />
    </Routes>
  )
}