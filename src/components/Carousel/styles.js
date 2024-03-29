import styled from 'styled-components'

export const Container = styled.div`
  font-size: 3.2rem;
  font-weight: 500;
  margin-block: 4.2rem .8rem;
  max-width: 112rem;

  > h3 {
    margin-bottom: 3.9rem;
  }

  .dishes-container {
    position: relative;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

  }

  @media (max-width: 768px) {
    
  }


`

export const Dishes = styled.div`
  display: flex;
  justify-content: left;
  gap: 2.7rem;
  
  width: 100vw;
  align-items: center;
  
  overflow-x: hidden;
  scroll-behavior: smooth;
  
`
