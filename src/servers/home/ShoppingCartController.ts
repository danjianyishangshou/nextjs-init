// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';
import '../../../config/config.env';
const API = process.env.NEXT_PUBLIC_API_HOME;

/** 添加多个商品到购物车 POST /shoppingcart/addGoodsList */
export async function addGoodsListUsingPOST(
  body: API.ShoppingCartSkuIdDTO[],
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/shoppingcart/addGoodsList`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量删除商品 DELETE /shoppingcart/batchDelete */
export async function batchDeleteUsingDELETE(
  body: API.ShoppingCartDTO[],
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>(`${API}/shoppingcart/batchDelete`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据用户ID删除 DELETE /shoppingcart/deleteByUserId */
export async function deleteByUserIdUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteByUserIdUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>(`${API}/shoppingcart/deleteByUserId`, {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取商品价格新接口 GET /shoppingcart/getNewPrice */
export async function getNewPriceUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getNewPriceUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>(`${API}/shoppingcart/getNewPrice`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取商品价格 POST /shoppingcart/getPrice */
export async function getPriceUsingPOST(
  body: API.SpecKeyValueVo,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>(`${API}/shoppingcart/getPrice`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 通过用户ID查询购物车 GET /shoppingcart/info */
export async function infoUsingGET3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.infoUsingGET3Params,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>(`${API}/shoppingcart/info`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 添加 POST /shoppingcart/save */
export async function saveUsingPOST5(body: API.ShoppingCartDTO, options?: { [key: string]: any }) {
  return request<Record<string, any>>(`${API}/shoppingcart/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改 POST /shoppingcart/update */
export async function updateUsingPOST4(body: API.ShoppingCartVO, options?: { [key: string]: any }) {
  return request<API.ResultShoppingCartDTO_>(`${API}/shoppingcart/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
