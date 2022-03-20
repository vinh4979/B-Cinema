import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layDanhSachHeThongRapAction } from 'src/redux/actions/QuanLyRapAction'
import styled from 'styled-components'
import { Tabs, Radio, Space } from 'antd'
import TableScrollbar from 'react-table-scrollbar'

const { TabPane } = Tabs

export default function HomeBooking() {
  const [state, setState] = useState({
    tabPosition: 'left'
  })

  const { tabPosition } = state
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(layDanhSachHeThongRapAction())
  }, [])

  const { arrHeThongRap } = useSelector(state => state.QuanLyRapReducer)

  const changeTabPosition = e => {
    setState({ tabPosition: e.target.value })
  }

  // render he thong rap chieu
  const renderHeThongRap = () => {
    return arrHeThongRap?.map((heThongRap, index) => {
      return (
        <TabPane
          key={index}
          className="tabPane_logo"
          tab={
            <div className="container">
              <img src={heThongRap.logo} alt="logo" className="logo" />
            </div>
          }
        >
          <Tabs tabPosition={tabPosition}>
            {heThongRap.lstCumRap?.map((cumRap, index) => {
              return (
                <TabPane
                  className="tabPane_lstPhim"
                  key={index}
                  tab={
                    <div className="tab_cumRap">
                      <div className="img_cumRap">
                        <img src={cumRap.hinhAnh} />
                      </div>
                      <did className="info_rap">
                        <h5>{cumRap.tenCumRap}</h5>
                        <p>{cumRap.diaChi?.slice(0, 50)}...</p>
                      </did>
                    </div>
                  }
                >
                  <Tabs tabPosition={tabPosition} className="lst-phim">
                    {cumRap.danhSachPhim?.map((danhSachPhim, index) => {
                      return (
                        <TabPane>
                          <div key={index}>
                            <div className="img_phim">
                              <img src={danhSachPhim.hinhAnh} />
                            </div>
                          </div>
                        </TabPane>
                      )
                    })}
                  </Tabs>
                </TabPane>
              )
            })}
          </Tabs>
        </TabPane>
      )
    })
  }
  return (
    <Wrapper>
      <Tabs tabPosition={tabPosition} className="tabs">
        {renderHeThongRap()}
      </Tabs>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* margin: 5rem auto; */
  padding-top: 3rem;
  .tabs {
    display: flex;
    background-color: rgba(300, 300, 300, 0.1);
    margin: 0 auto;
    width: 75vw;
    height: 40rem;
    border: 2px solid white;
    .ant-tabs-ink-bar.ant-tabs-ink-bar-animated,
    .ant-tabs-nav-operations.ant-tabs-nav-operations-hidden {
      display: none;
    }
    overflow: hidden;

    .container {
      display: flex;
      align-items: center;
      /* background-color: yellow !important; */
      padding-top: 2rem;
      .logo {
        width: 4rem;
        height: auto;
        /* border-radius: var(--radius); */
        /* border: 1px solid white; */
      }
    }
  }

  .tabPane_logo {
    /* background-color: blue !important; */
    display: block;
    width: auto;
    height: 40rem;
    /* overflow-y: scroll; */
    border-left: 2px solid white;
    /* &::-webkit-scrollbar {
      width: 5px;
      background-color: var(--color-gray-400);
      border-radius: var(--radius);
    } */
  }
  .tab_cumRap {
    /* background-color: yellow !important; */
    display: flex;
    margin: 2rem 1rem;

    .img_cumRap {
      img {
        width: 50px;
        height: 60px;
      }
      /* .info_cumRap {
        width: auto;
        height: 40rem;
        overflow-y: scroll;
        background-color: yellow !important;
      } */
    }
    .info_rap {
      ddisplay: flex;
      align-items: center;
      margin-left: 1rem;

      h5 {
        font-size: 1.5rem;
      }
      p {
        font-size: 12px;
      }
    }
  }
  .ant-tabs.ant-tabs-left {
    display: flex;
  }
  .img_phim {
    img {
      width: 50px;
      height: 60px;
    }
  }
  /* .tab_cumRap_container {
    overflow-y: scroll;
  } */
  /* .tab_lichChieu {
    background-color: green !important;
    display: block;
    width: 20rem;
    height: 40rem;
    overflow-y: scroll;
    border-left: 2px solid white;
  } */
  .tabPane_lstPhim {
    background-color: green !important;

    display: block;
    width: auto;
    height: 40rem;
    overflow-y: scroll;
    z-index: 22;
  }
`
