// Fake api value of movie length and IMDB

export const randomDuration = () =>
  Math.trunc(Math.random() * (200 - 120) + 120)

export const randomNumber = () => Math.trunc(Math.random() * (8 - 5) + 5)

export const converDate = data => {
  const date = new Date(data)
  return date.toLocaleDateString()
}

// Conver UTC date string to DAY and MONTH
const days = [
  'Saturday',
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday'
]
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export const getDay = date => days[date.getDay()]
export const getMonth = date => months[date.getMonth()]

export const isEmail = value =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  )
