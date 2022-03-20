import { TOKEN, USER_LOGIN } from 'src/utils/config'
import { LOGIN_STATUS, LOG_OUT, OPEN_MODAL_SUCCESS } from '../types/type'

let stt
if (localStorage.getItem(USER_LOGIN)) {
  stt = true
} else {
  stt = false
}

const stateDefault = {
  isLocalStorageSTT: stt,
  isLoginSuccess: false
}

export const AuthStatusReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LOG_OUT: {
      state.isLoginSuccess = false
      state.isLocalStorageSTT = false

      return { ...state }
    }

    case OPEN_MODAL_SUCCESS: {
      state.isLoginSuccess = action.isLoginSuccess
      return { ...state }
    }
    default:
      return { ...state }
  }
}
