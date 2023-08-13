// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';
import '../../../config/config.env';
const API = process.env.NEXT_PUBLIC_API_HOME;

/** 分类查看上下级 check GET /op/check */
export async function checkUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.checkUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/op/check`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 属性列表 checkAttrList GET /op/checkAttrList */
export async function checkAttrListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.checkAttrListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageInfoTempParamVO_>(`${API}/op/checkAttrList`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分类属性列表 checkCategoryList GET /op/checkCategoryList */
export async function checkCategoryListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.checkCategoryListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageInfoCateGoryAttrVO_>(`${API}/op/checkCategoryList`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 统计用户数据 collectingUserData GET /op/collectingUserData */
export async function collectingUserDataUsingGET(options?: { [key: string]: any }) {
  return request<API.ResultUserDataVO_>(`${API}/op/collectingUserData`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 删除分类 delete DELETE /op/delete */
export async function deleteUsingDELETE4(body: number[], options?: { [key: string]: any }) {
  return request<API.Result>(`${API}/op/delete`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除属性 deleteAttr DELETE /op/deleteAttr */
export async function deleteAttrUsingDELETE(body: number[], options?: { [key: string]: any }) {
  return request<API.Result>(`${API}/op/deleteAttr`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 业务使用占比 getBusinessSum GET /op/getBusinessSum */
export async function getBusinessSumUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getBusinessSumUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultListDealVO_>(`${API}/op/getBusinessSum`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 交易统计 getDealData GET /op/getDealData */
export async function getDealDataUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDealDataUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultAmountStatisticsVo_>(`${API}/op/getDealData`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 交易统计展示详情 getDealDataInfo GET /op/getDealDataInfo */
export async function getDealDataInfoUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDealDataInfoUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultAmountStatisticsVo_>(`${API}/op/getDealDataInfo`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 交易金额统计 getDealSumData GET /op/getDealSumData */
export async function getDealSumDataUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDealSumDataUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultListDealSumVO_>(`${API}/op/getDealSumData`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 表格数据（业务趋势图） getFormData GET /op/getFormData */
export async function getFormDataUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getFormDataUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultListFormDataVO_>(`${API}/op/getFormData`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 商城销售数据 getMallSales GET /op/getMallSales */
export async function getMallSalesUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMallSalesUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultMallSalesDataVO_>(`${API}/op/getMallSales`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 商城商品热度排行榜 getFormData GET /op/getProductHits */
export async function getProductHitsUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProductHitsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageInfoProductHistVo_>(`${API}/op/getProductHits`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 注册用户数量占比 getRegisteredUsersData GET /op/getRegisteredUsersData */
export async function getRegisteredUsersDataUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRegisteredUsersDataUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultListDealVO_>(`${API}/op/getRegisteredUsersData`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 业务趋势图数据 getTrendsData GET /op/getTrendsData */
export async function getTrendsDataUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTrendsDataUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultListOperationComDataVO_>(`${API}/op/getTrendsData`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分类列表 list POST /op/list */
export async function listUsingPOST1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUsingPOST1Params,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageInfoCategoryListsVO_>(`${API}/op/list`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增分类/更新分类 save POST /op/save */
export async function saveUsingPOST4(body: API.CategoryDTO, options?: { [key: string]: any }) {
  return request<API.Result>(`${API}/op/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑属性/添加属性 updateAttr PUT /op/updateAttr */
export async function updateAttrUsingPUT(
  body: API.CategoryAttrDTO,
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/op/updateAttr`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑分类属性 updateCategoryAttr PUT /op/updateCategoryAttr */
export async function updateCategoryAttrUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateCategoryAttrUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/op/updateCategoryAttr`, {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
