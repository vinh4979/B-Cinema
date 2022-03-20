import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { loadingVariants } from 'src/utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import AlertModal from '../components/AlertModal'
import { layDanhSachPhongVeAction } from 'src/redux/actions/QuanLyDatVeAction'
import BookingTickedLeft from '../components/BookingTicked.component/BookingTickedLeft'
import styled from 'styled-components'
import BookingTickedRight from '../components/BookingTicked.component/BookingTickedRight'
import Loading from '../components/Loading'

export default function BookingTickedPage(props) {
  const dispatch = useDispatch()
  const { isModalShow, message, type, message2, goTo } = useSelector(
    state => state.ModalReducer
  )
  const { chiTietPhongVe, gheDangDat, isLoading } = useSelector(
    state => state.QuanLyDatVeReducer
  )

  const userLogin = useSelector(state => state.QuanLyNguoiDungReducer)

  useEffect(() => {
    const action = layDanhSachPhongVeAction(props.match.params.id)

    dispatch(action)
  }, [dispatch])

  return (
    <motion.section
      variants={loadingVariants}
      initial="hidden"
      animate="visible"
    >
      <Wrapper>
        {/* Alert modal */}
        <AnimatePresence>
          {isModalShow && (
            <div>
              <div className="backdrop"></div>
              <AlertModal
                message={message}
                goTo={goTo}
                type={type}
                message2={message2}
              />
            </div>
          )}
        </AnimatePresence>
        {isLoading && <Loading />}
        {!isLoading && (
          <div className="booking section-center">
            <BookingTickedLeft
              chiTietPhongVe={chiTietPhongVe}
              gheDangDat={gheDangDat}
            />
            <BookingTickedRight
              chiTietPhongVe={chiTietPhongVe}
              gheDangDat={gheDangDat}
              userLogin={userLogin}
              _id={props.match.params.id}
            />
          </div>
        )}
      </Wrapper>
    </motion.section>
  )
}

const Wrapper = styled.div`
  .booking {
    display: grid;
    grid-template-columns: 1fr 18rem;
    gap: 1.5rem;
  }
`
