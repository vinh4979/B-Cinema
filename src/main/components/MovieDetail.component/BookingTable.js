import React, { useEffect, useState } from 'react'
import format from 'date-format'
import { getDay } from 'src/utils/helper'
import { getCinema, today } from 'src/utils/constants'
import styled from 'styled-components'
import moment from 'moment'
import { Link } from 'react-router-dom'

export default function BookingTable({ movie, cinema }) {
  const heThongRapChieu = movie.heThongRapChieu

  const [rapChieu, setRapChieu] = useState()

  const cineByBrand = heThongRapChieu?.filter(
    item => item.maHeThongRap === cinema
  )

  let cumRapChieu
  if (cineByBrand !== undefined) {
    cumRapChieu = cineByBrand[0]?.cumRapChieu
  }

  const ChoosenCinema = data => {
    setRapChieu(data.maCumRap)
  }

  const lichChieuTheoRap = cumRapChieu?.filter(
    item => item.maCumRap === rapChieu
  )
  let lichChieu
  if (lichChieuTheoRap !== undefined) {
    lichChieu = lichChieuTheoRap[0]?.lichChieuPhim
  }

  console.log('gioChieuTheoNgay chieu:', rapChieu)

  return (
    <Wrapper>
      <div className="booking_table">
        <div className="img_rap">{getCinema(cinema)}</div>
        <div className="table_cumRap">
          <div className="cumRap_tile">
            <h5>Cum rap chieu</h5>
          </div>
          <div className="cumRap">
            {cumRapChieu && (
              <div>
                {cumRapChieu.map((item, index) => {
                  return (
                    <div
                      className={` cumRap_item ${
                        rapChieu === item.maCumRap ? 'active' : null
                      }`}
                      key={index}
                      onClick={ChoosenCinema.bind(null, item)}
                    >
                      <p>{item.tenCumRap}</p>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
        <div className="table_time">
          <div className="time_tile">
            <h5>Time</h5>
          </div>
          <div className="time">
            {lichChieu?.map((item, index) => {
              return (
                <div key={index} className="item_time">
                  <div className="date">
                    <p>
                      {moment(item.ngayChieuGioChieu).format('L')}
                      <span>:</span>
                    </p>
                  </div>
                  <div className="hour">
                    <Link to={`/booking/${item.maLichChieu}`} className="btn">
                      {moment(item.ngayChieuGioChieu).format('hh:mm ')}
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-top: 4rem;

  /* width: 90%; */
  margin: 0 auto;
  max-width: var(--max-width);
  .booking_table {
    display: grid;
    grid-template-columns: 300px 1fr 1fr;
    /* border: 2px solid var(--color-gray-800); */
    .img_rap {
      /* padding: 1rem; */
      /* border-right: 2px solid var(--color-gray-800); */
      margin-right: 1rem;
      img {
        width: 100%;
        height: 300px;
      }
    }

    .table_cumRap {
      border: 2px solid var(--color-gray-800);
      .cumRap_tile {
        font-weight: 500;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        border-bottom: 2px solid var(--color-gray-800);
        h5 {
          text-align: center;
          padding-top: 1rem;
          padding-bottom: 1rem;
          color: var(--color-redNetflix);
        }
      }
      .cumRap {
        padding: 1rem;
        .cumRap_item {
          position: relative;
          transition: var(--transition);
          padding: 20px;
          opacity: 0.5;
          cursor: pointer;
          &:after {
            content: '';
            position: absolute;
            left: 50%;
            bottom: 0;
            height: 2px;
            width: calc(100% - 20px);
            transform: translate(-50%, 0rem);
            background-color: var(--color-gray-800);
            box-shadow: 0 -4px 10px 1px var(--color-gray-800);
            transition: var(--transition);
          }
          &:hover {
            opacity: 1;
            &::after {
              background-color: #fb4226;
              box-shadow: 0 -4px 10px 1px #fb4226;
            }
          }
        }
        .active {
          opacity: 1;
          &::after {
            background-color: #fb4226;
            box-shadow: 0 -4px 10px 1px #fb4226;
          }
        }
      }
    }
  }

  .table_time {
    border: 2px solid var(--color-gray-800);
    border-left: none;

    .time_tile {
      font-weight: 500;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
      border-bottom: 2px solid var(--color-gray-800);

      h5 {
        text-align: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
        color: var(--color-redNetflix);
      }
    }
  }
  .time {
    padding: 1rem;

    .item_time {
      padding: 20px;
      position: relative;
      opacity: 0.5;
      &:after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        height: 2px;
        width: calc(100% - 20px);
        transform: translate(-50%, 0rem);
        background-color: var(--color-gray-800);
        box-shadow: 0 -4px 10px 1px var(--color-gray-800);
        transition: var(--transition);
      }
      &:hover {
        opacity: 1;
        &::after {
          background-color: #fb4226;
          box-shadow: 0 -4px 10px 1px #fb4226;
        }
      }

      .date {
        display: flex;
        align-items: center;
        letter-spacing: 0.1rem;
        /* margin-left: 1rem; */
      }
      .hour {
        margin-top: 1.5rem;
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        a {
          background-color: transparent;
          border-radius: 0;
          padding: 0.75rem 1rem;
          font-size: 1rem;
          letter-spacing: 0.25rem;
          border: 1px solid black;
          opacity: 0.5;

          &:hover {
            opacity: 1;
            background-color: var(--color-seat);
          }
        }
      }
    }
  }
`
