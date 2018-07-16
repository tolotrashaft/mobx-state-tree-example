import axios from 'axios'

export const getCharacters = async function () {
  try {
    let response = await axios.get('http://hp-api.herokuapp.com/api/characters')
    return response.data
  } catch (e) {
    return []
  }
}
