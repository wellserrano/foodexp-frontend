import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1.4rem;

  > button:last-child {
    width: 9.2rem;
    padding: 1.2rem 1.4rem;
  }
`;

export const ChangeButton = styled.button`
  background: none;
  border: none;
  outline: none;

  font-size: 2.4rem;
  color: ${({ theme }) => theme.COLORS.WHITE };

  .animation-click {
      animation: click .2s ease-out;
      
      @keyframes click {
        from {
          opacity: .2;
        }
  
        to {
          opacity: 1;
        }
      }    
  }
`;

export const Quantity = styled.input`
  background: none;
  border: none;
  outline: none;

  width: 2.4rem;

  text-align: center;

  font-size: 2rem;

  color: ${ ({ theme }) => theme.COLORS.WHITE};

  &:hover {
    cursor: default;
  }

  &::placeholder {
    color: ${ ({ theme }) => theme.COLORS.WHITE2};
  }
  
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;