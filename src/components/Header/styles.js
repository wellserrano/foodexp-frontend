import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  grid-area: header;
  
  display: flex;
  align-items: center;
  justify-content: center;

  height: 10.4rem;
  background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_HEADFOOT };

  .homeButton {
    display: flex;
    align-items: center;
    gap: 1rem;

  }

  .animation-click {
    animation: click .5s forwards;
    margin: 0;
      
      @keyframes click {
        from {
          transform: rotate(180deg);
        }
  
        to {
          transform: rotate(0);

        }
      }    
  }

  > a {
    color: ${ ({ theme }) => theme.COLORS.WHITE2 };
    font-size: 1.6rem;
    font-family: ${ ({ theme }) => theme.FONTS.ROBOTO };

    margin-right: 3.2rem;

    > svg {
      margin-right: 1.2rem;
    }
  
    > span {
      color: ${ ({ theme }) => theme.COLORS.WHITE };
      font-size: 2.5rem;
      font-family: ${ ({ theme }) => theme.FONTS.ROBOTO };
  
      margin-right: 3.7rem;
      cursor: pointer;
    }

  }

  > button {
    display: flex;
    width: 21.6rem;

    padding: 1.2rem 3.3rem;
    margin-inline: 3.2rem;

  }

  > svg {
    color: ${ ({ theme }) => theme.COLORS.WHITE };
    font-size: 2.2rem;

    &:hover {
      cursor: pointer;
    }
  }


`;

export const AdminButton = styled(Link)`
  display: flex;
  align-items: center;
  margin-inline: 2.4rem;
`