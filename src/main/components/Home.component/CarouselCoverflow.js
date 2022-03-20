import React, { useEffect } from 'react'
import { carouselData } from 'src/utils/carouselData'
import { Carousel } from '3d-react-carousal'
import styled from 'styled-components'
import CarouselBackground from 'src/assets/img/bg-popcorn.jpg'
import { FaPlay } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { getCarouselAction } from 'src/redux/actions/CarouselActions'
import { history } from 'src/App'
import { OPEN_MODAL_TRAILER } from 'src/redux/types/type'

const SliderImg = styled.img`
  width: 60%;
  height: 500px;
  opacity: 0;
`
const CarouselSlider = styled.div`
  position: relative;
  .icon_play {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    color: var(--color-white);
    width: 5rem;
    height: 5rem;
    opacity: 0;
    z-index: 100;
    transition: var(--transition);
    &:hover {
      color: var(--color-gray-700);
    }
  }
  &:hover {
    .icon_play {
      opacity: 1;
    }
    .button-carousel {
      opacity: 1;
    }
  }
`
const CarouselBtn = styled.div`
  position: absolute;
  opacity: 0;
  bottom: 0;
  left: 50%;
  width: 100%;
  transform: translate(-50%, 100%);
  transition: var(--transition);
`
const Btn = styled.button`
  text-transform: uppercase;
  width: 100%;
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
const SliderItem = styled.div`
  /* display: block; */
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
`

const Section = styled.main`
  position: relative;
  .slider-left,
  .slider-right {
    font-size: 1.5rem;
  }
  .slider-single {
    display: flex;
    justify-content: center;
  }
  .proactive,
  .preactive {
    .slider-single-content {
      opacity: 0.7 !important;
    }
  }
  .react-3d-carousel .slider-container .slider-content {
    width: 80%;
  }
  .slider-single-content {
    width: 80% !important;
    box-shadow: 10px 10px 10px rgb(0 0 0 / 50%);
  }
  .slider {
    width: 500px;
    height: 450px;
  }
  .react-3d-carousel .slider-container .slider-left div,
  .react-3d-carousel .slider-container .slider-right div {
    padding: 1rem;
    border: none;
  }
`
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(to top, var(--color-bg), rgba(10, 32, 41, 0.25));
  opacity: 1;
  z-index: 1;
  transition: var(--transition);
  cursor: pointer;
`
const Container = styled.div`
  background-image: url(${CarouselBackground});
  background-attachment: fixed;
  height: 44rem;
`

const App = styled.div`
  position: relative;
  z-index: 20;
  padding-top: 10rem;
  padding-bottom: 5rem;
  /* background: red; */
`

export default function CarouselCoverflow() {
  const dispatch = useDispatch()

  // Ham lay data carousel banner tu api
  useEffect(() => {
    const action = getCarouselAction()
    dispatch(action)
  }, [dispatch])

  // setup carousel-item-banner
  let slides = [
    carouselData.slice(0).map(item => {
      return (
        <CarouselSlider key={item.maPhim}>
          <FaPlay
            className="icon_play"
            onClick={() => {
              dispatch({
                type: OPEN_MODAL_TRAILER,
                isTrailerShow: true,
                trailer: item.trailer
              })
            }}
          />
          <SliderItem style={{ backgroundImage: `url(${item.hinhAnh})` }}>
            <SliderImg src={item.hinhAnh} alt={item.tenPhim} />
          </SliderItem>
          <CarouselBtn className="button-carousel">
            <Btn
              onClick={() => {
                history.push(`/detail/${item.maPhim}`)
              }}
              type="button"
            >
              Available Now
            </Btn>
          </CarouselBtn>
        </CarouselSlider>
      )
    })
  ]

  return (
    <Section>
      <Overlay />
      <Container>
        <App>
          <Carousel slides={slides[0]} />
        </App>
      </Container>
    </Section>
  )
}
