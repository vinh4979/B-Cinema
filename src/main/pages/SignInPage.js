import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { rules } from 'src/utils/rules'
import { Link } from 'react-router-dom'
import Logo from 'src/assets/img/logo-full.png'
import bgImage from 'src/assets/img/bg-singin.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { dangNhapAction } from 'src/redux/actions/QuanLyNguoiDungAction'
import { AnimatePresence, motion } from 'framer-motion'
import AlertModal from '../components/AlertModal'
import { loadingVariants } from 'src/utils/constants'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
      // width: '25ch'
    }
  }
}))

export default function SignInPage() {
  const dispatch = useDispatch()
  const { isModalShow, message, type, message2, goTo } = useSelector(
    state => state.ModalReducer
  )

  // material ui
  const classes = useStyles()

  // react-hook-form
  const {
    control,
    handleSubmit,
    getValues,
    setError,
    formState: { errors }
  } = useForm({
    defaultValue: {
      email: '',
      password: ''
    }
  })

  // get data user
  const handleLogin = data => {
    const body = {
      taiKhoan: data.email,
      matKhau: data.password
    }
    dispatch(dangNhapAction(body))
  }

  return (
    <motion.section
      variants={loadingVariants}
      initial="hidden"
      animate="visible"
    >
      <Wrapper>
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
                isModalShow={isModalShow}
              />
            </div>
          )}
        </AnimatePresence>
        <div className="page-100">
          <div className="signIn">
            <img src={Logo} alt="logo cinema" />
            <h5>JOIN US NOW</h5>
            <div className="signIn_form">
              <form className={classes.root}>
                <div className="formControl">
                  <Controller
                    name="email"
                    control={control}
                    rules={rules.email}
                    render={({ field }) => (
                      <TextField
                        variant="filled"
                        color="secondary"
                        // id="standard-basic"
                        label="Username"
                        name="email"
                        onChange={field.onChange}
                        value={getValues('email')}
                        className="signIn__input"
                        required
                      />
                    )}
                  />
                </div>
                <div className="formControl">
                  <Controller
                    name="password"
                    control={control}
                    rules={rules.password}
                    render={({ field }) => (
                      <TextField
                        variant="filled"
                        color="secondary"
                        // id="standard-basic"
                        label="Password"
                        className="signIn__input"
                        name="password"
                        onChange={field.onChange}
                        value={getValues('password')}
                        required
                        type="password"
                      />
                    )}
                  />
                </div>
                <div className="signIn__button">
                  <button
                    onClick={handleSubmit(handleLogin)}
                    type="submit"
                    className="btn__watching"
                  >
                    Login
                  </button>
                  <p className="signUp">
                    Don't have an account?
                    <Link to="/signup">Sign up now. </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Wrapper>
    </motion.section>
  )
}

const Wrapper = styled.div`
  background-image: url(${bgImage});
  position: relative;
  .page-100 {
    height: 100vh;
  }
  .signIn {
    position: absolute;
    width: 30rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 45%);
    color: #fff;
    border-radius: 6px;
    padding: 2rem;


    img {
      margin: 0 auto;
      max-width: 100px;
    }
    h5 {
      font-size: 1.25rem;
      padding: 1rem;
      text-align: center;
    }
  }

  .signIn_form {
    .signIn__button {
      width: 100%;
      margin: 2rem auto;
      .btn__watching {
        text-transform: none;
        width: 100%;
        padding: 1rem 1rem;
        font-size: 1.25rem;
      }
    }

    .signIn__input {
    display: block;
    margin: 0 auto;
    width: 100%;
    margin-top: 2rem;
    background-color: rgba(160, 160, 160, 0.2);
    .MuiInputBase-root {
      width: 100%;
    }
    label {
      font-size: 1rem;
      color: var(--color-white);
    }
    input {
      color: var(--color-white);
      font-size: 1.5rem;
      width: 100%;
    }
  }
  .signUp {
    padding-top: 1rem;
    a {
      color: var(--color-title);
      &:hover {
        text-decoration: underline;
      }
    }
  }
  @media screen and (min-width: 576px) {
    .signIn {
      width: 30rem;
    }
  }
  @media screen and (min-width: 1200px) {
    .page-100 {
      height: 100vh;
    }
  }
`
