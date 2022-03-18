import { GET_MOVIE, GET_MOVIE_DETAIL_LOADING } from 'src/redux/types/type'
import { quanLyPhimService } from 'src/services/QuanLyPhimService'

export const layDanhSachPhim = () => {
  return async dispatch => {
    dispatch({
      type: GET_MOVIE_DETAIL_LOADING
    })
    try {
      const result = await quanLyPhimService.layDanhSachPhim()
      dispatch({
        type: GET_MOVIE,
        arrMovieList: result.data.content
      })
    } catch (error) {
      console.log(error)
    }
  }
}
