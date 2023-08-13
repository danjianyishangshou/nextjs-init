// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';
import '../../../config/config.env';
const API = process.env.NEXT_PUBLIC_API_HOME;

/** 删除商家 DELETE /merchant/delete */
export async function deleteUsingDELETE3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETE3Params,
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/merchant/delete`, {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /merchant/getInfo */
export async function getInfo(options?: { [key: string]: any }) {
  return request<API.ResultMerchantEntity_>(`${API}/merchant/getInfo`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 商家信息 GET /merchant/info/${param0} */
export async function infoUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.infoUsingGET1Params,
  options?: { [key: string]: any },
) {
  const { merchantId: param0, ...queryParams } = params;
  return request<API.ResultMerchantEntity_>(`${API}/merchant/info/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 商家列表 GET /merchant/list */
export async function listUsingGET2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUsingGET2Params,
  options?: { [key: string]: any },
) {
  return request<API.ResultListMerchantEntity_>(`${API}/merchant/list`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 商家列表（包含商家联系人） GET /merchant/listByMerchant */
export async function listByMerchantUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listByMerchantUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageInfoMerchantDTO_>(`${API}/merchant/listByMerchant`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存商家信息 POST /merchant/save */
export async function saveUsingPOST2(body: API.MerchantDTO, options?: { [key: string]: any }) {
  return request<API.Result>(`${API}/merchant/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改商家信息 POST /merchant/update */
export async function updateUsingPOST2(body: API.MerchantDTO, options?: { [key: string]: any }) {
  return request<API.Result>(`${API}/merchant/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
