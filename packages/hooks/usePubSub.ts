import mitt from 'mitt'

type Events = {
  initd: BMapGL.Map
  unload: any
  [prop: string]: any
}

const mittInstance = mitt<Events>()
function usePubSub() {
  return mittInstance
}

export default usePubSub
