import axios from "axios";

// Products

const url = "http://localhost:4000/api/";

const getProducts = () => {
  return axios.get(`${url}products/`);
};

const getProduct = (id) => {
  return axios.get(`${url}products/show/${id}`);
};

const getProductBySlug = (slug) => {
  return axios.get(`${url}products/show/slug/${slug}`);
};

const getProductsByQuery = (query) => {
  return axios.get(`${url}products/search/${query}`);
};

const getProductsByCategory = (id) => {
  return axios.get(`${url}products/category/${id}`);
};

const storeProduct = (product) => {
  return axios.post(`${url}products/store`, product);
};

const updateProduct = (id, product) => {
  return axios.put(`${url}products/update/${id}`, product);
};

const deleteProduct = (id) => {
  return axios.delete(`${url}products/delete/${id}`);
};

// Categories

const getCategories = () => {
  return axios.get(`${url}categories/`);
};

const storeCategory = (category) => {
  return axios.post(`${url}categories/store`, category);
};

const updateCategory = (id, category) => {
  return axios.put(`${url}categories/update/${id}`, category);
};

const deleteCategory = (id) => {
  return axios.delete(`${url}categories/delete/${id}`);
};

// Files

const storeFile = (formData) => {
  return axios.post(`${url}images/store`, formData)
}

//login

const userLogin = (user) => {
  return axios.post(`${url}users/login`, user);
};

export default {
  // products
  getProducts,
  getProduct,
  getProductBySlug,
  getProductsByQuery,
  getProductsByCategory,
  storeProduct,
  updateProduct,
  deleteProduct,
  // categories
  getCategories,
  storeCategory,
  updateCategory,
  deleteCategory,
  // file
  storeFile,
  // login
  userLogin,
};
