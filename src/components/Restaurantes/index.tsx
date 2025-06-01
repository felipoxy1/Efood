import * as S from './style'
import { type Restaurante as RestauranteType } from '../../models/Restaurante'
import RestauranteCard from '../RestauranteCard'

type Props = {
  restauranteModel: RestauranteType[]
}

const Restaurantes = ({ restauranteModel }: Props) => {
  return (
    <S.Resta>
      {restauranteModel.map(restaunt => (
        <RestauranteCard key={restaunt.id} restaurante={restaunt} />
      ))}
    </S.Resta>
  )
}
export default Restaurantes
