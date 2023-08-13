// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';
import '../../../config/config.env';
const API = process.env.NEXT_PUBLIC_API_HOME;

/** 某商家活动广告位列表 GET /adlocation/activityAdList */
export async function activityAdListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.activityAdListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultListAdInfoVo_>(`${API}/adlocation/activityAdList`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 广告位名字列表 GET /adlocation/adNameList */
export async function adNameListUsingGET(options?: { [key: string]: any }) {
  return request<API.ResultListAdLocationEntity_>(`${API}/adlocation/adNameList`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 删除广告位 DELETE /adlocation/delete */
export async function deleteUsingDELETE1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETE1Params,
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/adlocation/delete`, {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 广告位列表 GET /adlocation/list */
export async function listUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.ResultListAdInfoVo_>(`${API}/adlocation/list`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 添加广告位 POST /adlocation/save */
export async function saveUsingPOST1(body: API.AdLocationEntity, options?: { [key: string]: any }) {
  return request<API.Result>(`${API}/adlocation/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改广告位 POST /adlocation/update */
export async function updateUsingPOST1(
  body: API.AdLocationEntity,
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/adlocation/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
