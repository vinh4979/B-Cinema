import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layDanhSachPhim } from 'src/redux/actions/QuanLyPhimAction'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper/core'
import MovieCard from './MovieCard'
import { loadingVariants, today } from 'src/utils/constants'

// install Swiper modules
SwiperCore.use([Navigation])

const Container = styled.div`
  /* display: block; */

  padding-top: 7rem;
  width: 90%;
  margin: 0 auto;

  .mySwiper {
    z-index: 100;
    max-width: var(--max-width);
    .swiper-button-prev,
    .swiper-button-next {
      display: block;
      width: 5rem;
      height: 5rem;
      color: var(--color-white);
      z-index: 200;
      visibility: visible;
      top: 50%;
      
    }

    .swiper-button-prev {
      left: 0rem;
      transform: translate(0, -50%);
      
    }

    .swiper-button-next {
      right: 0rem;
      transform: translate(50%, -50%);
    }
  }
  }
  .movie_list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1.5rem;
    margin: 0 3rem;
    /* background-color: white; */
  }
`
const Button = styled.button`
  display: block;
  margin: 0 5rem;
  text-transform: uppercase;
  padding: 1rem 1rem;
  letter-spacing: var(--spacing);
  color: var(--color-white);
  border: 1px solid #343a40;
  cursor: pointer;
  border-radius: var(--radius);
  box-shadow: 0 10px 20px -6px rgb(0 0 0 / 12%);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  &:hover {
    color: #fff;
    background: #343a40;
    border-color: #343a40;
  }
`
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`
const ButtonToggle = styled(Button)`
  ${({ active }) =>
    active &&
    `color: #fff;
    background: #343a40;
    border-color: #343a40;
  `};
`
// button
const typeButton = ['NOW SHOWING', 'COMNING SOON']

export default function MovieList() {
  const { arrMovieList } = useSelector(state => state.QuanLyPhimReducer)
  const MovieList =
    arrMovieList?.filter(item => new Date(item.ngayKhoiChieu) > today()) || []

  const dispatch = useDispatch()

  const [active, setActive] = useState(typeButton[0])

  useEffect(() => {
    const action = layDanhSachPhim()
    dispatch(action)
  }, [dispatch])

  const renderMovie = () => {
    if (active === 'NOW SHOWING') {
      return (
        <>
          <SwiperSlide>
            <div className="movie_list">
              {MovieList.slice(24, 24 + 8).map(item => {
                return <MovieCard movie={item} key={item.maPhim} />
              })}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="movie_list">
              {MovieList.slice(8, 16).map(item => {
                return <MovieCard movie={item} key={item.maPhim} />
              })}
            </div>
          </SwiperSlide>
        </>
      )
    } else if (active === 'COMNING SOON') {
      return (
        <>
          <SwiperSlide>
            <div className="movie_list">
              {MovieList.slice(0, 8).map(item => {
                return <MovieCard movie={item} key={item.maPhim} />
              })}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="movie_list">
              {MovieList.slice(16, 16 + 8).map(item => {
                return <MovieCard movie={item} key={item.maPhim} />
              })}
            </div>
          </SwiperSlide>
        </>
      )
    }
  }

  return (
    <motion.section
      variants={loadingVariants}
      initial="hidden"
      animate="visible"
      id="homePage__movieList"
    >
      <Container>
        <ButtonGroup>
          {typeButton.map((item, index) => {
            return (
              <ButtonToggle
                key={index}
                active={active === item}
                onClick={() => {
                  setActive(item)
                }}
              >
                {item}
              </ButtonToggle>
            )
          })}
        </ButtonGroup>
        <Swiper
          spaceBetween={30}
          centeredSlides
          navigation
          className="mySwiper"
        >
          {renderMovie()}
        </Swiper>
      </Container>
    </motion.section>
  )
}
