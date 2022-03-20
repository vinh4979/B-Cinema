import React, { Fragment, useRef } from 'react'
import { motion } from 'framer-motion'
import { loadingVariants } from 'src/utils/constants'
import styled from 'styled-components'
import screen from 'src/assets/img/bookingPage/screen.png'
import { useDispatch } from 'react-redux'
import { CHON_GHE, USER_BOOKING_FAIL } from 'src/redux/types/type'
// import { history } from 'src/App'
import { USER_LOGIN } from 'src/utils/config'
import { history } from 'src/App'

export default function BookingTickedLeft({ chiTietPhongVe, gheDangDat }) {
  const dispatch = useDispatch()
  const { thongTinPhim, danhSachGhe } = chiTietPhongVe

  const bookingRef = useRef()

  const loaiGhe = seat => {
    return seat.loaiGhe === 'Vip' ? 'seat seat__vipSeat' : 'seat'
  }

  const gheDangchon = seat => {
    let index = gheDangDat.findIndex(gheDD => gheDD.maGhe === seat.maGhe)
    if (index !== -1) {
      return 'seat__choosingSeat'
    }
  }

  const gheDaDat = seat => {
    if (seat.daDat) {
      return seat.loaiGhe === 'Vip'
        ? 'seat seat__selected seat__vipSeat'
        : 'seat seat__selected'
    }
  }

  // console.log('userLogin', user)

  const handleChoosenSeat = seat => {
    let user = JSON.parse(localStorage.getItem(USER_LOGIN))
    if (user === null) {
      dispatch({
        type: USER_BOOKING_FAIL
      })
      history.push('/signin')
    } else {
      dispatch({
        type: CHON_GHE,
        gheDuocChon: seat
      })
    }

    // console.log('seat duoc chon', seat)
  }
  return (
    <motion.section
      variants={loadingVariants}
      initial="hidden"
      animate="visible"
    >
      <Wrapper>
        <div className="booking_left">
          {/* booking infor */}
          <div className="booking__info">
            <div className="booking__info--address">
              <img src={thongTinPhim?.hinhAnh} alt="" />
              <div>
                <p className="nameMovie">{thongTinPhim?.tenCumRap}</p>
                <p className="subNameMovie">
                  {thongTinPhim?.diaChi} -- {thongTinPhim?.tenRap}
                </p>
              </div>
            </div>
            <div />
          </div>
          {/* booking seat */}
          <div className="booking__container">
            <div className="booking__seat">
              <div className="screen__container">
                <div className="screen" ref={bookingRef}>
                  <img src={screen} alt="screen" />
                </div>
              </div>

              {/* seat */}
              <div>
                {danhSachGhe?.map((seat, index) => {
                  return (
                    <Fragment key={index}>
                      <button
                        type="button"
                        className={` 
                        ${loaiGhe(seat)}
                         ${gheDangchon(seat)}
                         ${gheDaDat(seat)}`}
                        onClick={() => {
                          handleChoosenSeat(seat)
                        }}
                        disabled={seat.daDat}
                      >
                        {seat.stt}
                      </button>

                      {(index + 1) % 16 === 0 ? <br /> : null}
                    </Fragment>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </motion.section>
  )
}

const Wrapper = styled.div`
  .booking__info {
    margin: 7rem 0 0;

    .booking__info--address {
      display: flex;
      img {
        max-height: 5rem;
        width: 5rem;
        margin-right: 1rem;
        border-radius: 10px;
      }
    }
  }
  .booking__container {
    /* overflow: hidden;
    overflow-x: scroll; Scroll Bar */
    .booking__seat {
      text-align: center;
      margin-top: 1rem;
      margin-bottom: 2rem;
      /* width: 250%; */
      .screen__container {
        padding-bottom: 1rem;
        img {
          margin: 0 auto;
          width: 80%;
        }
      }
      .seat {
        background-color: var(--color-seat);
        width: 2rem;
        height: 2rem;
        margin-right: 10px;
        margin-top: 10px;
        border-radius: var(--radius);
        background: #3e515d;
        transition: var(--transition);
        /* color: transparent; */
        &:hover {
          background-color: var(--color-choosingSeat);
          color: var(--color-white) !important;
        }
      }
      .seat__vipSeat {
        background-color: var(--color-vipSeat);
        &:hover {
          background-color: var(--color-choosingSeat);
          color: var(--color-white) !important;
        }
      }
      .seat__selected {
        background-color: var(--color-white) !important;
      }
      .seat__choosingSeat {
        background-color: var(--color-choosingSeat);
        color: var(--color-white) !important;
      }
    }
  }
`
