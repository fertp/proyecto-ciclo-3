import axios from "axios";

const url = "http://localhost:4000/api/products/";

const getProducts = () => {
  return axios.get(url);
};

export default {
  getProducts,
};
