import { useDispatch } from 'react-redux'
import { ActionCreatorsMapObject, bindActionCreators } from 'redux'

export const useBindCreators = <T extends ActionCreatorsMapObject>(creators: T): T => {
  const dispatch = useDispatch()
  return bindActionCreators(creators, dispatch)
}
