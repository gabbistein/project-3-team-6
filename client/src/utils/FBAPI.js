import axios from "axios";

const URL = "https://developers.facebook.com/apps";
const APIKEY =
  "EAAEtCg8wM5UBAEdfiv7CJV6oG94BZClKkVpoHi0MEKxL80uC2mHjH5JEsTQ4YR50PrwnZAWp9SEAHzcxT7YAZCovDPYvpEmvcc47EtQTHLaRXLjZCP3s3W7s6iGWvUWFjZB2LCW1OHQFkZCWjebxiJMZC43DUwLy8kM4zZBRonhurcRlAcZA1YbSdcxylH1G6N17VpiAhaOtygAZDZD";

const urlKey = URL + APIKEY;

export default {
  getFbData: function(query) {
    return axios.get(urlKey + `&q=${query}`);
  }
};
