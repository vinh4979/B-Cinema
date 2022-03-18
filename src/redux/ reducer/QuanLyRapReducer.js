import { LAY_DAMH_SACH_HE_THONG_RAP } from '../types/type'

const stateDefault = {
  arrHeThongRap: []
}

export const QuanLyRapReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LAY_DAMH_SACH_HE_THONG_RAP: {
      state.arrHeThongRap = action.arrHeThongRap
      return { ...state }
    }

    default:
      return { ...state }
  }
}
