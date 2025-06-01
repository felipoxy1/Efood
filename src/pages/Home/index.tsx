import Header from '../../components/Header'
import Restaurantes from '../../components/Restaurantes'
import { Container } from '../../styles'
import Footer from '../../components/footer'
import { useGetFeatureRestaurantesQuery } from '../../services/api'

const Home = () => {
  const { data, error, isLoading } = useGetFeatureRestaurantesQuery()

  if (isLoading) return <p>Carregando restaurantes...</p>
  if (error) return <p>Erro ao carregar restaurantes.</p>

  return (
    <>
      <Header />
      <Container>
        {data && <Restaurantes restauranteModel={data} />}
      </Container>
      <Footer />
    </>
  )
}

export default Home
