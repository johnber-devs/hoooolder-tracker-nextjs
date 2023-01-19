import { api } from '../api'
import { AxiosResponse } from 'axios'

export interface Categories {
  category1Id: number
  category1Name: string
  category2Id: number
  category2Name: string
  category3Id: number
  category3Name: string
}

export const getProductsCategories = (): Promise<AxiosResponse<[]>> => {
  return api.get('/v1/images/search', {
    params: { limit: 10 },
  })
}
