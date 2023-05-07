export const setCityInLocalStorage = (name: string) => {
  localStorage.setItem('lastCity', name)
}

export const getCityInLocalStorage = () => {
  const name = localStorage.getItem('lastCity')

  return name
}

export const removeCityInLocalStorage = () => {
  localStorage.removeItem('lastCity')
}
