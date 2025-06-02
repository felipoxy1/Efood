import { useParams } from 'react-router-dom'
import PratoCard from '../PratoCard'
import * as S from './style'
import { useGetFeaturePratosQuery } from '../../services/api'

const PratosLista = () => {
  const { id } = useParams<{ id: string }>()

  const {
    data: pratos,
    error,
    isLoading,
  } = useGetFeaturePratosQuery(id ?? '')

  if (isLoading) {
    return <p>Carregando pratos...</p>
  }

  if (error || !pratos) {
    return <p>Erro ao carregar pratos.</p>
  }

  return (
    <S.ListaDePratos>
      {pratos.slice(0, 6).map(prato => (
        <PratoCard key={prato.id} prato={prato} />
      ))}
    </S.ListaDePratos>
  )
}

export default PratosLista
