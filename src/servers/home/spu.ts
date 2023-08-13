// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';
import '../../../config/config.env';
const API = process.env.NEXT_PUBLIC_API_HOME;

/** 查看商品 check GET /spu/check */
export async function checkUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.checkUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.ResultSpuInfoVO_>(`${API}/spu/check`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 批量删除（回收站批量删除） delete DELETE /spu/delete */
export async function deleteUsingDELETE8(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETE8Params,
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/spu/delete`, {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 商品参数删除接口 getSkuList DELETE /spu/deleteByParamId */
export async function deleteByParamIdUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteByParamIdUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/spu/deleteByParamId`, {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取商品属性数组接口 getAttributes GET /spu/getAttributes */
export async function getAttributesUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAttributesUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/spu/getAttributes`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 订单批量获取商品数据 getBatchProductData GET /spu/getBatchProductData */
export async function getBatchProductDataUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getBatchProductDataUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultListBatchProductVO_>(`${API}/spu/getBatchProductData`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取商家分类历史记录 getCategoryHistory GET /spu/getCategoryHistory */
export async function getCategoryHistoryUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCategoryHistoryUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultSet_>(`${API}/spu/getCategoryHistory`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 统计商品数量 getNums GET /spu/getNums */
export async function getNumsUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getNumsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultStatisticsVO_>(`${API}/spu/getNums`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 配置参数获取sku参数详情及相册数据 getParam GET /spu/getParam */
export async function getParamUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getParamUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultProductParamDataVO_>(`${API}/spu/getParam`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 订单获取商城数据接口 getProductData GET /spu/getProductData */
export async function getProductDataUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProductDataUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultListAttributeDto_>(`${API}/spu/getProductData`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 通过商品名称、商品货号获取商品详情 getProductInfo GET /spu/getProductInfo */
export async function getProductInfoUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProductInfoUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultListProductInfoVO_>(`${API}/spu/getProductInfo`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询spu商品是否在促销中 getPromotionFlag GET /spu/getPromotionFlag */
export async function getPromotionFlagUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPromotionFlagUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultBoolean_>(`${API}/spu/getPromotionFlag`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 订单查询国五车商品详情 getProductInfo GET /spu/geTruckInfo */
export async function geTruckInfoUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.geTruckInfoUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultOrderTruckShowVo_>(`${API}/spu/geTruckInfo`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** SKU列表管理 getSkuList GET /spu/getSkuList */
export async function getSkuListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSkuListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageInfoSkuListVO_>(`${API}/spu/getSkuList`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取spu数据 getSpuById GET /spu/getSpuById */
export async function getSpuByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSpuByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultSpuInfoVO_>(`${API}/spu/getSpuById`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 商品编辑回显（spu编辑回显） selectInfo GET /spu/info */
export async function selectInfoUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.selectInfoUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultMerchandiseVO_>(`${API}/spu/info`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** spu(商品列表)列表 list POST /spu/list */
export async function listUsingPOST3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUsingPOST3Params,
  body: API.SpuDTO,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageInfoSpuVO_>(`${API}/spu/list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 商品添加（spu添加） save POST /spu/save */
export async function saveUsingPOST8(body: API.MerchandiseDTO, options?: { [key: string]: any }) {
  return request<API.Result>(`${API}/spu/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑 update PUT /spu/update */
export async function updateUsingPUT1(body: API.MerchandiseDTO, options?: { [key: string]: any }) {
  return request<API.Result>(`${API}/spu/update`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 回收站批量还原 updateRestoreBySpuId PUT /spu/updateRestoreBySpuId */
export async function updateRestoreBySpuIdUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateRestoreBySpuIdUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/spu/updateRestoreBySpuId`, {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** SKU上下架 updateUpBySkuId PUT /spu/updateUpBySkuId */
export async function updateUpBySkuIdUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateUpBySkuIdUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/spu/updateUpBySkuId`, {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 商品上下架 updateUpBySpuId PUT /spu/updateUpBySpuId */
export async function updateUpBySpuIdUsingPUT(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateUpBySpuIdUsingPUTParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/spu/updateUpBySpuId`, {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
