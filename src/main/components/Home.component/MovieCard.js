import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FaPlay } from 'react-icons/fa'
import MovieClass from './MovieClass'
import { randomDuration } from 'src/utils/helper'
import { history } from 'src/App'
import { useDispatch } from 'react-redux'
import { OPEN_MODAL_TRAILER } from 'src/redux/types/type'

export default function MovieCard({ movie }) {
  const dispatch = useDispatch()

  return (
    <Container>
      <MovieCardImage>
        <FaPlay
          className="playVideo"
          onClick={() => {
            dispatch({
              type: OPEN_MODAL_TRAILER,
              isTrailerShow: true,
              trailer: movie.trailer
            })
          }}
        />
        <MovieCardBooking className="movieCardBooking">
          <div
            onClick={() => {
              history.push(`/detail/${movie.maPhim}`)
            }}
            to={`/detail/${movie.maPhim}`}
            className="btn-watching"
          >
            Available Now
          </div>
        </MovieCardBooking>
        <Link to="/">
          <Overlay className="overlay" />
          <CardImg movie={movie}>
            <Image src={movie.hinhAnh} />
          </CardImg>
        </Link>
      </MovieCardImage>
      <MovieCardDetail>
        <NameMovie>
          <Link to="">
            <MovieClass checkClass={movie.tenPhim?.length % 2 === 0} />
            {movie.tenPhim}
          </Link>
        </NameMovie>
        <SubNameMovie>{randomDuration()} minutes</SubNameMovie>
      </MovieCardDetail>
    </Container>
  )
}

const Container = styled.div`
  /* display: block;
  background-color: red;
  height: 100px; */
`

const MovieCardImage = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 0.5rem;
  .playVideo {
    position: absolute;
    height: 3rem;
    width: 3rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: var(--transition);
    cursor: pointer;
    z-index: 2;
    fill: white;
    &:hover {
      fill: var(--color-gray-600);
    }
  }
  &:hover {
    .overlay,
    .movieCardBooking,
    .playVideo {
      opacity: 1;
    }
  }
`
const Image = styled.img`
  display: block;
  width: 100%;
  height: 20rem;
  opacity: 0;
`

const CardImg = styled.div`
  background-image: url(${props => props.movie.hinhAnh});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 1;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(to top, #000, transparent 100%);
  opacity: 0;
  z-index: 1;
  transition: var(--transition);
  cursor: pointer;
`

const MovieCardBooking = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  opacity: 0;
  z-index: 2;
  transition: var(--transition);
  .btn-watching {
    text-transform: uppercase;
    background: var(--color-redNetflix);
    color: var(--color-gray-100);
    padding: 0.75rem 1rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 600;
    transition: var(--transition);
    font-size: 1rem;
    cursor: pointer;
    border-radius: var(--radius);
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: rgba(221, 0, 63, 0.5);
      border-color: transparent;
      color: #fff;
    }
  }
`

const MovieCardDetail = styled.div``
const NameMovie = styled.div``
const SubNameMovie = styled.div``
