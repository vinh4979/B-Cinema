import { GroupID } from 'src/utils/config'
import { ThongTinDatVe } from 'src/_Core/modals/ThongTinDatVe'
import { baseService } from './baseService'

export class QuanLyDatVeService extends baseService {
  constructor() {
    super()
  }

  layChiTietPhongVe = maLichChieu => {
    return this.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    )
  }

  datVe = thongTinDatVe => {
    return this.post(`/api/QuanLyDatVe/DatVe`, thongTinDatVe)
  }
}

export const quanLyDatVeService = new QuanLyDatVeService()
