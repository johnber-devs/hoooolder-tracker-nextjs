import {useRequest} from 'src/use'
import {request} from 'boot/axios'

export interface DeleteFeedsPayload {
  communityId: string | number
  /**
   * @default 10
   */
  id: string | number
}

const deleteFeed = (payload: DeleteFeedsPayload) => {
  const {communityId, id} = payload
  return request.delete(`/communities/${communityId}/feeds/${id}`)
}

export const useDeleteFeed = useRequest(deleteFeed)
