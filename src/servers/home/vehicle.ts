// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';
import '../../../config/config.env';
const API = process.env.NEXT_PUBLIC_API_HOME;

/** Web商品删除PK展示 DELETE /web/vehicle/delete */
export async function deleteUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/web/vehicle/delete`, {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** Web商品详情展示 GET /web/vehicle/details */
export async function details(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.detailsParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultProductDetailVO_>(`${API}/web/vehicle/details`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 首页获取分类及icon GET /web/vehicle/getCategory */
export async function getCategory(options?: { [key: string]: any }) {
  return request<API.ResultListProductTypeVO_>(`${API}/web/vehicle/getCategory`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取筛选条件 GET /web/vehicle/getCondition */
export async function getCondition(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getConditionParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/web/vehicle/getCondition`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** Web商品详情(收藏夹需要接口) GET /web/vehicle/getDetail */
export async function getDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDetailParams,
  options?: { [key: string]: any },
) {
  return request<API.FavoriteProductDetailVO>(`${API}/web/vehicle/getDetail`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** Web商品添加PK展示详情 GET /web/vehicle/getPkDetails */
export async function getPkDetails(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPkDetailsParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultProductPKVO_>(`${API}/web/vehicle/getPkDetails`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取商品列表 GET /web/vehicle/getProducts */
export async function getProductsUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProductsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.PageInfoActivityProductVo_>(`${API}/web/vehicle/getProducts`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** Web商品详情中的细分市场条件查询 GET /web/vehicle/getSkusByMarket */
export async function getSkusByMarket(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSkusByMarketParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultProductSkuVO_>(`${API}/web/vehicle/getSkusByMarket`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** Web商品类型详情展示 GET /web/vehicle/infos */
export async function infos(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.infosParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultProductSkuVO_>(`${API}/web/vehicle/infos`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** Web商品列表展示 POST /web/vehicle/list */
export async function list(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listParams,
  body: API.SecreeDTO,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageInfoVehicleVO_>(`${API}/web/vehicle/list`, {
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

/** 展示筛选条件 GET /web/vehicle/listConditions */
export async function listConditions(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listConditionsParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultListTemplateParamVO_>(`${API}/web/vehicle/listConditions`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询热销商品 GET /web/vehicle/recom */
export async function recom(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.recomParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultPageInfoProductRecommendVO_>(`${API}/web/vehicle/recom`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** Web商品添加PK POST /web/vehicle/savePK */
export async function savePK(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.savePKParams,
  options?: { [key: string]: any },
) {
  return request<API.Result>(`${API}/web/vehicle/savePK`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据skuId修改促销价 POST /web/vehicle/updateByProductPrice */
export async function updateByProductPriceUsingPOST(
  body: API.PromotionPriceDto[],
  options?: { [key: string]: any },
) {
  return request<boolean>(`${API}/web/vehicle/updateByProductPrice`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
