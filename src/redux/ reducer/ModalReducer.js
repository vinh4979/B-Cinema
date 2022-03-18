import {
  CLOSE_MODAL,
  DAT_VE,
  OPEN_MODAL_COMFIRM,
  OPEN_MODAL_ERROR,
  OPEN_MODAL_SUCCESS,
  OPEN_MODAL_TRAILER,
  REQUIRE_CHOOSING_SEAT,
  SIGN_UP_ERROR,
  SIGN_UP_SUCCESS,
  USER_BOOKING_FAIL
} from '../types/type'

const stateDefault = {
  isTrailerShow: false,
  isModalShow: false,
  message: '',
  type: '',
  message2: '',
  goTo: null,
  trailer: null
}

export const ModalReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case OPEN_MODAL_TRAILER: {
      state.isTrailerShow = action.isTrailerShow
      state.trailer = action.trailer
      return { ...state }
    }
    case CLOSE_MODAL: {
      state.isTrailerShow = false

      state.isModalShow = action.isModalShow
      state.message = null
      state.message2 = null
      state.type = null
      state.trailer = null

      return { ...state }
    }
    case OPEN_MODAL_ERROR: {
      state.isModalShow = action.isModalShow
      state.message = 'LOGIN FAIL !'
      state.message2 = action.message
      state.type = 'Error'

      return { ...state }
    }

    case OPEN_MODAL_SUCCESS: {
      state.isModalShow = action.isModalShow
      state.type = action.typeModal
      state.message = 'LOGIN SUCCESS !'
      state.message2 = null

      return { ...state }
    }

    case SIGN_UP_ERROR: {
      state.isModalShow = action.isModalShow
      state.message = 'SIGN UP FAIL !'
      state.message2 = action.message
      state.type = 'Error'

      return { ...state }
    }

    case SIGN_UP_SUCCESS: {
      state.isModalShow = action.isModalShow
      state.message = 'SIGN UP SUCCESS !'
      state.message2 = action.message
      state.type = 'Success'

      return { ...state }
    }

    case OPEN_MODAL_COMFIRM: {
      state.isModalShow = action.isModalShow
      state.message = 'LOG OUT !'
      state.message2 = 'ARE YOU SURE LOG OUT YOUR ACCOUNT ?'
      state.type = 'LogOut'
      return { ...state }
    }

    case DAT_VE: {
      state.isModalShow = true
      state.message = action.content
      state.message2 =
        'You got it! Booking information will be send via your email !'
      state.type = 'Success-booking'
      state.goTo = action.id

      return { ...state }
    }

    case REQUIRE_CHOOSING_SEAT: {
      state.isModalShow = true
      state.message = 'Please choosing your seat !'
      state.message2 = 'May you forgot something!'
      state.type = 'warning'
      state.goTo = action.goTo

      return { ...state }
    }

    case USER_BOOKING_FAIL: {
      state.isModalShow = true
      state.message = 'Please Login To Select Seat !'
      state.type = 'userBookingFail'
      return { ...state }
    }
    default:
      return { ...state }
  }
}
