import { history } from 'src/App'
import { quanLyNguoiDungService } from 'src/services/QuanLyNguoiDungService'
import {
  OPEN_MODAL_ERROR,
  OPEN_MODAL_SUCCESS,
  SIGN_IN,
  SIGN_UP_ERROR,
  SIGN_UP_SUCCESS,
  THONG_TIN_TAI_KHOAN
} from '../types/type'

export const dangNhapAction = thongTinDangNhap => {
  return async dispatch => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap)

      if (result.data.statusCode === 200) {
        // data thong tin dang nhap
        dispatch({
          type: SIGN_IN,
          thongTinDangNhap: result.data.content
        })

        dispatch({
          type: OPEN_MODAL_SUCCESS,
          isModalShow: true,
          typeModal: 'Success',
          // authreducer
          isLoginSuccess: true
        })

        history.goBack()
      }
    } catch (error) {
      console.log('data error', error.response.data.statusCode)

      if (error.response.data.statusCode === 404) {
        dispatch({
          type: OPEN_MODAL_ERROR,
          isModalShow: true,
          message: error.response.data.content
        })
      }
    }
  }
}

export const dangKyAction = thongTinDangKy => {
  return async dispatch => {
    try {
      const result = await quanLyNguoiDungService.dangKy(thongTinDangKy)
      if (result.data.statusCode === 200) {
        dispatch({
          type: SIGN_UP_SUCCESS,
          isModalShow: true,
          message: result.data.message
        })
      }
    } catch (error) {
      if (error.response.data.statusCode === 400) {
        dispatch({
          type: SIGN_UP_ERROR,
          isModalShow: true,
          message: error.response.data.content
        })
      }
    }
  }
}

export const ThongTinTaiKhoanAction = thongTinTaiKhoan => {
  return async dispatch => {
    try {
      const result = await quanLyNguoiDungService.layThongTinTaiKhoan(
        thongTinTaiKhoan
      )
      if (result.data.statusCode === 200) {
        dispatch({
          type: THONG_TIN_TAI_KHOAN,
          thongTinTaiKhoan: result.data.content
        })
      }
    } catch (error) {
      console.log(error.response.data.content)
    }
  }
}
