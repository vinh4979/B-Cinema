import { baseService } from './baseService'

export class QuanLyNguoiDungService extends baseService {
  constructor() {
    super()
  }
  dangNhap = thongTinDangNhap => {
    return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap)
  }

  dangKy = thongTinDangKy => {
    return this.post(`/api/QuanLyNguoiDung/DangKy`, thongTinDangKy)
  }

  layThongTinTaiKhoan = thongTinTaiKhoan => {
    return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`, thongTinTaiKhoan)
  }
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService()
