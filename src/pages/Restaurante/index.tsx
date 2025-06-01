import Header from '../../components/Header'
import { useParams } from 'react-router-dom'
import { useGetRestauranteByIdQuery } from '../../services/api'
import Banner from '../../components/Banner'
import Footer from '../../components/footer'
import PratoCard from '../../components/PratoCard'

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
        <Footer />
      </>
    )
  }

  if (error || !restaurante) {
    return (
      <>
        <Header />
        <p>Restaurante com id {id} não encontrado.</p>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <Banner />
      <Footer />
    </>
  )
}

export default Restaurante
