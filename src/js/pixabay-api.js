import axios from 'axios';

export async function getImg(inputValue, currentPage) {
    axios.defaults.baseURL = "https://pixabay.com/api/";
    const API_KEY = "43042666-e07e8410a021eff335b7f491d";
    const params = {
        key: API_KEY,
        q: inputValue,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: currentPage,
        per_page: 15
    };
 
    const res = await axios.get('', { params: params });
      return res.data;
}


