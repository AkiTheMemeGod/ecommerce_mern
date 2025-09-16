import axios from "axios";

const BASE_URL = "http://localhost:5001/api";

const auth = axios.create({
  baseURL: `${BASE_URL}/auth`,
});

const cart = axios.create({
  baseURL: `${BASE_URL}/cart`,
});

const product = axios.create({
  baseURL: `${BASE_URL}/products`,
});

const order = axios.create({
  baseURL: `${BASE_URL}/order`,
});

export default { auth, cart, order, product };