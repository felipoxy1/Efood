import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Restaurante, Prato } from '../models/Restaurante'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood',
  }),
  endpoints: builder => ({
    getFeatureRestaurantes: builder.query<Restaurante[], void>({
      query: () => '/restaurantes',
    }),
    getFeaturePratos: builder.query<Prato[], string>({
      query: id => `/restaurantes/${id}`,
      transformResponse: (response: Restaurante) => response.cardapio,
    }),
    getRestauranteById: builder.query<Restaurante, number>({
      query: id => `/restaurantes/${id}`,
    }),
  }),
})

export const {
  useGetFeatureRestaurantesQuery,
  useGetFeaturePratosQuery,
  useGetRestauranteByIdQuery,
} = api

export default api
