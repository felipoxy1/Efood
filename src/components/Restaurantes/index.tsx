import * as S from './style'
import { type Restaurante as RestauranteType } from '../../models/Restaurante'
import RestauranteCard from '../RestauranteCard'

type Props = {
  restauranteModel: RestauranteType[]
}

const Restaurantes = ({ restauranteModel }: Props) => {
  const restaurantesOrdenadosPorDestaque = [...restauranteModel].sort(
    (a, b) => {
      if (a.destacado === b.destacado) return 0
      if (a.destacado) return -1
      return 1
    },
  )

  return (
    <S.Resta>
      {restaurantesOrdenadosPorDestaque.map(restaunt => (
        <RestauranteCard key={restaunt.id} restaurante={restaunt} />
      ))}
    </S.Resta>
  )
}

export default Restaurantes
