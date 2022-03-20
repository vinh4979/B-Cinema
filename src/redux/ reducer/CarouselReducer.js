const stateDefault = {
  arrCarousel: [
    {
      maPhim: 1380,
      tenPhim: 'Raya',
      biDanh: 'raya',
      trailer: 'https://www.youtube.com/embed/0WWzgGyAH6Y',
      hinhAnh: 'http://movie0706.cybersoft.edu.vn/hinhanh/raya_gp07.jpg',
      moTa: "Fearing the actions of a god-like Super Hero left unchecked, Gotham City's own formidable, forceful vigilante takes on Metropolis most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it's ever known before.",
      maNhom: 'GP07',
      ngayKhoiChieu: '2021-02-15T00:00:00',
      danhGia: 10
    }
  ]
}

export const CarouselReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'SET_CAROUSEL': {
      state.arrCarousel = action.arrCarousel
      return { ...state }
    }

    default:
      return { ...state }
  }
}
