// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';
import '../../../config/config.env';
const API = process.env.NEXT_PUBLIC_API_HOME;

/** 删除sku delete DELETE /sku/delete */
export async function deleteUsingDELETE5(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETE5Params,
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/sku/delete`, {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** app获取某活动下的所有商品 getActivityGoods GET /sku/getActivityGoods */
export async function getActivityGoodsUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getActivityGoodsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultActivityGoodsVo_>(`${API}/sku/getActivityGoods`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** app获取活动专区下的所有商品 getActivityZoneGoods GET /sku/getActivityZoneGoods */
export async function getActivityZoneGoodsUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getActivityZoneGoodsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultBaseQueryDataGoodsVo_>(`${API}/sku/getActivityZoneGoods`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
