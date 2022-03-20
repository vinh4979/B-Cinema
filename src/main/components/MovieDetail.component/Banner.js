import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaPlay } from 'react-icons/fa'
import { loadingVariants } from 'src/utils/constants'
import { useDispatch } from 'react-redux'
import { OPEN_MODAL_TRAILER } from 'src/redux/types/type'

export default function Banner({ movie }) {
  const dispatch = useDispatch()
  return (
    <motion.section
      variants={loadingVariants}
      initial="hidden"
      animate="visible"
    >
      <Wrapper>
        <div className="movieCard__img">
          <FaPlay
            className="playVideo"
            onClick={() => {
              dispatch({
                type: OPEN_MODAL_TRAILER,
                isTrailerShow: true
              })
            }}
          />
          <div className="overlay" />
          <div className="banner">
            <div
              className="banner__img"
              style={{ backgroundImage: `url(${movie.hinhAnh})` }}
            />
          </div>
        </div>
      </Wrapper>
    </motion.section>
  )
}

const Wrapper = styled.section`
  .banner {
    border-radius: var(--radius);
    z-index: 120;
    .banner__img {
      background-attachment: fixed;
      width: 100%;
      height: 30vh;
      background-position: center center;
      background-repeat: repeat;
    }
  }
  .movieCard__img {
    position: relative;
    overflow: hidden;
    &:hover .playVideo {
      opacity: 1;
    }
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
        opacity: 1;
        fill: var(--color-gray-600);
      }
    }
    .overlay {
      opacity: 1;
      background: linear-gradient(
        to top,
        var(--color-bg),
        rgba(10, 32, 41, 0.25)
      );
    }
    img {
      cursor: pointer;
    }
  }
  @media screen and (min-width: 700px) {
    .banner {
      .banner__img {
        height: 70vh;
      }
    }
  }
`
