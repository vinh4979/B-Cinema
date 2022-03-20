import React, { useState } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary
} from '@material-ui/core'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import HomeBookingSchedule from './HomeBookingSchedule'

export const loadingCineVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
}
export const loadingScheduleVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1
    }
  }
}

export default function Booking() {
  const { arrHeThongRap } = useSelector(state => state.QuanLyRapReducer)

  const [cinePlex, setCinePlex] = useState('BHDStar')
  const [filerMaCumRap, setFilterMaCumRap] = useState('Undefine!!!')

  const SetCinePlexHandler = data => {
    setCinePlex(data.maHeThongRap)
  }

  // lay danh cum ra da chon
  const cinePlexByBrand = arrHeThongRap.filter(
    item => item.maHeThongRap === cinePlex
  )
  // show thong tin cum rap da chon
  let lstCumRap
  if (cinePlexByBrand !== undefined) {
    lstCumRap = cinePlexByBrand[0]?.lstCumRap
  }

  // filter ma cum rap
  const setHandleCumRap = data => {
    setFilterMaCumRap(data.maCumRap)
  }

  const phimTheoRap = lstCumRap?.filter(item => item.maCumRap === filerMaCumRap)
  let arrDanhSachPhim
  if (phimTheoRap !== undefined) {
    arrDanhSachPhim = phimTheoRap[0]?.danhSachPhim
  }

  return (
    <Warrper className="section-middle" id="homePage__booking">
      <div className="homeBooking">
        <div className="homeBooking__cineplexLogo">
          {arrHeThongRap.map((item, index) => {
            return (
              <div
                key={index}
                onClick={SetCinePlexHandler.bind(null, item)}
                className={`homeBooking__logo--item ${
                  cinePlex === item.maHeThongRap ? 'active' : null
                }`}
              >
                <img src={item.logo} alt="logo" />
              </div>
            )
          })}
        </div>

        <div className="homeBooking__main">
          <motion.div
            variants={loadingCineVariants}
            initial="hidden"
            animate="visible"
            key={cinePlex}
            className="homeBooking__cineplex desktop"
          >
            {lstCumRap?.map((item, index) => {
              return (
                <div
                  className={`homeBooking__cineplex--item ${
                    filerMaCumRap === item.maCumRap ? 'active' : null
                  }`}
                  onClick={setHandleCumRap.bind(null, item)}
                  key={index}
                >
                  <img src={item.hinhAnh} alt="movie" />
                  <div>
                    <p className="nameMovie">{item.tenCumRap}</p>
                    <p className="subNameMovie">
                      {item.diaChi?.slice(0, 51)}......
                    </p>
                  </div>
                </div>
              )
            })}
          </motion.div>
          <motion.div
            variants={loadingScheduleVariants}
            initial="hidden"
            animate="visible"
            key={filerMaCumRap}
            className="homeBooking__schedule desktop"
          >
            <HomeBookingSchedule danhSachPhim={arrDanhSachPhim} />
          </motion.div>
        </div>
      </div>
    </Warrper>
  )
}

const Warrper = styled.div`
  padding-top: 7rem;

  width: 90%;
  margin: 0 auto;
  max-width: var(--max-width);
  .homeBooking {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 2rem;
    overflow: hidden;
    border: 2px solid var(--color-gray-800);
    margin: 0 3rem;
    .homeBooking__cineplexLogo {
      display: block;
      height: 42rem;
      border-bottom: none;
      border-right: 1px solid var(--color-gray-800);
      img {
        width: 4rem;
        height: auto;
        border-radius: var(--radius);
      }

      .homeBooking__logo--item {
        position: relative;
        padding: 20px;
        /* height: 7rem; */
        transition: var(--transition);
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
  .homeBooking__main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: start;
    .homeBooking__cineplex {
      overflow-y: hidden;
      height: 42rem;
      &:hover {
        overflow-y: auto;
      }
      .homeBooking__cineplex--item {
        display: flex;
        gap: 1rem;
        position: relative;
        cursor: pointer;
        padding: 20px;
        /* margin: 1rem 0; */
        /* height: 7rem; */
        opacity: 0.5;
        img {
          width: 4rem;
          height: 4rem;
        }
        &:before {
          content: '';
          position: absolute;
          /* right: -4rem; */
          right: 0;
          bottom: -42rem;
          height: 10000rem;
          /* width: 2rem; */
          transform: rotateX('45deg');
          border: 1px solid var(--color-gray-800);
          background-color: var(--color-gray-800);
        }

        &:after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0;
          height: 2px;
          min-width: calc(100% - 5rem);
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
    }
  }
`
