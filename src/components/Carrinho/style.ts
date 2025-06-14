import styled from 'styled-components'
import { cores } from '../../styles'

export const overlay = styled.div`
  display: none;
  flex-direction: row-reverse;
  background-color: rgba(0, 0, 0, 0.73);
  z-index: 1;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  &.is-open {
    display: flex;
  }
`

export const carrinho = styled.div`
  width: 360px;
  height: 100%;
  background-color: ${cores.vermelho};
`

export const CardContainer = styled.div`
  margin-top: 32px;
  margin-left: 7px;
  margin-right: 7px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 2;

  ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`

export const CardPedido = styled.div`
  width: 344px;
  height: 100px;
  padding: 10px;
  background-color: #ffebd9;
  display: flex;
  position: relative;
  .CardPedidoText {
    margin-left: 10px;
    color: ${cores.vermelho};

    .CardPedidoPreco {
      margin-top: 0.8rem;
    }
  }
`

export const CardImg = styled.img`
  display: flex;
  width: 100px;
  height: 80px;
  overflow: hidden;
`

export const CardDescart = styled.img`
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
`

export const Informations = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: ${cores.background};
  }
`

export const ContinueButtom = styled.button`
  width: 100%;
  padding: 6px;
  border: none;
  background-color: ${cores.buttonText};
  color: ${cores.vermelho};
  font-weight: 700;
`
