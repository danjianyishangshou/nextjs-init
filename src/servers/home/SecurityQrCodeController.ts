// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';
import '../../../config/config.env';
const API = process.env.NEXT_PUBLIC_API_HOME;

/** 查询防伪码列表 GET /security/qrcode */
export async function listUsingGET4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUsingGET4Params,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageResultSecurityQrCodeVO_>(`${API}/security/qrcode`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 保存防伪码 POST /security/qrcode */
export async function saveQrCodeUsingPOST(
  body: API.SecurityQrCodeDTO,
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/security/qrcode`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除防伪码 DELETE /security/qrcode/${param0} */
export async function deleteQrCodeUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteQrCodeUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Result>(`${API}/security/qrcode/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 验证供应商防伪码 GET /security/qrcode/${param0}/${param1} */
export async function queryQrCodeUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryQrCodeUsingGETParams,
  body: string,
  options?: { [key: string]: any },
) {
  const { orgCode: param0, qrCode: param1, ...queryParams } = params;
  return request<API.Result>(`${API}/security/qrcode/${param0}/${param1}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
