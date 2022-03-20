import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import { loadingVariants, loadingVariants3 } from 'src/utils/constants'
import AlertModal from '../components/AlertModal'
import { useDispatch, useSelector } from 'react-redux'
import userImg from 'src/assets/img/user.png'
import ProfileUpdate from '../components/Profile.component/ProfileUpdate'
import ProfileContent from '../components/Profile.component/ProfileContent'
import { ThongTinTaiKhoanAction } from 'src/redux/actions/QuanLyNguoiDungAction'
import ProfileTransaction from '../components/Profile.component/ProfileTransaction'

export default function ProfilePage() {
  const dispatch = useDispatch()
  const { isModalShow, message, type, message2, goTo } = useSelector(
    state => state.ModalReducer
  )

  const userProfile = useSelector(
    state => state.QuanLyNguoiDungReducer.userLogin
  )

  const { thongTinTaiKhoan } = useSelector(
    state => state.QuanLyNguoiDungReducer
  )

  useEffect(() => {
    dispatch(ThongTinTaiKhoanAction(userProfile.taiKhoan))
  }, [dispatch, userProfile.taiKhoan])

  const [isProfileUpdate, setIsProfileUpdate] = useState(false)
  const [isContinue, setIsContinue] = useState(false)

  // console.log('profile', userLogin)
  return (
    <Wrapper className="page-95">
      <motion.div variants={loadingVariants} initial="hidden" animate="visible">
        <AnimatePresence>
          {isModalShow && (
            <div>
              {/* eslint-disable */}
              <div className="backdrop" />
              {/* eslint-enable */}

              <AlertModal
                message={message}
                goTo={goTo}
                type={type}
                message2={message2}
              />
            </div>
          )}
        </AnimatePresence>
        <div className="profile section-center">
          <h1>Hi, {userProfile.hoTen} </h1>
          <img src={userImg} alt="userPicture" className="profile__picture" />
          <div className="profile__update">
            <button
              type="button"
              className="btn2"
              onClick={() => {
                setIsProfileUpdate(state => !state)
              }}
            >
              {isProfileUpdate ? 'Go Back' : 'Update/Change your profile'}
            </button>
          </div>
          <AnimatePresence>
            <motion.div
              variants={loadingVariants3}
              initial="hidden"
              animate="visible"
              exit={{
                x: -200,
                opacity: 0,
                transition: {
                  duration: 0.8
                }
              }}
              key={isProfileUpdate}
            >
              {isProfileUpdate && (
                <div className="profile__main">
                  <ProfileUpdate />
                </div>
              )}
              {!isProfileUpdate && (
                <div className="profile__main">
                  <ProfileContent userProfile={userProfile} />
                  <hr />
                  <ProfileTransaction
                    thongTinDatVe={thongTinTaiKhoan.thongTinDatVe?.slice(0, 2)}
                  />
                  <AnimatePresence>
                    <motion.div
                      variants={loadingVariants3}
                      initial="hidden"
                      animate="visible"
                      exit={{ x: 200, opacity: 0 }}
                      key={isContinue}
                    >
                      {isContinue && (
                        <ProfileTransaction
                          thongTinDatVe={thongTinTaiKhoan.thongTinDatVe?.slice(
                            2
                          )}
                        />
                      )}{' '}
                    </motion.div>{' '}
                  </AnimatePresence>
                </div>
              )}
            </motion.div>{' '}
          </AnimatePresence>
          {thongTinTaiKhoan.thongTinDatVe?.length > 2 && (
            <div className="profile__update profile__readMore">
              <button
                type="button"
                className="btn2"
                onClick={() => {
                  setIsContinue(state => !state)
                }}
              >
                {isContinue ? 'Thu Gọn' : 'More history purchase...'}
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 7rem 0 0;
  h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
  }
  .profile {
    .profile__picture {
      margin: 2rem auto 1rem;
      width: 8rem;
      border-radius: 50%;
    }
    .profile__update {
      display: flex;
      justify-content: center;
      .btn2 {
        padding: 1rem;
        font-size: 1rem;
      }
    }
    .profile__readMore {
      margin: 2rem auto;
    }
  }
  hr {
    border-top: 3px solid var(--color-gray-800);
    padding: 0.5rem 0;
  }
  @media screen and (min-width: 768px) {
    padding: 7rem 0 0;
    .profile__main {
      margin: 0 10rem;
    }
  }
`
