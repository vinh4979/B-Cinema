import { GroupID } from 'src/utils/config'
import { baseService } from './baseService'

export class QuanLyRapService extends baseService {
  constructor() {
    super()
  }

  layDanhSachHeThongRap = () => {
    return this.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GroupID}`
    )
  }

  layThongTinPhim = id => {
    return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
  }
}

export const quanLyRapService = new QuanLyRapService()
