import { TOKEN, USER_LOGIN } from 'src/utils/config'
import { LOG_OUT, SIGN_IN, THONG_TIN_TAI_KHOAN } from '../types/type'

let user = {}
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const stateDefault = {
  userLogin: user,
  thongTinTaiKhoan: {}
}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SIGN_IN: {
      const { thongTinDangNhap } = action
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap))
      localStorage.setItem(TOKEN, thongTinDangNhap.accessToken)
      // console.log('api dang nhap reducer', thongTinDangNhap)

      return { ...state, userLogin: thongTinDangNhap }
    }

    case LOG_OUT: {
      localStorage.removeItem(USER_LOGIN)
      localStorage.removeItem(TOKEN)

      return { ...state }
    }

    case THONG_TIN_TAI_KHOAN: {
      state.thongTinTaiKhoan = action.thongTinTaiKhoan

      return { ...state }
    }
    default:
      return { ...state }
  }
}
