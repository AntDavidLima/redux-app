import { all, takeLatest, select, call, put } from 'redux-saga/effects';

import { addProductToCartSuccess, addProductToCartFailure } from './actions';

import api from '../../../services/api';

import ActionTypes from './types';

function* checkProductStock({payload}) {
  const { product } = payload;

  const currentQuantity = yield select(state => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
  });

  const avaliableStockResponse = yield call(api.get, `stock/${product.id}`);

  if(avaliableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product));
  } else {
    yield put(addProductToCartFailure(product.id));
  }
}

export default all([
  takeLatest(ActionTypes.addProductToCartRequest, checkProductStock)
]);