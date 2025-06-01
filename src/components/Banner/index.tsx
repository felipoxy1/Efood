import { useGetRestauranteByIdQuery } from '../../services/api'
import { useParams } from 'react-router-dom'
import * as S from './style'

const Banner = () => {
  const { id } = useParams<{ id: string }>()
  const {
    data: restaurante,
    error,
    isLoading,
  } = useGetRestauranteByIdQuery(Number(id))

  if (isLoading) return <p>Carregando banner...</p>
  if (error || !restaurante) return <p>Erro ao carregar banner.</p>

  return (
    <S.BannerContainer>
      <S.BannerImg src={restaurante.capa} alt="" />
      <S.ContainerSecundario>
        <S.BannerInfo>
          <h3>{restaurante.tipo}</h3>
          <h2>{restaurante.titulo}</h2>
        </S.BannerInfo>
      </S.ContainerSecundario>
    </S.BannerContainer>
  )
}

export default Banner
