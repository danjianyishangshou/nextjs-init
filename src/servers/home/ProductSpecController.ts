// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';
import '../../../config/config.env';
const API = process.env.NEXT_PUBLIC_API_HOME;

/** 商品中含有的spec GET /product/spec/getIncludeSpec */
export async function getIncludeSpecUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getIncludeSpecUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultListLong_>(`${API}/product/spec/getIncludeSpec`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 商品规格参数列表 POST /product/spec/list */
export async function listUsingPOST2(body: API.SpecKeyValueVo, options?: { [key: string]: any }) {
  return request<API.ResultListSpecVo_>(`${API}/product/spec/list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 商品规格参数入库 GET /product/spec/test */
export async function testUsingGET(options?: { [key: string]: any }) {
  return request<API.ResultBoolean_>(`${API}/product/spec/test`, {
    method: 'GET',
    ...(options || {}),
  });
}
