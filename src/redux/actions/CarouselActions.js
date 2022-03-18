import { quanLyPhimService } from 'src/services/QuanLyPhimService'

export const getCarouselAction = () => {
  return async dispatch => {
    try {
      const result = await quanLyPhimService.layDanhSachBanner()
      dispatch({
        type: 'SET_CAROUSEL',
        arrCarousel: result.data.content
      })
    } catch (error) {
      // console.log('ERORR-banner', error)
    }
  }
}
