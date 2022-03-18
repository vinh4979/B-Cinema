import React from 'react'
import styled from 'styled-components'
import { FaPlay } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { converDate, randomDuration, randomNumber } from 'src/utils/helper.js'
import imdbLogo from 'src/assets/img/imdb-logo.png'

import { movieDetailContent, loadingVariants } from '../../../utils/constants'
import MovieClass from '../Home.component/MovieClass'
import { OPEN_MODAL_TRAILER } from 'src/redux/types/type'

export default function MovieInfo({ movie }) {
  const dispatch = useDispatch()
  return (
    <motion.section
      variants={loadingVariants}
      initial="hidden"
      animate="visible"
    >
      <Wrapper>
        <div className="section-middle">
          <div className="movieInfor__top">
            <img src={movie.hinhAnh} alt="" className="movieInfor__banner" />
            <ButtonMovie
              className="movieInfor__booking"
              onClick={() => {
                dispatch({
                  type: OPEN_MODAL_TRAILER,
                  isTrailerShow: true
                })
              }}
            >
              <FaPlay />
              <span>TRAILER</span>
            </ButtonMovie>
          </div>
          <div className="movieInfor__bottom">
            <h5 className="title"> {movie.tenPhim} (2020)</h5>
            <p className="subtitle__meta">
              <MovieClass />
              {randomDuration()} minutes
            </p>
            <div className="subtitle__imdb">
              <div>
                <img src={imdbLogo} alt="" />
              </div>
              <div className="subtitle__meta">
                <span className="subtitle__meta">{randomNumber()} ++</span>
              </div>
            </div>
            <div className="movieInfor__detail">
              {movieDetailContent.map((item, index) => (
                <p className="movieInfor__detail--item" key={index}>
                  <span className="subtitle">{item.title}</span>
                  <span className="subtitle__detail">{item.content}</span>
                </p>
              ))}
              <p className="movieInfor__detail--item">
                <span className="subtitle">Release date: </span>
                <span className="subtitle__detail">
                  {converDate(movie.ngayKhoiChieu)}
                </span>
              </p>
              <p className="movieInfor__detail--item">
                <span className="subtitle">Overview: </span>
              </p>
              <p className="subtitle__detail--content">{movie.moTa}</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </motion.section>
  )
}

const ButtonMovie = styled.div`
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
`
const Wrapper = styled.main`
  position: relative;
  margin-top: 2rem;
  /* banner */

  .movieInfor__banner {
    width: 80%;
    height: auto;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  .movieInfor__booking {
    width: 100%;
    svg {
      margin-right: 1rem;
    }
  }
  /* title */
  .subtitle__imdb {
    img {
      width: 3rem;
      height: 3rem;
    }
  }

  .subtitle__meta {
    color: var(--color-title);
    letter-spacing: var(--spacing);
    /* span {
      margin-left: 1rem;
    } */
  }
  .subtitle {
    color: var(--color-white);
    letter-spacing: var(--spacing);
  }
  .title {
    font-size: 2rem;
    padding: 0.5rem 0;
  }
  .subtitle__detail {
    font-size: 1rem;
    color: var(--color-title);
  }
  .movieInfor__detail {
    .movieInfor__detail--item {
      margin-top: 1rem;

      display: grid;
      grid-template-columns: 200px 1fr;
    }
    .subtitle__detail--content {
      font-size: 1rem;
      color: var(--color-title);
      padding: 0.5rem 0;
    }
  }
  /* sharing btn */

  .movieInfor__sharing {
    .movieInfor__sharing--btn {
      display: flex;
      justify-content: center;
      font-size: 0.75rem;
      svg {
        width: 1rem;
        height: 1rem;
        margin-right: 0.5rem;
      }
      button {
        background-color: var(--color-facebook);
        padding: 0.5rem 1rem;
        text-transform: none;
        &:hover {
          background-color: rgb(35, 84, 161, 0.5);
        }
      }
      .btn__save {
        background-color: #3ec46d;
        margin: 1rem 0;
        &:hover {
          background-color: rgba(63, 190, 107, 0.5);
        }
      }
    }
  }
  @media screen and (min-width: 700px) {
    margin-top: -10rem;
    z-index: 130;
    .section-middle {
      display: grid;
      grid-template-columns: 400px 1fr;
      gap: 2rem;
    }
    .title {
      font-size: 3rem;
    }
    .subtitle {
      font-size: 1.25rem;
    }
    /* sharing bntn */
    .movieInfor__sharing {
      display: flex;
      margin-top: 1rem;
      .movieInfor__sharing--btn {
        button {
          font-size: 1.25rem;
        }
        .btn__save {
          margin: 0;
          margin-right: 1rem;
        }
      }
    }
    .movieInfor__booking {
      width: 80%;
      margin: 0 auto;
    }
  }
`
