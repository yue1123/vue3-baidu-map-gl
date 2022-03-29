import { getCurrentInstance } from 'vue'
export function useBaseMap() {
	const parent = getCurrentInstance()?.parent
	console.log(parent?.exposed?.map())
	return { map: parent }
}
