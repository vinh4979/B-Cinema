import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layDanhSachHeThongRapAction } from 'src/redux/actions/QuanLyRapAction'
import Booking from '../components/Home.component/Booking'
import CarouselCoverflow from '../components/Home.component/CarouselCoverflow'
import MovieList from '../components/Home.component/MovieList'
import { AnimatePresence, motion } from 'framer-motion'
import { loadingVariants } from 'src/utils/constants'
import AlertModal from '../components/AlertModal'
import ScrollToTop from '../components/ScrollToTop'
import { Backdrop } from '@material-ui/core'
import { CLOSE_MODAL } from 'src/redux/types/type'
import Modal from '../components/Modal'

export default function HomePage() {
  const dispatch = useDispatch()
  const { isModalShow, message, type, message2, goTo, trailer } = useSelector(
    state => state.ModalReducer
  )
  const { isTrailerShow } = useSelector(state => state.ModalReducer)

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(layDanhSachHeThongRapAction())
  }, [])
  return (
    <motion.section
      variants={loadingVariants}
      initial="hidden"
      animate="visible"
      id="homepage"
    >
      <AnimatePresence>
        {isTrailerShow && (
          <div className="section-middle">
            <Backdrop
              className="backdrop"
              onClick={() => {
                dispatch({ type: CLOSE_MODAL })
              }}
            />
            <Modal trailer={trailer} />
          </div>
        )}{' '}
      </AnimatePresence>
      <AnimatePresence>
        {isModalShow && (
          <div>
            <div className="backdrop" />
            <AlertModal
              message={message}
              goTo={goTo}
              type={type}
              message2={message2}
            />
          </div>
        )}
      </AnimatePresence>
      <ScrollToTop to="home#homepage" />
      <CarouselCoverflow />
      <MovieList />
      <Booking />
    </motion.section>
  )
}
