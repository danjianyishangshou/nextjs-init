// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';
import '../../../config/config.env';
const API = process.env.NEXT_PUBLIC_API_HOME;

/** add 新增品牌 POST /brand/add */
export async function addUsingPOST(body: API.BrandDTO, options?: { [key: string]: any }) {
  return request<API.Result>(`${API}/brand/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** alterShow 修改是否显示 PUT /brand/alterShow */
export async function alterShowUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.alterShowUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/brand/alterShow`, {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** delete 删除品牌数据 DELETE /brand/delete */
export async function deleteUsingDELETE2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETE2Params,
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/brand/delete`, {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getGroupSort 获取分组排序 GET /brand/getGroupSort */
export async function getGroupSortUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getGroupSortUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/brand/getGroupSort`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getInfo 获取品牌详情 GET /brand/getInfo */
export async function getInfoUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getInfoUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultBrandEntity_>(`${API}/brand/getInfo`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getList 获取品牌列表 GET /brand/list */
export async function getListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageInfoBrandVO_>(`${API}/brand/list`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** update 修改品牌数据 PUT /brand/update */
export async function updateUsingPUT(body: API.BrandDTO, options?: { [key: string]: any }) {
  return request<API.Result>(`${API}/brand/update`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
