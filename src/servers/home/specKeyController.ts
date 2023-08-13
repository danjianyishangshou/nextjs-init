// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';
import '../../../config/config.env';
const API = process.env.NEXT_PUBLIC_API_HOME;

/** delete DELETE /spec/key/delete */
export async function deleteUsingDELETE6(body: number[], options?: { [key: string]: any }) {
  return request<API.Result>(`${API}/spec/key/delete`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** info GET /spec/key/info/${param0} */
export async function infoUsingGET4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.infoUsingGET4Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Result>(`${API}/spec/key/info/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** save POST /spec/key/save */
export async function saveUsingPOST6(body: API.SpecKeyEntity, options?: { [key: string]: any }) {
  return request<API.Result>(`${API}/spec/key/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** update POST /spec/key/update */
export async function updateUsingPOST5(body: API.SpecKeyEntity, options?: { [key: string]: any }) {
  return request<API.Result>(`${API}/spec/key/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
