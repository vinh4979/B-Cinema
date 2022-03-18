import cgv from 'src/assets/img/cinema/cinema-picture/cgv.png'
import bhd from 'src/assets/img/cinema/cinema-picture/bhd.png'
import lotte from 'src/assets/img/cinema/cinema-picture/lotte.png'
import megaGs from 'src/assets/img/cinema/cinema-picture/megaGs.png'
import cinestart from 'src/assets/img/cinema/cinema-picture/cinestart.jpg'
import galaxy from 'src/assets/img/cinema/cinema-picture/galaxy.jpg'

import logobhd from 'src/assets/img/cinema/bhd-star-cineplex.png'
import logocgv from 'src/assets/img/cinema/cgv.png'
import logocinestart from 'src/assets/img/cinema/cinestar.png'
import logogalaxy from 'src/assets/img/cinema/galaxy-cinema.png'
import logolotte from 'src/assets/img/cinema/lotte-cinema.png'
import logomegaGs from 'src/assets/img/cinema/megags.png'

import {
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin
} from 'react-icons/fa'

// Nav bar part
export const navBarLink = [
  {
    id: '1',
    title: 'HOME',
    path: '#homepage',
    goTo: '/home'
  },
  // {
  //   id: '2',
  //   title: 'NEWS',
  //   path: '#homePage__news',
  //   goTo: '/home'
  // },
  {
    id: '2',
    title: 'MOVIES',
    path: '#homePage__movieList',
    goTo: '/home'
  },
  {
    id: '3',
    title: 'BOOKING',
    path: '#homePage__booking',
    goTo: '/home'
  }
]

export const today = (minusDay = 11) => {
  const toDay = new Date()
  toDay.setMonth(toDay.getMonth() - minusDay)
  return toDay
}

export const loadingVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1
    }
  }
}

export const loadingVariants2 = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8
    }
  }
}

export const loadingVariants3 = {
  hidden: {
    opacity: 0,
    x: 200
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 }
  }
}

export const loadingVariants4 = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

export const exitVariants = {
  opacity: 0,
  x: -200,
  y: 0,
  transition: { duration: 0.5 }
}

export const movieDetailContent = [
  {
    id: 1,
    title: 'Directors: ',
    content: 'Anthony RussoJoe, Joe Russo'
  },

  {
    id: 1,
    title: 'Stars: ',
    content: 'Scarlett Johansson, Chris Evans, Mark Ruffalo, Chris Hem,...'
  },
  {
    id: 1,
    title: 'Genres: ',
    content: 'Action, Thriller, Crime'
  },
  {
    id: 1,
    title: 'Technology: ',
    content: '2D/Digitals'
  }
]

export const mapCGV = <img src={cgv} alt="movie" />
export const mapLotte = <img src={lotte} alt="movie" />
export const mapBHD = <img src={bhd} alt="movie" />
export const mapCineStar = <img src={cinestart} alt="movie" />
export const mapGalaxy = <img src={galaxy} alt="movie" />
export const mapMegaGS = <img src={megaGs} alt="movie" />

export const getCinema = cinema => {
  if (cinema === 'CGV') {
    return mapCGV
  }
  if (cinema === 'LotteCinima') {
    return mapLotte
  }
  if (cinema === 'BHDStar') {
    return mapBHD
  }
  if (cinema === 'CineStar') {
    return mapCineStar
  }
  if (cinema === 'Galaxy') {
    return mapGalaxy
  }
  if (cinema === 'MegaGS') {
    return mapMegaGS
  }
}

// logo Cinema

export const logoCGV = <img src={logocgv} alt="movie" />

export const logoLotte = <img src={logolotte} alt="movie" />
export const logoBHD = <img src={logobhd} alt="movie" />
export const logoCineStar = <img src={logocinestart} alt="movie" />
export const logoGalaxy = <img src={logogalaxy} alt="movie" />

export const logoMegaGS = <img src={logomegaGs} alt="movie" />

export const getCinemaLogo = cinema => {
  if (cinema === 'CGV') {
    return logoCGV
  }
  if (cinema === 'LotteCinima') {
    return logoLotte
  }
  if (cinema === 'BHDStar') {
    return logoBHD
  }
  if (cinema === 'CineStar') {
    return logoCineStar
  }
  if (cinema === 'Galaxy') {
    return logoGalaxy
  }
  if (cinema === 'MegaGS') {
    return logoMegaGS
  }
}

// Footer part

export const footerCompany = [
  {
    id: 1,
    title: 'Company',
    content:
      'N-Cinema is one of the worlds leading entertainment services with over 0.001 million paid memberships in over 1 countries enjoying our theatres services'
  }
]
export const importantLinks = [
  {
    id: 1,
    text: 'Important Links',
    link: [
      {
        id: 1,
        title: 'Home',
        to: '/home'
      },
      {
        id: 2,
        title: 'About us',
        to: ''
      },
      {
        id: 3,
        title: 'Contact',
        to: ''
      }
    ]
  },
  {
    id: 2,
    text: 'Frequent Question',
    link: [
      {
        id: 1,
        title: 'Account?',
        to: ''
      },
      {
        id: 2,
        title: 'Personal Private?',
        to: ''
      },
      {
        id: 3,
        title: 'Opportunity',
        to: ''
      }
    ]
  }
]

export const socials = [
  {
    id: 1,
    text: 'fb',
    url: 'https://www.facebook.com/thanhnhan99s/',
    image: <FaFacebookSquare />
  },
  {
    id: 2,
    text: 'git',
    url: 'https://github.com/ngtn0502',
    image: <FaGithubSquare />
  },
  {
    id: 3,
    text: 'git',
    url: 'https://github.com/ngtn0502',
    image: <FaTwitterSquare />
  },
  {
    id: 4,
    text: 'git',
    url: 'https://github.com/ngtn0502',
    image: <FaLinkedin />
  }
]
