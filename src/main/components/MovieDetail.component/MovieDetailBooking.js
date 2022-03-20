import React, { useState } from 'react'
import styled from 'styled-components'
import BookingTable from './BookingTable'

export default function MovieDetailBooking({ logoRap, movieDetail }) {
  const [cinema, setCinema] = useState('BHDStar')

  const chosenCinama = data => {
    setCinema(data.maHeThongRap)
  }

  console.log('choosen', cinema)

  return (
    <Wrapper>
      {/* eslint-disable */}
      <main className="section-middle">
        <div className="booking">
          <h5 className="booking__title">CHOOSING CINEMAS</h5>
          <div className="booking__cinema">
            {logoRap.map((item, index) => {
              return (
                <div
                  key={index}
                  className="booking__cinema--main"
                  onClick={chosenCinama.bind(null, item)}
                >
                  <img src={item.logo} alt="cinema" />
                  <div
                    className={`${
                      cinema === item.maHeThongRap
                        ? 'active__cinema'
                        : 'overlay'
                    }`}
                  />
                </div>
              )
            })}
          </div>
          {/* Booking  */}
          <div className="booking__table">
            <BookingTable movie={movieDetail} cinema={cinema} />
          </div>
        </div>
      </main>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 5rem;
  .booking__title {
    font-size: 1.5rem;
    text-align: center;
    margin: 5rem 0;
    color: var(--color-white);
  }
  .booking__cinema {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    .booking__cinema--main {
      position: relative;
      .overlay {
        width: 67%;
        border-radius: 50%;
        opacity: 1;
        background: rgba(0, 0, 0, 0.8);
      }
    }
    .active__cinema {
      &:after {
        content: '';
        position: absolute;
        bottom: -1rem;
        height: 2px;
        width: 100%;
        right: 1rem;
        background-color: #fb4226;
        box-shadow: 0 -4px 10px 1px #fb4226;
      }
    }
    img {
      width: 4rem;
      height: auto;
      border-radius: 50%;
      /* margin: 0 auto; */
      margin-right: 2rem;
    }
  }
  @media screen and (min-width: 768px) {
    .booking__cinema {
      img {
        width: 5rem;
        height: 5rem;
      }
      .booking__cinema--main {
        position: relative;
        .overlay {
          width: 72%;
          border-radius: 50%;
          opacity: 1;
          background: rgba(0, 0, 0, 0.8);
        }
      }
    }

    .booking__title {
      font-size: 2rem;
    }
  }
`
