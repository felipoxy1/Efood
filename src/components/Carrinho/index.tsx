import * as S from './style'
import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import lixeira from '../../assets/lixeira.svg'
import { useValorTotal } from '../../Uteis'

const Carrinho = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeFromCart = (id: number) => {
    dispatch(remove(id))
  }

  const total = useValorTotal()

  return (
    <>
      <S.overlay className={isOpen ? 'is-open' : ''} onClick={closeCart}>
        <S.carrinho onClick={e => e.stopPropagation()}>
          <S.CardContainer className="ListaContainer">
            <ul>
              {items.map(item => (
                <S.CardPedido key={item.id}>
                  <S.CardImg src={item.foto} alt="" />
                  <div className="CardPedidoText">
                    <h3>{item.nome}</h3>
                    <p className="CardPedidoPreco">R$ {item.preco}0</p>
                  </div>
                  <S.CardDescart
                    onClick={() => {
                      removeFromCart(item.id)
                    }}
                    src={lixeira}
                    alt=""
                  />
                </S.CardPedido>
              ))}
            </ul>
            <S.Informations>
              <span>Valor total</span>
              <span>R$ {total}</span>
            </S.Informations>
            <S.ContinueButtom>Continuar com a entrega</S.ContinueButtom>
          </S.CardContainer>
        </S.carrinho>
      </S.overlay>
    </>
  )
}

export default Carrinho
