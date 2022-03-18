import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { AuthStatusReducer } from './ reducer/AuthStatusReducer'
import { CarouselReducer } from './ reducer/CarouselReducer'
import { ModalReducer } from './ reducer/ModalReducer'
import { QuanLyDatVeReducer } from './ reducer/QuanLyDatVeReducer'
import { QuanLyNguoiDungReducer } from './ reducer/QuanLyNguoiDungReducer'
import { QuanLyPhimReducer } from './ reducer/QuanLyPhimReducer'
import { QuanLyRapReducer } from './ reducer/QuanLyRapReducer'

const rootReducer = combineReducers({
  // state component
  CarouselReducer: CarouselReducer, // load baner filem
  QuanLyPhimReducer: QuanLyPhimReducer,
  QuanLyRapReducer: QuanLyRapReducer,
  QuanLyNguoiDungReducer: QuanLyNguoiDungReducer,
  ModalReducer: ModalReducer,
  AuthStatusReducer: AuthStatusReducer,
  QuanLyDatVeReducer: QuanLyDatVeReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
