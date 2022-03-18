import React from 'react'
import { useDispatch } from 'react-redux'
import {
  CHON_GHE,
  CLOSE_MODAL,
  DAT_VE,
  REQUIRE_CHOOSING_SEAT
} from 'src/redux/types/type'
import styled from 'styled-components'
import _ from 'lodash'
import { USER_LOGIN } from 'src/utils/config'
import { datVeAction } from 'src/redux/actions/QuanLyDatVeAction'
import { Redirect } from 'react-router-dom'
import { history } from 'src/App'

export default function BookingTickedRight({
  chiTietPhongVe,
  gheDangDat,
  _id
}) {
  const dispatch = useDispatch()

  const { thongTinPhim } = chiTietPhongVe
  // lay user tu local storage
  let user = JSON.parse(localStorage.getItem(USER_LOGIN))

  console.log('ghe dang dat props', user)

  const handleBooking = () => {
    // kiem tra ghe da dat hay chua?
    if (user === null) {
      history.push('/signin')
    } else {
      if (gheDangDat.length === 0) {
        dispatch({
          type: REQUIRE_CHOOSING_SEAT,
          goTo: `/booking/${_id}`
        })
      } else {
        const body = {
          getID: _id,
          thongTinVe: {
            maLichChieu: thongTinPhim.maLichChieu,
            taiKhoanNguoiDung: user.taiKhoan,
            danhSachVe: gheDangDat
          }
        }

        dispatch(datVeAction(body))
      }
    }
  }

  return (
    <Wrapper>
      <div className="booking__right">
        <div className="booking__info--movie">
          <h2>{thongTinPhim?.tenPhim}</h2>
        </div>
        <hr />
        <div className="booking__info--pay">
          <div>
            <p>Date: </p>
            <p>{thongTinPhim?.ngayChieu}</p>
          </div>
          <div>
            <p>Show time: </p>
            <p>{thongTinPhim?.gioChieu}</p>
          </div>
          <div>
            <p>Room: </p>
            <p>{thongTinPhim?.tenRap}</p>
          </div>
          <div className="booking__seat">
            <p>Seat: </p>
            <div>
              {gheDangDat?.length !== 0 ? (
                _.sortBy(gheDangDat, ['stt'])?.map((item, index) => {
                  return <p key={index}>{item.stt}</p>
                })
              ) : (
                <p>Please choosing your seat!</p>
              )}
            </div>
          </div>
          <div>
            <p>Discount: </p>
            <p>0%</p>
          </div>
          <hr />
          <h2>
            {gheDangDat
              .reduce((total, seat, index) => {
                return (total += seat.giaVe)
              }, 0)
              .toLocaleString()}
            đ
          </h2>
          <hr />
        </div>
      </div>
      <div className="bookingLeft__button">
        <button
          onClick={handleBooking}
          type="button"
          className="booking__button"
        >
          BOOKING
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 22rem;
  top: 5rem;
  right: 0;
  background-color: #f5f5f5;
  /* background-color: var(--color-seat); */
  box-shadow: 0 0 5px rgb(160 160 160 / 50%);
  z-index: 2000;
  overflow: hidden;
  border-radius: var(--radius);
  color: black;
  h2,
  h5 {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 0;
  }
  h5 {
    text-align: left;
    font-size: 1rem;
  }
  hr {
    margin: 1rem auto;
    border-top: 1px dashed black;
  }
  div {
    padding: 0.25rem 0;
  }
  .booking__right {
    ::-webkit-scrollbar {
      width: 0px;
      background: transparent; /* make scrollbar transparent */
    }
    position: relative;
    height: 100%;
    position: relative;
    width: 90%;
    margin: 0 auto;
    overflow-y: scroll;
    overflow-x: hidden;
    .booking__info--movie {
      h2 {
        padding-top: 1rem;
      }
    }
  }
  .booking__info--pay {
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p:nth-child(2) {
        font-weight: 700;
      }
      padding: 0.5rem 0;
    }
    .booking__seat {
      display: grid;
      grid-template-columns: 1fr 2fr;
      p {
        color: var(--color-redNetflix);
        margin: 0;
      }
      div {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        gap: 0.5rem;
        justify-self: end;
        p {
          font-weight: 700;
        }
      }
    }
  }
  .bookingLeft__button {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    bottom: 1rem;
    .booking__button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90%;
      padding: 1.5rem 0;
      opacity: 1;
      bottom: 4.5rem;
    }
  }
`
