import { quanLyDatVeService } from 'src/services/QuanLyDatVeService'
import { DAT_VE, GET_CHI_TIET_PHONG_VE, LOADING } from '../types/type'

export const layDanhSachPhongVeAction = maLichChieu => {
  return async dispatch => {
    dispatch({
      type: LOADING
    })
    try {
      const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu)
      dispatch({
        type: GET_CHI_TIET_PHONG_VE,
        chiTietPhongVe: result.data.content
      })
    } catch (error) {
      console.log(error.response.data)
    }
  }
}

export const datVeAction = thongTinDatVe => {
  return async dispatch => {
    try {
      const result = await quanLyDatVeService.datVe(thongTinDatVe.thongTinVe)

      dispatch({
        type: DAT_VE,
        content: result.data.content,
        id: thongTinDatVe.getID
      })
    } catch (error) {
      console.log(error.response.data)
    }
  }
}
