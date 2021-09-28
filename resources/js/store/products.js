import { observable, makeObservable, action } from 'mobx';

class ProductsStore {
  list = [];

  getProducts = () =>
    axios.get('/api/v1/products').then((response) => {
      this.list = response.data;
    });

  getProductByID = (id) => axios.get(`/api/v1/products/${id}`);

  constructor() {
    makeObservable(this, {
      list: observable,
      getProducts: action,
      getProductByID: action,
    });
  }
}

export default new ProductsStore();
