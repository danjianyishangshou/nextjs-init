// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';
import '../../../config/config.env';
const API = process.env.NEXT_PUBLIC_API_HOME;

/** 信息 GET /message/center/info/${param0} */
export async function infoUsingGET2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.infoUsingGET2Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Result>(`${API}/message/center/info/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 列表 GET /message/center/list */
export async function listUsingGET3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUsingGET3Params,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageInfoMessageCenterVo_>(`${API}/message/center/list`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存 POST /message/center/save */
export async function saveUsingPOST3(
  body: API.MessageCenterEntity,
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/message/center/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改 POST /message/center/update */
export async function updateUsingPOST3(
  body: API.MessageCenterEntity,
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/message/center/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
