import config from '../config/config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function createVideo(videoObj) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(videoObj)
  }).then(async (response) => {
    if (response.ok) {
      const responseJson = await response.json();
      return responseJson;
    }
    throw new Error('Error sending data.');
  });
}

export default {createVideo};