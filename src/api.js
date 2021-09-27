const url = "@/productos.json";

const getProducts = () => {
  return fetch(url)
    .then((res) => res.json())
    .then((res) => res.data);
};

export default {
  getProducts,
};
