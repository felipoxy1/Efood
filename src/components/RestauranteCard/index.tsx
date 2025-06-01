import * as S from './style'
import Estrela from '../../assets/Estrela.svg'
import Tag from '../Tag'
import type { Restaurante } from '../../models/Restaurante'

type Props = {
  restaurante: Restaurante
}

const RestauranteCard = ({ restaurante }: Props) => {
  return (
    <S.Card>
      <S.ImagemResta src={restaurante.capa} alt={restaurante.titulo} />
      <S.TagsContainer>
        <Tag>{restaurante.tipo}</Tag>
      </S.TagsContainer>
      <S.RestaTextArea>
        <S.RestaTitle>{restaurante.titulo}</S.RestaTitle>
        <S.Avaliacao className="avaliacao">
          <div>
            <S.NotaDeAvaliacao>{restaurante.avaliacao}</S.NotaDeAvaliacao>
          </div>
          <div>
            <img src={Estrela} alt="" />
          </div>
        </S.Avaliacao>
      </S.RestaTextArea>
      <S.RestText>{restaurante.descricao}</S.RestText>
      <S.LinkStyled to={`/restaurante/${restaurante.id}`}>
        Saiba mais
      </S.LinkStyled>
    </S.Card>
  )
}

export default RestauranteCard
