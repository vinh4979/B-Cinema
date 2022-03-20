import { quanLyRapService } from 'src/services/QuanLyRapService'
import { GET_DETAIL_MOVIE, LAY_DAMH_SACH_HE_THONG_RAP } from '../types/type'

export const layDanhSachHeThongRapAction = () => {
  return async dispatch => {
    try {
      const result = await quanLyRapService.layDanhSachHeThongRap()

      dispatch({
        type: LAY_DAMH_SACH_HE_THONG_RAP,
        arrHeThongRap: result.data.content
      })
    } catch (error) {
      console.log('Quan Ly Rap Action errors: ', error.reponse?.data)
    }
  }
}

export const layThongTinPhimAction = id => {
  return async dispatch => {
    try {
      const result = await quanLyRapService.layThongTinPhim(id)
      // console.log('result:', result)

      dispatch({
        type: GET_DETAIL_MOVIE,
        movieDetail: result.data.content
      })
    } catch (error) {
      console.log('LayThongTinPhim Error: ', error)
    }
  }
}
