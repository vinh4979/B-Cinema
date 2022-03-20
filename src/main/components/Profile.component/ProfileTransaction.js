import React from 'react'
import styled from 'styled-components'
import schedule from 'src/assets/img/movie.png'
import { getCinemaLogo } from 'src/utils/constants'
import moment from 'moment'

export default function ProfileTransaction({ thongTinDatVe }) {
  return (
    <Warrper>
      <div className="transaction">
        {thongTinDatVe?.map((item, index) => {
          return (
            <div key={index}>
              <img
                src={schedule}
                alt="schedule"
                className="transaction__icon"
              />
              <div className="transaction__item">
                <div>
                  <div>
                    <p>
                      Ticket Code:
                      <span className="highlight"> {item.maVe}</span>
                    </p>
                    <p>
                      Movie: <span className="highlight"> {item.tenPhim}</span>
                    </p>
                    <p>
                      Booking Date:
                      <span className="highlight__seat date">
                        {moment(item.ngayDat).format('llll')}
                      </span>
                      <span className="highlight__seat">--</span>
                      <span className="highlight__seat timeFormNow">
                        {moment(item.ngayDat).startOf('day').fromNow()}
                      </span>
                    </p>
                    <p>
                      Price: <span className="highlight"> {item.giaVe} đ</span>
                    </p>
                    <div className="transaction__seat">
                      Seat:{' '}
                      {item.danhSachGhe.map(i => (
                        <div>
                          {getCinemaLogo(i.maHeThongRap)}
                          <div>
                            <p className="highlight">{i.tenHeThongRap}</p>
                            <p className="highlight">|| Seat {i.tenGhe}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="transasction__qrCode">
                  <img
                    src={`https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${item.maVe}&choe=UTF-8`}
                    alt="qrCode"
                    // onLoad={() => setIsImgLoading(true)}
                    className="desktop"
                  />{' '}
                  {/* <img
                    src={`https://chart.googleapis.com/chart?chs=500x200&cht=qr&chl=${item.maVe}&choe=UTF-8`}
                    alt="qrCode"
                    onLoad={() => setIsImgLoading(true)}
                    className="mobile"
                  /> */}
                  {/* {!isImgLoading && <CircleLoading />} */}
                  <p>
                    {/* {isImgLoading ? 'QR CODE FOR TICKET' : 'GENERATING QR CODE'} */}
                    QR CODE FOR TICKET
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Warrper>
  )
}

const Warrper = styled.div`
  .transaction__icon {
    display: none;
  }

  .transaction__item {
    p {
      font-size: 1.25rem;
      padding: 0.5rem 0;
    }
    .highlight {
      font-size: 1.25rem;
      color: var(--color-choosingSeat);
    }
    .highlight__seat {
      font-size: 1.25rem;
      color: var(--color-redNetflix);
    }
    .date {
      padding: 0 1rem;
    }
    .timeFormNow {
      text-transform: uppercase;
      padding: 0 1rem;
    }
    .transaction__seat {
      font-size: 1.25rem;
      img {
        margin: 1rem 0;
        width: 2.5rem;
      }
      div {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }
    .transasction__qrCode {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        /* width: 5rem; */
        /* height: 5rem; */
        margin-bottom: 0.25rem;
      }
    }
  }
  .desktop {
    display: none;
  }

  @media screen and (min-width: 576px) {
    .desktop {
      display: block;
    }
    .mobile {
      display: none;
    }
    .transaction__icon {
      display: block;
      height: 100%;
      width: 6rem;
      /* padding-bottom: 1rem; */
      margin: 0 auto;
    }

    .transaction__item {
      display: grid;
      grid-template-columns: 2fr 1fr;
      align-items: center;
      gap: 1rem;
      .transasction__qrCode {
        img {
          width: 50%;
        }
      }
    }
  }
`
