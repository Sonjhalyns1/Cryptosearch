import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';
const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'b7803a6276mshe589fac8576fc43p18fdbdjsn553835400336',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl ='https://coinranking1.p.rapidapi.com/'

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

Chart.register(LineController, LineElement, PointElement, LinearScale,  CategoryScale)
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
          
        })
    })
})

export const {useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery} = cryptoApi;


// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       
//     }
//   };