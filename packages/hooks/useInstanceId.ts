import { provide } from 'vue'
import { getUid } from '../utils'

export function useInstanceId() {
  const instanceId = getUid()
  provide('parentComponentId', instanceId)
  return instanceId
}
