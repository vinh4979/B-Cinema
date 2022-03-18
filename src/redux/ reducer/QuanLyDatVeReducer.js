import { CHON_GHE, DAT_VE, GET_CHI_TIET_PHONG_VE, LOADING } from '../types/type'

const stateDefault = {
  chiTietPhongVe: {},
  gheDangDat: [],
  isLoading: false
}

export const QuanLyDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_CHI_TIET_PHONG_VE: {
      state.chiTietPhongVe = action.chiTietPhongVe
      state.isLoading = false

      return { ...state }
    }

    case LOADING: {
      state.isLoading = true
      return { ...state }
    }

    case CHON_GHE: {
      // lay danh cap nhat tu stateDefaut
      let danhSachGheCapNhat = [...state.gheDangDat]

      // khi ghe duoc click thi tra ve kiem tra xem 2 ghe co giong nhau ma ghe hay khong
      const gheDangDat = data => {
        return data.maGhe === action.gheDuocChon.maGhe
      }

      // neu ghe da chon truoc do thi index =! -1
      let index = danhSachGheCapNhat.findIndex(gheDangDat)

      if (index !== -1) {
        danhSachGheCapNhat.splice(index, 1)
      } else {
        danhSachGheCapNhat.push(action.gheDuocChon)
      }

      return { ...state, gheDangDat: danhSachGheCapNhat }
    }

    default:
      return { ...state }
  }
}
