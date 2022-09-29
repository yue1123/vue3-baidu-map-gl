import { Ref } from 'vue'

type PathPoint = {
	lng: number
	lat: number
}
type UseTrackAnimationOptions = {
	/**
	 * animation duration time
	 */
	duration: number
	/**
	 * animation delay time
	 */
	delay: number
	/**
	 * @default true
	 */
	overallView?: boolean
	/**
	 * @default 55
	 */
	tilt?: number
	/**
	 * @default auto
	 */
	zoom?: number
}

function useTrackAnimation(options: UseTrackAnimationOptions) {
	const setPath = (path: PathPoint[]) => {}
  const start = () => {

  }
  const stop = () => []
	return {
		setPath,
		start,
		stop
	}
}
