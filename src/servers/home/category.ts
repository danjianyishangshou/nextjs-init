// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';
import '../../../config/config.env';
const API = process.env.NEXT_PUBLIC_API_HOME;

/** 分类树形结构 GET /category/list */
export async function getCategoryList(options?: { [key: string]: any }) {
  return request<API.ResultListCategoryVO_>(`${API}/category/list`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取分类下的筛选项 GET /category/screenItem */
export async function getScreenItem(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getScreenItemParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultListTemplateParamVO_>(`${API}/category/screenItem`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
