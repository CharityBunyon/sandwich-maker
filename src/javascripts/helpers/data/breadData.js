import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;


const getBreads = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/breads.json`)
    .then((response) => {
      const theBreads = response.data;
      const breads = [];
      Object.keys(theBreads).forEach((fbId) => {
        theBreads[fbId].id = fbId;
        breads.push(theBreads[fbId]);
      });
      resolve(breads); // hard code to only return first machine that comes back
    })
    .catch((error) => reject(error));
});


export default { getBreads };
