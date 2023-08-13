// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';
import '../../../config/config.env';
const API = process.env.NEXT_PUBLIC_API_HOME;

/** 删除广告信息 DELETE /ad/delete */
export async function deleteUsingDELETE(body: number[], options?: { [key: string]: any }) {
  return request<API.Result>(`${API}/ad/delete`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 广告信息 GET /ad/info */
export async function infoByAdLocationUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.infoByAdLocationUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultListAdVo_>(`${API}/ad/info`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 广告信息 GET /ad/info/${param0} */
export async function infoUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.infoUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ResultAdEntity_>(`${API}/ad/info/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 广告信息 GET /ad/infoByActivityId */
export async function infoByActivityIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.infoByActivityIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultListAdEntity_>(`${API}/ad/infoByActivityId`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据活动id获取某个活动的广告信息 GET /ad/infos */
export async function infosUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.infosUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultListAdInfoDTO_>(`${API}/ad/infos`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 广告信息 GET /ad/list */
export async function listUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageInfoAdEntityVo_>(`${API}/ad/list`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 广告信息 GET /ad/listByMerchantId */
export async function listByMerchantIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listByMerchantIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultListAdEntity_>(`${API}/ad/listByMerchantId`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存广告信息 POST /ad/save */
export async function saveUsingPOST(body: API.AdEntity, options?: { [key: string]: any }) {
  return request<API.Result>(`${API}/ad/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** test GET /ad/test */
export async function adTestUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.adTestUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/ad/test`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 修改广告信息 POST /ad/update */
export async function updateUsingPOST(body: API.AdEntity, options?: { [key: string]: any }) {
  return request<API.Result>(`${API}/ad/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改广告使用状态 POST /ad/updateBatchState */
export async function updateBatchStateUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateBatchStateUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<boolean>(`${API}/ad/updateBatchState`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 修改广告使用状态 POST /ad/updateInfo */
export async function updateInfoUsingPOST(body: API.AdInfoDTO[], options?: { [key: string]: any }) {
  return request<boolean>(`${API}/ad/updateInfo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据广告id修改广告使用状态（批量修改） POST /ad/updateIsUse */
export async function updateIsUseUsingPOST(body: API.AdUseDto[], options?: { [key: string]: any }) {
  return request<boolean>(`${API}/ad/updateIsUse`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改广告使用状态 POST /ad/updateState */
export async function updateStateUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateStateUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<boolean>(`${API}/ad/updateState`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
