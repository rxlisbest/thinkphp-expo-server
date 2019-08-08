import axios from 'axios'

var HOST_URL = function () {
  var port = location.port;
  var hostUrl = "http://";

  if (port == 80) {
    hostUrl += location.hostname;
  } else {
    hostUrl += location.host;
  }

  return hostUrl;
}();
// create an axios instance
const service = axios.create({
  baseURL: HOST_URL, // url = base url + request url
  timeout: 5000 // request timeout
})

export default service