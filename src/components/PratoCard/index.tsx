import type { Prato } from '../../models/Restaurante'
import * as S from './style'

type Props = {
  prato: Prato
}

const PratoCard = ({ prato }: Props) => {
  return (
    <>
      <S.PratoCard>
        <S.PratoImg src={prato.foto} alt="" />
        <S.PratoTextArea>
          <S.PratoTitle>{prato.nome}</S.PratoTitle>
          <S.PratoDesc>{prato.descricao}</S.PratoDesc>
          <S.PratoButtom>Adicionar ao carrinho</S.PratoButtom>
        </S.PratoTextArea>
      </S.PratoCard>
    </>
  )
}

export default PratoCard
