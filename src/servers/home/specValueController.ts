// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';
import '../../../config/config.env';
const API = process.env.NEXT_PUBLIC_API_HOME;

/** delete DELETE /spec/value/delete */
export async function deleteUsingDELETE7(body: number[], options?: { [key: string]: any }) {
  return request<API.Result>(`${API}/spec/value/delete`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** info GET /spec/value/info/${param0} */
export async function infoUsingGET5(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.infoUsingGET5Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Result>(`${API}/spec/value/info/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** save POST /spec/value/save */
export async function saveUsingPOST7(body: API.SpecValueEntity, options?: { [key: string]: any }) {
  return request<API.Result>(`${API}/spec/value/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** update POST /spec/value/update */
export async function updateUsingPOST6(
  body: API.SpecValueEntity,
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/spec/value/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
