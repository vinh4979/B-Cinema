import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  layDanhSachHeThongRapAction,
  layThongTinPhimAction
} from 'src/redux/actions/QuanLyRapAction'
import { AnimatePresence, motion } from 'framer-motion'
import { loadingVariants } from 'src/utils/constants'
import styled from 'styled-components'
import Banner from '../components/MovieDetail.component/Banner'
import MovieInfo from '../components/MovieDetail.component/MovieInfo'
import MovieDetailBooking from '../components/MovieDetail.component/MovieDetailBooking'
import { CLOSE_MODAL } from 'src/redux/types/type'
import Modal from '../components/Modal'
import Loading from '../components/Loading'
import ScrollToTop from '../components/ScrollToTop'

export default function DetailPage(props) {
  const dispatch = useDispatch()
  const { movieDetail, isLoading } = useSelector(
    state => state.QuanLyPhimReducer
  )
  const { isTrailerShow } = useSelector(state => state.ModalReducer)
  const arrHeThongRap = useSelector(
    state => state.QuanLyRapReducer.arrHeThongRap
  )

  useEffect(() => {
    let { id } = props.match.params
    dispatch(layThongTinPhimAction(id))
    dispatch(layDanhSachHeThongRapAction())
  }, [dispatch])

  return (
    <motion.div variants={loadingVariants} initial="hidden" animate="visible">
      <Wrapper>
        <div className="" id="movieDetail">
          {isLoading && <Loading />}

          <AnimatePresence>
            {isTrailerShow && (
              <div className="section-middle">
                <Backdrop
                  className="backdrop"
                  onClick={() => {
                    dispatch({ type: CLOSE_MODAL })
                  }}
                />
                <Modal trailer={movieDetail.trailer} />
              </div>
            )}{' '}
          </AnimatePresence>
          {!isLoading && (
            <>
              <ScrollToTop
                to={`/movie-details/${movieDetail?.maPhim}#movieDetail`}
              />
              <Banner movie={movieDetail || []} />
              <MovieInfo movie={movieDetail || []} />
              <MovieDetailBooking
                logoRap={arrHeThongRap}
                movieDetail={movieDetail}
              />
            </>
          )}
        </div>
      </Wrapper>
    </motion.div>
  )
}
const Backdrop = styled.div``
const Wrapper = styled.div`
  background-color: var(--color-bg);
`
