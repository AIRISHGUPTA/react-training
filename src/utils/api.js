export const getMovies = () => {
  return fetch('http://www.mocky.io/v2/5acdd10232000057007768e0', {method:'get',headers : {'Authorization':'','Content-Type':'application/json'}})
    .then(
    res => res.json()
  )

}
