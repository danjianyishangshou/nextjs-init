// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';
import '../../../config/config.env';
const API = process.env.NEXT_PUBLIC_API_HOME;

/** 门店管理-删除门店 DELETE /zc/serviceShop/deleteShop */
export async function getLocalShops(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getLocalShopsParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/zc/serviceShop/deleteShop`, {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 下单前选择中策轮胎服务门店 GET /zc/serviceShop/getLocalShops */
export async function getLocalShops1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getLocalShops1Params,
  options?: { [key: string]: any },
) {
  return request<API.ResultBaseQueryDataZcServiceShopVO_>(`${API}/zc/serviceShop/getLocalShops`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 门店管理-获取策轮胎服务门店列表 GET /zc/serviceShop/listShops */
export async function listShops(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listShopsParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultBaseQueryDataZcServiceShopEntity_>(`${API}/zc/serviceShop/listShops`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 门店管理-保存策轮胎服务门店列表 POST /zc/serviceShop/saveShop */
export async function getLocalShops2(
  body: API.ZcServiceShopSaveDTO,
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/zc/serviceShop/saveShop`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
