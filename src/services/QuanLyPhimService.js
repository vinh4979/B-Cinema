import { GroupID } from 'src/utils/config'
import { baseService } from './baseService'

export class QuanLyPhimService extends baseService {
  constructor() {
    super()
  }

  layDanhSachBanner = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachBanner`)
  }

  layDanhSachPhim = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GroupID}`)
  }
}

export const quanLyPhimService = new QuanLyPhimService()
