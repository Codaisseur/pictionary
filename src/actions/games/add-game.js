import API from '../../middleware/api'
import loadError from '../load/error'
import loadSuccess from '../load/success'
import loading from '../loading'
export const ADDED_GAME = 'ADDED_GAME'

const api = new API()
const games = api.service('games')

export default (user) => {
  return (dispatch) => {
    dispatch(loading(true))

    api.authenticate()
      .then(() => {
        games.create({
          teams: [
            {
              players: [user._id],
            }
          ],
        })
        .then((response) => {
          dispatch(loadSuccess())
          dispatch({
            type: ADDED_GAME,
            payload: response.data
          })
        })
        .catch((error) => {
          dispatch(loadError(error))
        })
        .then(() => {
          dispatch(loading(false))
        })
      })
  }
}
