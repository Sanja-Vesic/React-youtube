
import axios from "axios";
const KEY = 'AIzaSyD9wReNDRA7ccrhNJl1gn7rkSZO129Qi_s';

 
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params:{
    part:'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video'

  }
});