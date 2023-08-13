// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';
import '../../../config/config.env';
const API = process.env.NEXT_PUBLIC_API_HOME;

/** 清空所有浏览记录 deleteAll DELETE /browse/deleteAll */
export async function deleteAllUsingDELETE(options?: { [key: string]: any }) {
  return request<API.Result>(`${API}/browse/deleteAll`, {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** 清空浏览记录 deleteBatch DELETE /browse/deleteBatch */
export async function deleteBatchUsingDELETE(body: number[], options?: { [key: string]: any }) {
  return request<API.Result>(`${API}/browse/deleteBatch`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取用户浏览记录 list POST /browse/list */
export async function listUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultListBrowseVO_>(`${API}/browse/list`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
