import type { SocialNetworkDB } from '../../../types/socialNetwork'
import socialNetworkList from '../socialNetworks.json'

const { data } = socialNetworkList as unknown as SocialNetworkDB

export const socialNetworkRepository = {
  getAll: () => data,
}
