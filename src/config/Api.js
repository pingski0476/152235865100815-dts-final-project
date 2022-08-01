import axios from "axios";

const musixInstance = axios.create({
  baseURL: "https://api.musixmatch.com/ws/1.1/",
  params: {
    apikey: "97f6cf893659cad493cd1235fbb826a2",
  },
});

export default musixInstance;
