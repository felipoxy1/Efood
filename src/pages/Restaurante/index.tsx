import Header from '../../components/Header'
import { useParams } from 'react-router-dom'
import { useGetRestauranteByIdQuery } from '../../services/api'

const Restaurante = () => {
  const { id } = useParams<{ id: string }>()
  const {
    data: restaurante,
    error,
    isLoading,
  } = useGetRestauranteByIdQuery(Number(id))

  if (isLoading) {
    return (
      <>
        <Header />
        <p>Carregando restaurante...</p>
      </>
    )
  }

  if (error || !restaurante) {
    return (
      <>
        <Header />
        <p>Restaurante com id {id} não encontrado.</p>
      </>
    )
  }

  return (
    <>
      <Header />
      <h1>{restaurante.titulo}</h1>
      <p>{restaurante.descricao}</p>
    </>
  )
}

export default Restaurante
