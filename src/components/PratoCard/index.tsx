import { useState } from 'react'
import type { Prato } from '../../models/Restaurante'
import * as S from './style'
import Fechar from '../../assets/fechar.svg'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  prato: Prato
}

const PratoCard = ({ prato }: Props) => {
  const [modalAberto, setModalAberto] = useState(false)
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(prato))
    setModalAberto(false)
    dispatch(open())
  }

  return (
    <>
      <S.PratoCard>
        <S.PratoImg src={prato.foto} alt="" />
        <S.PratoTextArea>
          <S.PratoTitle>{prato.nome}</S.PratoTitle>
          <S.PratoDesc>{prato.descricao}</S.PratoDesc>
          <S.PratoButtom onClick={() => setModalAberto(true)}>
            Adicionar ao carrinho
          </S.PratoButtom>
        </S.PratoTextArea>
      </S.PratoCard>
      {modalAberto && (
        <S.Modal>
          <div className="overlay">
            <div className="ModalCenter">
              <S.ModalContent>
                <S.ModalCloseBtn onClick={() => setModalAberto(false)}>
                  <img src={Fechar} alt="" />
                </S.ModalCloseBtn>
                <S.ModalGrid>
                  <S.ModalContainerImg className="ContentImg">
                    <S.ModalContentImg src={prato.foto} alt="" />
                  </S.ModalContainerImg>
                  <S.ModalContentText>
                    <h4>{prato.nome}</h4>
                    <p>{prato.descricao}</p>
                    <p>{prato.porcao}</p>
                    <S.AddCartButton onClick={addToCart}>
                      Adicionar ao carrinho - R${prato.preco}0
                    </S.AddCartButton>
                  </S.ModalContentText>
                </S.ModalGrid>
              </S.ModalContent>
            </div>
          </div>
        </S.Modal>
      )}
    </>
  )
}

export default PratoCard
