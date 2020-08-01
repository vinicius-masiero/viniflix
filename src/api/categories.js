import config from '../config/config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categories`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`).then(async (response) => {
    if (response.ok) {
      const responseJson = await response.json();
      return responseJson;
    }
    throw new Error('Error getting data.');
  });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (response) => {
    if (response.ok) {
      const responseJson = await response.json();
      return responseJson;
    }
    throw new Error('Error getting data.');
  });
}

export default {
  getAll, getAllWithVideos
};