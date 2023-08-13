// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';
import '../../../config/config.env';
const API = process.env.NEXT_PUBLIC_API_HOME;

/** （远行销售系统请求添加商品接口） add POST /api/requestThird/add */
export async function addGoodsUsingPOST(
  body: API.RequestThirdDataDTO,
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/api/requestThird/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** （远行销售系统请求更新商品接口） update PUT /api/requestThird/update */
export async function updateGoodsUsingPUT(
  body: API.RequestThirdDataDTO,
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/api/requestThird/update`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** （远行销售系统请求上下架商品接口） updateIsUpBySpuId PUT /api/requestThird/updateIsUpBySpuId */
export async function updateIsUpBySpuIdUsingPUT(
  body: API.RequestUpDTO,
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/api/requestThird/updateIsUpBySpuId`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
