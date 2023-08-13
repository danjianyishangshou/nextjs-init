declare namespace API {
  type activityAdListUsingGETParams = {
    /** 商家Id */
    merchantId?: number;
  };

  type ActivityGoodsVo = {
    /** 活动标题 */
    activityTitle?: string;
    /** 商品信息 */
    goods?: GoodsVo[];
  };

  type ActivityProductVo = {
    /** 活动id */
    activityId?: number;
    /** 活动商品表id */
    activitySpuId?: number;
    /** 商品货号 */
    artNo?: string;
    /** 商品id */
    id?: number;
    isStore?: boolean;
    /** 限购数量 */
    limitedQuantity?: number;
    /** 商品名称 */
    name?: string;
    /** 商品价格 */
    price?: number;
    /** 促销价格 */
    promotionPrice?: number;
    /** 促销剩余总数量 */
    remainingQuantity?: number;
    /** 库存数量 */
    sctocks?: number;
    /** 促销总数量 */
    totalQuantity?: number;
  };

  type AdEntity = {
    /** 广告位置Id */
    adLocationId?: number;
    /** 创建人 */
    createBy?: string;
    /** 广告结束时间 */
    endTime?: string;
    /** 主键id */
    id?: number;
    /** 是否使用 */
    isUse?: number;
    /** 广告链接 */
    link?: string;
    /** 商家id */
    merchantId?: number;
    /** 广告上下架状态：1启动、0禁用 */
    online?: number;
    /** 广告位排序 */
    sort?: number;
    /** 广告开始时间 */
    startTime?: string;
    /** 广告是否开始状态：0未开始、1已开始、2已结束 */
    status?: number;
    /** 修改人 */
    updateBy?: string;
  };

  type AdEntityVo = {
    /** 活动ID */
    activityId?: number;
    /** 广告位置Id */
    adLocationId?: number;
    /** 创建人 */
    createBy?: string;
    /** 广告结束时间 */
    endTime?: string;
    /** 主键id */
    id?: number;
    /** 是否使用 */
    isUse?: number;
    /** 广告链接 */
    link?: string;
    /** 广告位置 */
    location?: string;
    /** 商家id */
    merchantId?: number;
    /** 广告商家 */
    merchantName?: string;
    /** 广告上下架状态：1启动、0禁用 */
    online?: number;
    /** 广告位排序 */
    sort?: number;
    /** 广告开始时间 */
    startTime?: string;
    /** 广告是否开始状态：0未开始、1已开始、2已结束 */
    status?: number;
    /** 修改人 */
    updateBy?: string;
  };

  type AdInfoDTO = {
    /** 活动id */
    activityId?: number;
    /** 活动入口图片 */
    entranceImg: string;
    /** 广告id */
    id: number;
    /** 是否使用 */
    isUse: number;
    /** 广告位置 */
    location: string;
    /** 广告位置Id */
    locationId: number;
    /** 广告图片尺寸 */
    size: string;
    /** 排序 */
    sort: number;
  };

  type AdInfoVo = {
    /** 主键id */
    id?: number;
    /** 主键id */
    location?: string;
    locations?: location[];
    /** 活动开始的最大时间 */
    maxTime?: string;
    /** 活动开始的最小时间 */
    minTime?: string;
    /** 广告位数量 */
    number?: number;
    /** 广告位尺寸 */
    size?: string;
    sort?: number[];
    /** 状态：1启用、0禁用 */
    status?: number;
  };

  type AdLocationEntity = {
    /** 主键id */
    id?: number;
    /** 主键id */
    location?: string;
    /** 广告位数量 */
    number?: number;
    /** 广告位尺寸 */
    size?: string;
    /** 状态：1启用、0禁用 */
    status?: number;
  };

  type adTestUsingGETParams = {
    /** ids */
    ids?: number;
    /** ttl */
    ttl?: number;
  };

  type AdUseDto = {
    /** 广告id */
    adId?: number;
    /** 广告是否使用 */
    isUse?: number;
  };

  type AdVo = {
    /** 活动结束时间 */
    activityEndTime: string;
    /** 活动Id */
    activityId?: number;
    /** 活动开始时间 */
    activityStartTime: string;
    activityStatus?: number;
    /** 广告位Id */
    adLocationId?: number;
    /** 广告图 */
    entranceImg?: string;
    /** 广告Id */
    id?: number;
    /** 访问链接 */
    link?: string;
    /** 排序 */
    sort?: number;
  };

  type alterShowUsingPUTParams = {
    /** 品牌id */
    id: number;
    /** 是否显示0：是显示，1：不显示 */
    isShow: number;
  };

  type AmountStatisticsVo = {
    /** 总交易金额 */
    allSum?: string;
    /** 同比 */
    basis?: string;
    /** 数据项 */
    dealVOS?: DealVO[];
    /** 环比 */
    linkRelativeRatio?: string;
  };

  type AttributeDto = {
    artNo?: string;
    attributeName?: string;
    attributeValue?: string;
    attributeValue1?: string;
    attributeValue2?: string;
    sctocks?: number;
  };

  type AttributeVO = {
    /** 属性名称 */
    attributeName: string;
    /** 属性值 */
    attributeValue: string;
  };

  type BaseQueryDataGoodsVo_ = {
    /** 当前页码 */
    current?: number;
    /** 列表数据 */
    records?: GoodsVo[];
    /** 当前页大小 */
    size?: number;
    /** 总条数 */
    total?: number;
  };

  type BaseQueryDataZcServiceShopEntity_ = {
    /** 当前页码 */
    current?: number;
    /** 列表数据 */
    records?: ZcServiceShopEntity[];
    /** 当前页大小 */
    size?: number;
    /** 总条数 */
    total?: number;
  };

  type BaseQueryDataZcServiceShopVO_ = {
    /** 当前页码 */
    current?: number;
    /** 列表数据 */
    records?: ZcServiceShopVO[];
    /** 当前页大小 */
    size?: number;
    /** 总条数 */
    total?: number;
  };

  type BatchProductVO = {
    /** 商品货号 */
    artNo: string;
    /** 属性值 */
    attributes: string[];
    bname?: string;
    /** 分类类目 */
    categoryName: string;
    /** 商品id */
    id: number;
    /** 上架1，下架2 */
    isUp: number;
    /** 商品名称 */
    name: string;
    /** 销量 */
    salesNum: number;
    /** 商品库存 */
    sctocks: number;
    skeyword?: string;
  };

  type BrandDTO = {
    /** 品牌简称 */
    brandAbbreviation: string;
    /** 品牌专区大图 */
    brandBigPath: string;
    /** 品牌故事 */
    brandStory: string;
    /** 品牌id */
    id: number;
    /** 是否显示0：是显示，1：不显示 */
    isShow: number;
    /** logo图片路径 */
    logoPath: string;
    /** 商家id */
    merchantId: number;
    /** 品牌名称 */
    name: string;
    /** 排序字段 */
    sort: number;
  };

  type BrandEntity = {
    /** 品牌简称 */
    brandAbbreviation: string;
    /** 品牌专区大图 */
    brandBigPath: string;
    /** 品牌故事 */
    brandStory: string;
    /** 创建人id */
    createBy: string;
    /** 创建时间 */
    createTime: string;
    /** 创建人 */
    creator: string;
    /** 主键id */
    id: number;
    /** 是否显示0：是显示，1：不显示 */
    isShow: number;
    /** logo图片路径 */
    logoPath: string;
    /** 商家id */
    merchantId: number;
    /** 品牌名称 */
    name: string;
    /** 排序字段 */
    sort: number;
    /** 更新时间 */
    updateTime: string;
  };

  type BrandVO = {
    /** 品牌简称 */
    brandAbbreviation: string;
    /** 相关 */
    correlation: number;
    /** 主键id */
    id: number;
    /** 是否显示0：是显示，1：不显示 */
    isShow: number;
    /** 商家id */
    merchantId: number;
    /** 品牌名称 */
    name: string;
    /** 排序字段 */
    sort: number;
  };

  type BrowseVO = {
    /** 日期 */
    day: string;
    /** 浏览数据 */
    list: BrowsingHistoryEntity[];
  };

  type BrowsingHistoryEntity = {
    /** 创建时间 */
    createTime: string;
    /** 日期 */
    dateTime: string;
    /** 主键 */
    id: number;
    /** 商品id */
    productId: number;
    /** 商品图片 */
    productImage: string;
    /** 商品名称 */
    productName: string;
    /** 商品价格 */
    productPrice: number;
    /** 商品类型1整车，2后市场 */
    type: number;
    /** 更新时间 */
    updateTime: string;
    /** 用户编号 */
    userCode: number;
  };

  type CategoryAttrDTO = {
    /** 属性可选参数值，多个以英文逗号分割 */
    attrValues?: string;
    /** 商品属性id */
    categoryId?: number;
    /** 编辑时用id */
    id?: number;
    /** 属性名称 */
    name?: string;
    /** 参数值类型(0:单选 1:多选 2:输入) */
    paramValueType?: number;
  };

  type CateGoryAttrVO = {
    /** 属性值数量 */
    attrNum: number;
    /** id */
    id: number;
    /** 分类名称 */
    name: string;
  };

  type CategoryDTO = {
    /** 图标地址 */
    icon?: string;
    /** 更新分类是传 */
    id?: number;
    /** 描述 */
    intr: string;
    /** 是否显示：默认为0不显示，1为显示 */
    isShow?: number;
    /** 类型等级 */
    level?: number;
    /** 类型名称 */
    name?: string;
    /** 参数模板ID */
    paramModeId?: number;
    pid?: number;
    /** 区分整车、后市场字段 */
    remark: string;
    skeyword?: string;
    /** 排序字段 */
    sort?: number;
  };

  type CategoryListsVO = {
    /** 图标地址 */
    icon: string;
    id: number;
    /** 描述 */
    intr: string;
    /** 是否显示：默认为0不显示，1为显示  */
    isShow: number;
    /** 类型等级 */
    level: number;
    /** 类型名称 */
    name: string;
    /** 模板id  */
    paramModeId: number;
    pid?: number;
    /** 描述 */
    remark: string;
    skeyword?: string;
    /** 排序 */
    sort: number;
  };

  type CategoryVO = {
    categoryVOS?: CategoryVO[];
    id: number;
    /** 类型等级 */
    level: number;
    /** 类型名称 */
    name: string;
    pid?: number;
  };

  type checkAttrListUsingGETParams = {
    /** 查询第几页 */
    pageNum?: number;
    /** 查询几条数据 */
    pageSize?: number;
    /** 分类属性id */
    id: number;
  };

  type checkCategoryListUsingGETParams = {
    /** 查询第几页 */
    pageNum?: number;
    /** 查询几条数据 */
    pageSize?: number;
  };

  type checkUsingGET1Params = {
    /** 商品id */
    spuId: number;
  };

  type checkUsingGETParams = {
    /** 分类id */
    id: number;
    /** 查看上级/下级 1->查看上级，2->查看下级,3->查看上下级 */
    up: number;
    /** 当前分类的等级 */
    level: number;
  };

  type DealSumVO = {
    /** 业务金额 */
    figure: number;
    /** 月份 */
    month: string;
    /** 业务名称 */
    name: string;
  };

  type DealVO = {
    /** 数量 */
    amount: string;
    /** 同比 */
    basis?: string;
    /** 环比 */
    linkRelativeRatio?: string;
    /** 业务名称 */
    name: string;
    /** 单数 */
    orderNum: string;
    /** 业务占比 */
    proportion: number;
    /** 金额 */
    sum: string;
  };

  type deleteByParamIdUsingDELETEParams = {
    /** 参数id */
    id: number;
  };

  type deleteByUserIdUsingDELETEParams = {
    /** userId */
    userId: string;
  };

  type deleteQrCodeUsingDELETEParams = {
    /** id */
    id: number;
  };

  type deleteUsingDELETE1Params = {
    /** 广告位Id */
    id: number;
  };

  type deleteUsingDELETE2Params = {
    /** 品牌id */
    id: number;
  };

  type deleteUsingDELETE3Params = {
    /** 商家Id */
    merchantId: number;
    /** 联系人Id */
    contactId: number[];
  };

  type deleteUsingDELETE5Params = {
    /** 品牌id */
    id: number;
  };

  type deleteUsingDELETE8Params = {
    /** 商品id */
    spuId: number[];
    /** 是否是回收站操作：1->是，0->否 */
    isRecycle: number;
  };

  type deleteUsingDELETEParams = {
    /** 用户id */
    userId?: string;
    /** 商品id */
    productId?: number;
  };

  type detailsParams = {
    /** 商品id */
    id?: number;
    /** userCode */
    userCode?: number;
    /** 商品spuId */
    spuId?: number;
  };

  type FavoriteProductDetailVO = {
    /** 商品id */
    id: number;
    /** 商品图片路径 */
    imageUrl: string;
    /** 是否删除 */
    isDelete: number;
    /** 商品名称 */
    name: string;
    /** 商品价格 */
    price: string;
    /** spuId */
    spuId: number;
    /** 商品状态(0:下架 1:销售中 2:待审核 3:审核通过 4:审核失败 5:仓库中) */
    state: number;
    /** 微信小程序商品状态(2:下架 1:上架) */
    wxAppletState: number;
  };

  type FirstStepDTO = {
    /** 分类id */
    categoryId: number;
    /** 分类名称 */
    categoryName: string;
    /** 图片id */
    fileId: number;
    /** 商品主图片路径 */
    filePath: string;
    /** 筛选参数1 */
    param1: string;
    /** 筛选参数2 */
    param2: string;
    /** 筛选参数3 */
    param3: string;
    /** 筛选参数4 */
    param4: string;
    /** 筛选参数5 */
    param5: string;
    /** 筛选参数6 */
    param6: string;
    /** 筛选参数7 */
    param7: string;
    /** 筛选参数8 */
    param8: string;
    /** 筛选参数9 */
    param9: string;
  };

  type FirstStepVO = {
    /** 分类id */
    categoryId: number;
    /** 分类名称 */
    categoryName: string;
    /** 图片id */
    fileId: number;
    /** 商品主图片路径 */
    filePath: string;
    /** 筛选参数1 */
    param1: string;
    /** 筛选参数2 */
    param2: string;
    /** 筛选参数3 */
    param3: string;
    /** 筛选参数4 */
    param4: string;
    /** 筛选参数5 */
    param5: string;
    /** 筛选参数6 */
    param6: string;
    /** 筛选参数7 */
    param7: string;
    /** 筛选参数8 */
    param8: string;
    /** 筛选参数9 */
    param9: string;
  };

  type FormDataVO = {
    /** 业务名称 */
    appName: string;
    /** 业务数据 */
    dataVOS: OperationComDataVO[];
  };

  type getActivityGoodsUsingGETParams = {
    /** 活动Id */
    activityId: number;
    /** 用户编号 */
    userCode?: number;
  };

  type getActivityZoneGoodsUsingGETParams = {
    /** 当前页码 */
    current?: number;
    /** 页大小 */
    size?: number;
  };

  type getAttributesUsingGETParams = {
    /** 商品（spuId）id */
    spuId: number;
  };

  type getBatchProductDataUsingGETParams = {
    /** 商品（skuid）ids */
    ids: number[];
  };

  type getBusinessSumUsingGETParams = {
    /** 时间 */
    time?: string;
    /** 开始时间 */
    startTime?: string;
    /** 结束时间 */
    endTime?: string;
  };

  type getCategoryHistoryUsingGETParams = {
    /** 商家id */
    merchantId: number;
  };

  type getConditionParams = {
    /** 传1获取车辆类型条件，2为驱动形式条件 */
    key: number;
  };

  type getDealDataInfoUsingGETParams = {
    /** 时间 */
    time?: string;
    /** 开始时间 */
    startTime?: string;
    /** 结束时间 */
    endTime?: string;
  };

  type getDealDataUsingGETParams = {
    /** 时间 */
    time?: string;
    /** 开始时间 */
    startTime?: string;
    /** 结束时间 */
    endTime?: string;
  };

  type getDealSumDataUsingGETParams = {
    /** 时间 */
    time?: string;
  };

  type getDetailParams = {
    /** 商品id */
    id?: number;
    /** 整车传1，后市场传2 */
    type?: number;
    /** 区分微信小程序还是app端 */
    isWxApplet?: boolean;
  };

  type getFormDataUsingGETParams = {
    /** 年份 */
    time?: string;
    /** 业务类型如：1为业务单数，2为业务金额，3为点击数，4为注册/申请数 */
    type?: number;
  };

  type getGroupSortUsingGETParams = {
    /** 商家id */
    merchantId: number;
  };

  type getIncludeSpecUsingGETParams = {
    /** valueId */
    valueId?: number;
  };

  type getInfoUsingGETParams = {
    /** 品牌id */
    id: number;
  };

  type getListUsingGETParams = {
    /** 查询第几页 */
    pageNum?: number;
    /** 查询几条数据 */
    pageSize?: number;
    /** name */
    name?: string;
    /** 商家id */
    merchantId?: number;
  };

  type getLocalShops1Params = {
    /** 分页参数-当前页码 */
    current?: number;
    /** 分页参数-页大小 */
    size?: number;
    /** 省 */
    province?: string;
    /** 城市 */
    city?: string;
    /** 区 */
    zone?: string;
    /** 店铺名：支持模糊查询 */
    shopName?: string;
    /** 商户号 */
    merchantId: string;
    /** 经度 */
    longitude?: string;
    /** 纬度 */
    latitude?: string;
  };

  type getLocalShopsParams = {
    /** 门店id */
    id?: number;
  };

  type getMallSalesUsingGETParams = {
    /** 时间 */
    time?: string;
    /** 开始时间 */
    startTime?: string;
    /** 结束时间 */
    endTime?: string;
  };

  type getNewPriceUsingGETParams = {
    /** spuId */
    spuId: number;
    /** userCode */
    userCode: number;
    /** 规格值1 */
    attributeValue1?: string;
    /** 规格值2 */
    attributeValue2?: string;
  };

  type getNumsUsingGETParams = {
    /** 商家id */
    merchantId?: number;
  };

  type getParamUsingGETParams = {
    /** skuId */
    skuId: number;
  };

  type getPkDetailsParams = {
    /** 用户id */
    userId?: string;
  };

  type getProductDataUsingGETParams = {
    /** 商品（skuid）id */
    id: number;
  };

  type getProductHitsUsingGETParams = {
    /** 时间 */
    time?: string;
    /** 开始时间 */
    startTime?: string;
    /** 结束时间 */
    endTime?: string;
    /** 第几页 */
    pageNum?: number;
    /** 几条数据 */
    pageSize?: number;
  };

  type getProductInfoUsingGETParams = {
    /** 商品名称/商品货号 */
    key?: string;
    /** 商品类型：0整车，1国五车，2后市场 */
    intentionType?: number;
  };

  type getProductsUsingGETParams = {
    /** 当前页码 */
    pageNum?: number;
    /** 分页条数 */
    pageSize?: number;
    /** 是否获取非促销商品 */
    isPromotion?: number;
    /** 商品名称/商品货号 */
    attribute?: string;
    /** 商家Id */
    merchantId: number;
    /** 商品分类Id */
    categoryId?: number;
    /** 活动Id */
    activityId?: number;
    /** 商品id数组 */
    ids?: number[];
  };

  type getPromotionFlagUsingGETParams = {
    /** spuId */
    spuId: number;
  };

  type getRegisteredUsersDataUsingGETParams = {
    /** 时间 */
    time?: string;
    /** 开始时间 */
    startTime?: string;
    /** 结束时间 */
    endTime?: string;
  };

  type geTruckInfoUsingGETParams = {
    /** 国五车id */
    id?: number;
  };

  type getScreenItemParams = {
    /** 分类名称 */
    categoryName?: string;
  };

  type getSkuListUsingGETParams = {
    /** 查询第几页 */
    pageNum: number;
    /** 查询几条数据 */
    pageSize: number;
    /** spuId */
    spuId: number;
  };

  type getSkusByMarketParams = {
    /** 车型id */
    carTypeId?: number;
    /** 细分市场 */
    market?: string;
    /** 用户编号 */
    userId?: string;
    /** 用户账号 */
    userName?: string;
  };

  type getSpuByIdUsingGETParams = {
    /** spuId */
    spuId: number;
  };

  type getTrendsDataUsingGETParams = {
    /** 年份 */
    time?: string;
    /** 业务类型如：1为业务单数，2为业务金额，3为点击数，4为注册/申请数 */
    type?: number;
    /** 业务类别 */
    businessType?: number;
  };

  type GoodsVo = {
    /** skuId */
    id?: number;
    /** 商品图片 */
    imageUrl?: string;
    /** 促销价格 */
    isPromotion?: boolean;
    /** 商品名称 */
    name?: string;
    /** 商品原价格 */
    price?: number;
    /** 整车：1，后市场：2 */
    productTypeId?: string;
    /** 促销价格 */
    promotionPrice?: number;
    /** spuId */
    spuId?: number;
  };

  type ImageFilePathDTO = {
    /** 图片路径 */
    filePath: string;
    /** 是否为主图：1->是，0->否 */
    master: number;
  };

  type ImagesDTO = {
    /** 图片id */
    fileId: number;
    /** 商品主图片路径 */
    filePath: string;
    /** 相册组id */
    groupId: number;
    /** 商家id */
    merchantId: number;
  };

  type ImagesVO = {
    /** 图片id */
    fileId: number;
    /** 图片路径 */
    filePath: string;
    /** 是否为主图：0为否，1为是 */
    isMain?: number;
    /** skuId */
    skuId: number;
  };

  type infoByActivityIdUsingGETParams = {
    /** ads */
    ads: number[];
  };

  type infoByAdLocationUsingGETParams = {
    /** 广告位Id */
    adLocationId: number;
  };

  type infosParams = {
    /** 商品类型id */
    id?: number;
    /** 整车传1.后市场传2 */
    type?: number;
    /** 用户id */
    userId?: string;
    /** 用户账号 */
    userName?: string;
  };

  type infosUsingGETParams = {
    /** 活动id */
    activityId: number;
    /** 商家id */
    merchantId: number;
    /** 广告Ids */
    ads: number[];
    /** 广告状态 */
    online: number;
  };

  type infoUsingGET1Params = {
    /** 商家Id */
    merchantId: number;
  };

  type infoUsingGET2Params = {
    /** id */
    id: number;
  };

  type infoUsingGET3Params = {
    /** userId */
    userId: number;
    /** pageSize */
    pageSize: number;
    /** pageNo */
    pageNo: number;
  };

  type infoUsingGET4Params = {
    /** id */
    id: number;
  };

  type infoUsingGET5Params = {
    /** id */
    id: number;
  };

  type infoUsingGETParams = {
    /** 广告id */
    id: number;
  };

  type listByMerchantIdUsingGETParams = {
    /** 商家Id */
    merchantId: number;
  };

  type listByMerchantUsingGETParams = {
    /** 当前页码 */
    pageNum?: number;
    /** 分页条数 */
    pageSize?: number;
    /** 商家名称 */
    merchantName?: string;
  };

  type listConditionsParams = {
    /** 用途类型 */
    usageName?: string;
  };

  type listParams = {
    /** 第几页 */
    pageNum?: number;
    /** 查多少条 */
    pageSize?: number;
    /** 用户账号 */
    userName?: string;
  };

  type listShopsParams = {
    /** 分页参数-当前页码 */
    current?: number;
    /** 分页参数-页大小 */
    size?: number;
    /** 主键 */
    id?: string;
    /** 省 */
    province?: string;
    /** 城市 */
    city?: string;
    /** 区 */
    zone?: string;
    /** 店铺名：支持模糊查询 */
    shopName?: string;
    /** 商户号 */
    merchantId?: string;
    /** 手机号 */
    phone?: string;
    /** 老板姓名 */
    ownerName?: string;
    /** 可用状态 */
    enabled?: boolean;
  };

  type listUsingGET1Params = {
    /** 广告位置 */
    id?: number;
  };

  type listUsingGET2Params = {
    /** 商家名称 */
    merchantName?: string;
  };

  type listUsingGET3Params = {
    /** 当前页码 */
    pageNum?: number;
    /** 分页条数 */
    pageSize?: number;
    /** 用户编码 */
    userCode?: number;
    /** 消息类型 */
    messageType?: number;
  };

  type listUsingGET4Params = {
    /** 分页参数-当前页码 */
    current?: number;
    /** 分页参数-页大小 */
    size?: number;
    /** 主键id */
    id?: string;
    /** 供应商名称 */
    orgName?: string;
    /** 供应商编码 */
    orgCode?: string;
  };

  type listUsingGETParams = {
    /** 当前页码 */
    pageNum?: number;
    /** 分页条数 */
    pageSize?: number;
    /** 广告商品名称 */
    merchantName?: string;
    /** 广告位置 */
    adLocationId?: number;
    /** 开始时间 */
    startTime?: string;
    /** 到期时间 */
    endTime?: string;
  };

  type listUsingPOST1Params = {
    /** 查询第几页 */
    pageNum?: number;
    /** 查询几条数据 */
    pageSize?: number;
    /** 分类等级 */
    level: number;
  };

  type listUsingPOST3Params = {
    /** 查询第几页 */
    pageNum: number;
    /** 查询几条数据 */
    pageSize: number;
  };

  type listUsingPOSTParams = {
    /** 查询第几页 */
    pageNum: number;
    /** 查询几条数据 */
    pageSize: number;
  };

  type location = {
    id?: number;
    sort?: number;
  };

  type MallSalesDataVO = {
    /** 总金额 */
    allSum: string;
    /** 总订单数 */
    ordersTotal: number;
    /** 意向单转化率 */
    percent: string;
    /** 总销售商品数据 */
    sellerNum: number;
  };

  type MerchandiseDTO = {
    firstStepDTO: FirstStepDTO;
    stepDTO: SecondStepDTO;
    thirdStepDTO: ThirdStepDTO;
  };

  type MerchandiseVO = {
    firstStepVO: FirstStepVO;
    stepVO: SecondStepVO;
    thirdStepVO: ThirdStepVO;
  };

  type MerchantContact = {
    /** 联系人手机号 */
    contactMobile?: string;
    /** 联系人名称 */
    contactName?: string;
    /** 联系人类型(1.商家2、管理人员) */
    contactType?: number;
    /** 操作人 */
    createBy?: string;
    /** 商家联系人Id(修改的时候需要) */
    id?: number;
    /** 是否删除(0未删除、1已删除) */
    isDelete?: number;
    /** 用户编号 */
    userCode?: number;
  };

  type MerchantDTO = {
    contacts?: MerchantContact[];
    /** 操作人 */
    createBy?: string;
    /** 商家Id(修改的时候需要) */
    id?: number;
    /** 商家名称 */
    name: string;
    /** 商家状态 */
    status: number;
  };

  type MerchantEntity = {
    /** 创建人 */
    createBy?: string;
    /** 创建时间 */
    createTime: string;
    id: number;
    /** 逻辑删除 1（true）已删除， 0（false）未删除 */
    isDelete?: number;
    /** 商家id(远行销售系统(后市场)商家id) */
    merchantId: number;
    /** 商家名称 */
    name: string;
    /** 商家状态 */
    status: number;
    /** 修改人 */
    updateBy?: string;
    /** 更新时间 */
    updateTime: string;
    /** 用户编码 */
    userCode: number;
  };

  type MessageCenterEntity = {
    /** 图标 */
    icon?: string;
    /** 主键id */
    id?: number;
    /** 连接图片 */
    image?: string;
    /** 图片链接 */
    imageLink?: string;
    /** 消息主题 */
    message?: string;
    /** 消息类型：1、系统消息 2、业务消息 3、活动消息 */
    messageType?: number;
    /** 推送方式：1广播 、2单独用户推送 */
    pushMode?: number;
    /** 关联关系 */
    relationId?: number;
    /** 发送日期 */
    sendTime?: string;
    /** 消息推送状态：0未推送 、1已推送 、2已过期 */
    status?: number;
    /** 标题 */
    title?: string;
  };

  type MessageCenterVo = {
    /** 主键id */
    id?: number;
    /** 连接图片 */
    image?: string;
    /** 图片链接 */
    imageLink?: string;
    /** 消息是否已读：0未读、1已读 */
    isRead?: number;
    /** 消息主题 */
    message?: string;
    /** 消息类型：1、系统消息 2、业务消息 3、活动消息 */
    messageType?: number;
    /** 推送方式：1广播 、2单独用户推送 */
    pushMode?: number;
    /** 关联关系 */
    relationId?: number;
    /** 发送日期 */
    sendTime?: string;
    /** 消息推送状态：0未推送 、1已推送 、2已过期 */
    status?: number;
    /** 标题 */
    title?: string;
  };

  type OperationComDataVO = {
    data?: number;
    month?: string;
  };

  type OrderTruckShowVo = {
    agencyCode?: string;
    aliasType?: string;
    behandAxle?: string;
    behandSpring?: string;
    boxSize?: string;
    brandId?: number;
    brandName?: string;
    cabColor?: string;
    cabSuspension?: string;
    cabType?: string;
    cabTypeDetails?: string;
    carDriveId?: number;
    carDriveName?: string;
    carSeriesId?: number;
    carSeriesName?: string;
    city?: string;
    deposit?: number;
    engineType?: string;
    frame?: string;
    frontAxle?: string;
    frontSpring?: string;
    fuelTank?: string;
    horsepower?: string;
    id?: number;
    imageName?: string;
    isStatus?: string;
    lockTruck?: number;
    name?: string;
    onlinePrice?: number;
    orderId?: number;
    platetTypeId?: number;
    platetTypeName?: string;
    productTypeName?: string;
    province?: string;
    publicType?: string;
    selected?: string;
    serialNumber?: string;
    singlePrice?: number;
    speedChangingBox?: string;
    status?: string;
    truckCode?: string;
    truckTypeAlias?: string;
    truckTypeId?: number;
    truckTypeName?: string;
    tyreType?: string;
    version?: string;
    vin?: string;
    wheelBase?: string;
  };

  type PageInfoActivityProductVo_ = {
    endRow?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    isFirstPage?: boolean;
    isLastPage?: boolean;
    list?: ActivityProductVo[];
    navigateFirstPage?: number;
    navigateLastPage?: number;
    navigatePages?: number;
    navigatepageNums?: number[];
    nextPage?: number;
    pageNum?: number;
    pageSize?: number;
    pages?: number;
    prePage?: number;
    size?: number;
    startRow?: number;
    total?: number;
  };

  type PageInfoAdEntityVo_ = {
    endRow?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    isFirstPage?: boolean;
    isLastPage?: boolean;
    list?: AdEntityVo[];
    navigateFirstPage?: number;
    navigateLastPage?: number;
    navigatePages?: number;
    navigatepageNums?: number[];
    nextPage?: number;
    pageNum?: number;
    pageSize?: number;
    pages?: number;
    prePage?: number;
    size?: number;
    startRow?: number;
    total?: number;
  };

  type PageInfoBrandVO_ = {
    endRow?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    isFirstPage?: boolean;
    isLastPage?: boolean;
    list?: BrandVO[];
    navigateFirstPage?: number;
    navigateLastPage?: number;
    navigatePages?: number;
    navigatepageNums?: number[];
    nextPage?: number;
    pageNum?: number;
    pageSize?: number;
    pages?: number;
    prePage?: number;
    size?: number;
    startRow?: number;
    total?: number;
  };

  type PageInfoCateGoryAttrVO_ = {
    endRow?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    isFirstPage?: boolean;
    isLastPage?: boolean;
    list?: CateGoryAttrVO[];
    navigateFirstPage?: number;
    navigateLastPage?: number;
    navigatePages?: number;
    navigatepageNums?: number[];
    nextPage?: number;
    pageNum?: number;
    pageSize?: number;
    pages?: number;
    prePage?: number;
    size?: number;
    startRow?: number;
    total?: number;
  };

  type PageInfoCategoryListsVO_ = {
    endRow?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    isFirstPage?: boolean;
    isLastPage?: boolean;
    list?: CategoryListsVO[];
    navigateFirstPage?: number;
    navigateLastPage?: number;
    navigatePages?: number;
    navigatepageNums?: number[];
    nextPage?: number;
    pageNum?: number;
    pageSize?: number;
    pages?: number;
    prePage?: number;
    size?: number;
    startRow?: number;
    total?: number;
  };

  type PageInfoMerchantDTO_ = {
    endRow?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    isFirstPage?: boolean;
    isLastPage?: boolean;
    list?: MerchantDTO[];
    navigateFirstPage?: number;
    navigateLastPage?: number;
    navigatePages?: number;
    navigatepageNums?: number[];
    nextPage?: number;
    pageNum?: number;
    pageSize?: number;
    pages?: number;
    prePage?: number;
    size?: number;
    startRow?: number;
    total?: number;
  };

  type PageInfoMessageCenterVo_ = {
    endRow?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    isFirstPage?: boolean;
    isLastPage?: boolean;
    list?: MessageCenterVo[];
    navigateFirstPage?: number;
    navigateLastPage?: number;
    navigatePages?: number;
    navigatepageNums?: number[];
    nextPage?: number;
    pageNum?: number;
    pageSize?: number;
    pages?: number;
    prePage?: number;
    size?: number;
    startRow?: number;
    total?: number;
  };

  type PageInfoProductHistVo_ = {
    endRow?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    isFirstPage?: boolean;
    isLastPage?: boolean;
    list?: ProductHistVo[];
    navigateFirstPage?: number;
    navigateLastPage?: number;
    navigatePages?: number;
    navigatepageNums?: number[];
    nextPage?: number;
    pageNum?: number;
    pageSize?: number;
    pages?: number;
    prePage?: number;
    size?: number;
    startRow?: number;
    total?: number;
  };

  type PageInfoProductRecommendVO_ = {
    endRow?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    isFirstPage?: boolean;
    isLastPage?: boolean;
    list?: ProductRecommendVO[];
    navigateFirstPage?: number;
    navigateLastPage?: number;
    navigatePages?: number;
    navigatepageNums?: number[];
    nextPage?: number;
    pageNum?: number;
    pageSize?: number;
    pages?: number;
    prePage?: number;
    size?: number;
    startRow?: number;
    total?: number;
  };

  type PageInfoSkuListVO_ = {
    endRow?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    isFirstPage?: boolean;
    isLastPage?: boolean;
    list?: SkuListVO[];
    navigateFirstPage?: number;
    navigateLastPage?: number;
    navigatePages?: number;
    navigatepageNums?: number[];
    nextPage?: number;
    pageNum?: number;
    pageSize?: number;
    pages?: number;
    prePage?: number;
    size?: number;
    startRow?: number;
    total?: number;
  };

  type PageInfoSkuVO_ = {
    endRow?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    isFirstPage?: boolean;
    isLastPage?: boolean;
    list?: SkuVO[];
    navigateFirstPage?: number;
    navigateLastPage?: number;
    navigatePages?: number;
    navigatepageNums?: number[];
    nextPage?: number;
    pageNum?: number;
    pageSize?: number;
    pages?: number;
    prePage?: number;
    size?: number;
    startRow?: number;
    total?: number;
  };

  type PageInfoSpuVO_ = {
    endRow?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    isFirstPage?: boolean;
    isLastPage?: boolean;
    list?: SpuVO[];
    navigateFirstPage?: number;
    navigateLastPage?: number;
    navigatePages?: number;
    navigatepageNums?: number[];
    nextPage?: number;
    pageNum?: number;
    pageSize?: number;
    pages?: number;
    prePage?: number;
    size?: number;
    startRow?: number;
    total?: number;
  };

  type PageInfoTempParamVO_ = {
    endRow?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    isFirstPage?: boolean;
    isLastPage?: boolean;
    list?: TempParamVO[];
    navigateFirstPage?: number;
    navigateLastPage?: number;
    navigatePages?: number;
    navigatepageNums?: number[];
    nextPage?: number;
    pageNum?: number;
    pageSize?: number;
    pages?: number;
    prePage?: number;
    size?: number;
    startRow?: number;
    total?: number;
  };

  type PageInfoVehicleVO_ = {
    endRow?: number;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    isFirstPage?: boolean;
    isLastPage?: boolean;
    list?: VehicleVO[];
    navigateFirstPage?: number;
    navigateLastPage?: number;
    navigatePages?: number;
    navigatepageNums?: number[];
    nextPage?: number;
    pageNum?: number;
    pageSize?: number;
    pages?: number;
    prePage?: number;
    size?: number;
    startRow?: number;
    total?: number;
  };

  type PageResultSecurityQrCodeVO_ = {
    data?: SecurityQrCodeVO[];
    total?: number;
  };

  type ParamValue = {
    /** 参数值 */
    valueName: string;
  };

  type ParamValueVO = {
    /** id */
    id: number;
    /** 参数名 */
    name: string;
    /** 参数值 */
    value: string;
  };

  type ProductDetailVO = {
    /** 促销活动Id */
    activityId?: number;
    /** 商品编号 */
    artNo?: string;
    /** 商品id */
    id?: number;
    /** 是否促销 */
    isPromotion?: boolean;
    /** 活动限购数量 */
    limitedQuantity?: number;
    /** 商家Id */
    merchantId?: number;
    /** 商家名称 */
    merchantName?: string;
    /** 商品参数 */
    paramVOS?: ProductParamVO[];
    /** 车辆图片 */
    photoUrls?: ImageFilePathDTO[];
    /** 商品价格 */
    price?: number;
    /** 商品名称 */
    productName?: string;
    /** 商品促销价格 */
    promotionPrice?: number;
    /** 上下架状态 */
    state?: number;
    /** 微信小程序商品状态(2:下架 1:上架) */
    wxAppletState: number;
    /** 远行商品id */
    yxGoodsId?: number;
  };

  type ProductHistVo = {
    /** 商品点击数 */
    count: number;
    /** 图片路径 */
    file_path: string;
    /** 商品id */
    id: number;
    /** 商品名称 */
    productName: string;
  };

  type ProductInfoVO = {
    /** 商品货号 */
    artNo: string;
    /** 属性值1 */
    attributeValue1: string;
    /** 属性值2 */
    attributeValue2: string;
    /** 属性值 */
    attributes: string[];
    bname?: string;
    /** 分类类目 */
    categoryName: string;
    /** 商品id */
    id: number;
    /** 商品名称 */
    name: string;
    /** 商品价格 */
    price: number;
    /** 商品库存 */
    sctocks: number;
    /** 商品spuId */
    spuId: number;
  };

  type ProductParamDataVO = {
    /** 参数 */
    paramValueVOS: ParamValueVO[];
  };

  type ProductParamDTO = {
    /** 参数名称 */
    name: string;
    /** 参数值 */
    value: string;
  };

  type ProductParamVO = {
    /** 参数id */
    id: number;
    /** 商家id */
    merchantId: number;
    /** 商家名称 */
    merchantName: string;
    /** 参数名称 */
    paramName: string;
    /** 参数值数据 */
    paramValues: ParamValue[];
    /** 商品id */
    productId: number;
    /** 商品名称 */
    productName: string;
  };

  type ProductPKVO = {
    /** 商品参数以及值 */
    paramVOS: ProductParamVO[];
    /** 商品价格 */
    price: number;
    /** spuId */
    spuId: number;
  };

  type ProductRecommendVO = {
    /** 商品id */
    goodsId?: string;
    /** 商品名称 */
    goodsName?: string;
    /** 商品类型id */
    id?: string;
    /** 最大价格 */
    maxPrice?: string;
    /** 最小价格 */
    minPrice?: string;
    /** 商品图片路径 */
    picture?: string;
    /** 价格 */
    price?: string;
    /** 商品描述 */
    remark?: string;
    /** 商品类型1->整车，2->后市场 */
    type?: string;
    /** 后市场商品类型1->轮胎，2->润滑油，3->尿素 */
    typeId?: number;
  };

  type ProductSkuVO = {
    /** 促销活动Id */
    activityId?: number;
    carSeriesName?: string;
    /** 分类id */
    categoryId: number;
    /** 是否促销 */
    isPromotion?: boolean;
    /** 商品状态(1:上架 2:下架 ) */
    isUp?: number;
    /** 商品状态(1:上架 2:下架 ) */
    isUpApplet?: number;
    /** 细分市场 */
    markets: string[];
    /** 最大价格 */
    maxPrice: number;
    /** 商家Id */
    merchantId?: number;
    /** 商家名称 */
    merchantName?: string;
    /** 最小价格 */
    minPrice: number;
    /** 付款方式 */
    payMode: number;
    /** 车辆图片 */
    photoUrls: ImageFilePathDTO[];
    /** 商品名称 */
    productName: string;
    /** 商品促销价格 */
    promotionPrice?: number;
    /** 供应商id */
    providerId: number;
    /** 服务模式，只针对轮胎有用 */
    serviceMode: number;
    /** 商品 */
    skus: Sku[];
    specs?: Record<string, any>;
    /** spuId */
    spuId?: number;
    /** 商品状态(2:下架 1:上架) */
    state?: number;
    /** 微信小程序商品状态(2:下架 1:上架) */
    wxAppletState: number;
  };

  type ProductTypeVO = {
    /** 图标地址 */
    icon: string;
    /** id */
    id: number;
    /** 是否促销 */
    isPromotion: boolean;
    /** 类型等级 */
    level: number;
    /** 类型名称 */
    name: string;
    /** 参数模板ID */
    paramModeId: number;
    pid?: number;
    /** 促销方式ID(暂不考虑) */
    promotionModeId: number;
    /** 备注 */
    remark: string;
    /** 排序 */
    sort: number;
    /** 下一级类型 */
    subProductTypeVOs: ProductTypeVO[];
  };

  type PromotionPriceDto = {
    /** 是否促销 */
    isPromotion?: boolean;
    /** 促销活动Id */
    promotionId?: number;
    promotionPrice?: number;
    skuId?: number;
  };

  type queryQrCodeUsingGETParams = {
    /** orgCode */
    orgCode: string;
    /** qrCode */
    qrCode: string;
  };

  type recomParams = {
    /** 第几页 */
    pageNum?: number;
    /** 查多少条 */
    pageSize?: number;
  };

  type RequestAttributeDTO = {
    /** 属性名称 */
    attributeName: string;
    /** 属性值 */
    attributeValue: string;
  };

  type RequestSkuDTO = {
    /** 商品货号 */
    artNo?: string;
    /** 商品参数 */
    paramDTOS: ProductParamDTO[];
    /** 商品价格 */
    price: number;
    /** 商品库存 */
    sctocks: number;
  };

  type RequestThirdDataDTO = {
    /** 后市场属性（整车是没有属性） */
    attributeDTOS?: RequestAttributeDTO[];
    /** 品牌名称 */
    brandName: string;
    /** 分类名称 */
    categoryName: string;
    /** 创建部门编号（远行销售系统字段） */
    createDeptCode: string;
    /** 创建部门名称（远行销售系统字段） */
    createDeptName: string;
    /** 商品介绍 */
    description?: string;
    /** 详情页描述 */
    detailsDescription?: string;
    /** 详情标题 */
    detailsTitle?: string;
    /** (整车/后市场商品id)商品id */
    goodsId: number;
    /** 商品名称 */
    goodsName: string;
    /** App是否显示（1；显示，2不显示） */
    isAppShow: number;
    /** 小程序是否显示（1；显示，2不显示） */
    isAppletShow: number;
    /** 是否上架：1->上架，2->下架 */
    isUp: number;
    /** 是否上架：1->上架，2->下架 */
    isUpApplet: number;
    /** 商家id */
    merchantId: number;
    /** 商家名称 */
    merchantName: string;
    /** 筛选参数1 */
    param1: string;
    /** 筛选参数2 */
    param2: string;
    /** 筛选参数3 */
    param3: string;
    /** 筛选参数4 */
    param4: string;
    /** 筛选参数5 */
    param5: string;
    /** 筛选参数6 */
    param6: string;
    /** 筛选参数7 */
    param7: string;
    /** 筛选参数8 */
    param8: string;
    /** 筛选参数9 */
    param9: string;
    /** 付款方式 */
    payMode: number;
    /** 整车：1，后市场：2 */
    productTypeId: number;
    /** 服务模式 */
    serviceMode: number;
    skuDTO: RequestSkuDTO;
    /** Sku图片数据 */
    skuFilePath: ImageFilePathDTO[];
    /** skuId(编辑删除时传) */
    skuId?: string;
    /** spuId(编辑删除时传) */
    spuId?: string;
  };

  type RequestUpDTO = {
    skuIds?: number[];
    spuIds?: number[];
  };

  type Result = {
    /** 响应状态码 */
    code: number;
    /** 响应数据 */
    data: Record<string, any>;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultActivityGoodsVo_ = {
    /** 响应状态码 */
    code: number;
    data: ActivityGoodsVo;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultAdEntity_ = {
    /** 响应状态码 */
    code: number;
    data: AdEntity;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultAmountStatisticsVo_ = {
    /** 响应状态码 */
    code: number;
    data: AmountStatisticsVo;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultBaseQueryDataGoodsVo_ = {
    /** 响应状态码 */
    code: number;
    data: BaseQueryDataGoodsVo_;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultBaseQueryDataZcServiceShopEntity_ = {
    /** 响应状态码 */
    code: number;
    data: BaseQueryDataZcServiceShopEntity_;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultBaseQueryDataZcServiceShopVO_ = {
    /** 响应状态码 */
    code: number;
    data: BaseQueryDataZcServiceShopVO_;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultBoolean_ = {
    /** 响应状态码 */
    code: number;
    /** 响应数据 */
    data: boolean;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultBrandEntity_ = {
    /** 响应状态码 */
    code: number;
    data: BrandEntity;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultListAdEntity_ = {
    /** 响应状态码 */
    code: number;
    /** 响应数据 */
    data: AdEntity[];
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultListAdInfoDTO_ = {
    /** 响应状态码 */
    code: number;
    /** 响应数据 */
    data: AdInfoDTO[];
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultListAdInfoVo_ = {
    /** 响应状态码 */
    code: number;
    /** 响应数据 */
    data: AdInfoVo[];
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultListAdLocationEntity_ = {
    /** 响应状态码 */
    code: number;
    /** 响应数据 */
    data: AdLocationEntity[];
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultListAdVo_ = {
    /** 响应状态码 */
    code: number;
    /** 响应数据 */
    data: AdVo[];
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultListAttributeDto_ = {
    /** 响应状态码 */
    code: number;
    /** 响应数据 */
    data: AttributeDto[];
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultListBatchProductVO_ = {
    /** 响应状态码 */
    code: number;
    /** 响应数据 */
    data: BatchProductVO[];
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultListBrowseVO_ = {
    /** 响应状态码 */
    code: number;
    /** 响应数据 */
    data: BrowseVO[];
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultListCategoryVO_ = {
    /** 响应状态码 */
    code: number;
    /** 响应数据 */
    data: CategoryVO[];
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultListDealSumVO_ = {
    /** 响应状态码 */
    code: number;
    /** 响应数据 */
    data: DealSumVO[];
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultListDealVO_ = {
    /** 响应状态码 */
    code: number;
    /** 响应数据 */
    data: DealVO[];
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultListFormDataVO_ = {
    /** 响应状态码 */
    code: number;
    /** 响应数据 */
    data: FormDataVO[];
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultListLong_ = {
    /** 响应状态码 */
    code: number;
    /** 响应数据 */
    data: number[];
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultListMerchantEntity_ = {
    /** 响应状态码 */
    code: number;
    /** 响应数据 */
    data: MerchantEntity[];
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultListOperationComDataVO_ = {
    /** 响应状态码 */
    code: number;
    /** 响应数据 */
    data: OperationComDataVO[];
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultListProductInfoVO_ = {
    /** 响应状态码 */
    code: number;
    /** 响应数据 */
    data: ProductInfoVO[];
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultListProductTypeVO_ = {
    /** 响应状态码 */
    code: number;
    /** 响应数据 */
    data: ProductTypeVO[];
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultListSpecVo_ = {
    /** 响应状态码 */
    code: number;
    /** 响应数据 */
    data: SpecVo[];
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultListTemplateParamVO_ = {
    /** 响应状态码 */
    code: number;
    /** 响应数据 */
    data: TemplateParamVO[];
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultMallSalesDataVO_ = {
    /** 响应状态码 */
    code: number;
    data: MallSalesDataVO;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultMerchandiseVO_ = {
    /** 响应状态码 */
    code: number;
    data: MerchandiseVO;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultMerchantEntity_ = {
    /** 响应状态码 */
    code: number;
    data: MerchantEntity;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultOrderTruckShowVo_ = {
    /** 响应状态码 */
    code: number;
    data: OrderTruckShowVo;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultPageInfoAdEntityVo_ = {
    /** 响应状态码 */
    code: number;
    data: PageInfoAdEntityVo_;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultPageInfoBrandVO_ = {
    /** 响应状态码 */
    code: number;
    data: PageInfoBrandVO_;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultPageInfoCateGoryAttrVO_ = {
    /** 响应状态码 */
    code: number;
    data: PageInfoCateGoryAttrVO_;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultPageInfoCategoryListsVO_ = {
    /** 响应状态码 */
    code: number;
    data: PageInfoCategoryListsVO_;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultPageInfoMerchantDTO_ = {
    /** 响应状态码 */
    code: number;
    data: PageInfoMerchantDTO_;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultPageInfoMessageCenterVo_ = {
    /** 响应状态码 */
    code: number;
    data: PageInfoMessageCenterVo_;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultPageInfoProductHistVo_ = {
    /** 响应状态码 */
    code: number;
    data: PageInfoProductHistVo_;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultPageInfoProductRecommendVO_ = {
    /** 响应状态码 */
    code: number;
    data: PageInfoProductRecommendVO_;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultPageInfoSkuListVO_ = {
    /** 响应状态码 */
    code: number;
    data: PageInfoSkuListVO_;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultPageInfoSpuVO_ = {
    /** 响应状态码 */
    code: number;
    data: PageInfoSpuVO_;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultPageInfoTempParamVO_ = {
    /** 响应状态码 */
    code: number;
    data: PageInfoTempParamVO_;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultPageInfoVehicleVO_ = {
    /** 响应状态码 */
    code: number;
    data: PageInfoVehicleVO_;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultPageResultSecurityQrCodeVO_ = {
    /** 响应状态码 */
    code: number;
    data: PageResultSecurityQrCodeVO_;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultProductDetailVO_ = {
    /** 响应状态码 */
    code: number;
    data: ProductDetailVO;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultProductParamDataVO_ = {
    /** 响应状态码 */
    code: number;
    data: ProductParamDataVO;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultProductPKVO_ = {
    /** 响应状态码 */
    code: number;
    data: ProductPKVO;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultProductSkuVO_ = {
    /** 响应状态码 */
    code: number;
    data: ProductSkuVO;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultSet_ = {
    /** 响应状态码 */
    code: number;
    /** 响应数据 */
    data: Record<string, any>[];
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultShoppingCartDTO_ = {
    /** 响应状态码 */
    code: number;
    data: ShoppingCartDTO;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultSpuInfoVO_ = {
    /** 响应状态码 */
    code: number;
    data: SpuInfoVO;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultStatisticsVO_ = {
    /** 响应状态码 */
    code: number;
    data: StatisticsVO;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type ResultUserDataVO_ = {
    /** 响应状态码 */
    code: number;
    data: UserDataVO;
    /** 响应信息 */
    message: string;
    success?: boolean;
  };

  type savePKParams = {
    /** 商品id */
    productId?: number;
  };

  type SecondStepDTO = {
    /** 品牌id */
    brandId: number;
    /** 商品介绍 */
    description?: string;
    /** 详情页描述 */
    detailsDescription?: string;
    /** 详情标题 */
    detailsTitle?: string;
    /** 运费模板 */
    freightTemp?: string;
    id?: number;
    /** 是否上架：1->上架，2->下架 */
    isUp: number;
    /** 是否上架：1->上架，2->下架 */
    isUpApplet: number;
    /** 商家id */
    merchantId: number;
    /** 商品名称 */
    name: string;
    /** 备注 */
    remark?: string;
    /** 服务模式 */
    serviceMode: number;
    skeyword?: string;
  };

  type SecondStepVO = {
    /** 品牌id */
    brandId: number;
    /** 商品介绍 */
    description: string;
    /** 详情页描述 */
    detailsDescription: string;
    /** 详情标题 */
    detailsTitle: string;
    /** 运费模板 */
    freightTemp: string;
    /** id */
    id: number;
    /** 是否上架：1->上架，2->下架 */
    isUp: number;
    /** 是否上架：1->上架，2->下架 */
    isUpApplet: number;
    /** 商家id */
    merchantId: number;
    /** 商品名称 */
    name: string;
    /** 备注 */
    remark: string;
    /** 服务模式 */
    serviceMode: number;
    skeyword?: string;
  };

  type SecreeDTO = {
    /** 商品分类id */
    categoryId?: number;
    /** app显示1：显示，2：不显示 */
    isAppShow?: number;
    /** 小程序显示1：显示，2：不显示 */
    isAppletShow?: number;
    /** 自定义最高价 */
    maxPrice?: string;
    /** 商家id */
    merchantId: number;
    /** 自定义最低价 */
    minPrice?: string;
    /** 筛选条件参数1:比如说整车第一个筛选条件为驱动形式传参的值就放入到这个参数中一次类推 */
    param1?: string[];
    /** 筛选条件参数2 */
    param2?: string[];
    /** 筛选条件参数3 */
    param3?: string[];
    /** 筛选条件参数4 */
    param4?: string[];
    /** 筛选条件参数5 */
    param5?: string[];
    /** 筛选条件参数6 */
    param6?: string[];
    /** 筛选条件参数7 */
    param7?: string[];
    /** 筛选条件参数8 */
    param8?: string[];
    /** 筛选条件参数9 */
    param9?: string[];
    /** 商品名称 */
    productName?: string;
    /** 请求来源 */
    requestSource?: string;
    /** spuId集合 */
    spuIds: number[];
    /** 暂定商品类型：1为整车，2为后市场 */
    type?: number;
  };

  type SecurityQrCodeDTO = {
    /** 主键id */
    id?: number;
    /** 供应商编码 */
    orgCode?: string;
    /** 供应商名称 */
    orgName?: string;
  };

  type SecurityQrCodeVO = {
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    createUser?: number;
    /** 主键id */
    id?: number;
    /** 供应商编码 */
    orgCode?: string;
    /** 供应商名称 */
    orgName?: string;
    /** 供应商防伪码 */
    qrCode?: string;
    /** 供应商防伪码地址 */
    qrCodeUrl?: string;
    /** 防伪码查询次数 */
    queryCnt?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 更新人 */
    updateUser?: number;
  };

  type selectInfoUsingGETParams = {
    /** 查询第几页 */
    pageNum: number;
    /** 查询几条数据 */
    pageSize: number;
    /** 商品id */
    spuId: number;
  };

  type ShoppingCartDTO = {
    activityId?: number;
    code?: string;
    createTime?: string;
    description?: string;
    goodsId?: number;
    goodsImagePath?: string;
    goodsName?: string;
    goodsNumber?: number;
    goodsType?: string;
    id?: number;
    isPromotion?: boolean;
    isShelves?: number;
    limitedQuantity?: number;
    /** 细分市场(只有整车才有) */
    marketSegment?: string;
    /** 商家Id */
    merchantId?: number;
    /** 商家名称 */
    merchantName?: string;
    newPrice?: number;
    /** 付款方式（0线上付款，1，null或其他 线下对接） */
    payMode?: number;
    price?: number;
    /** 类型名称 */
    productKindName?: string;
    productType?: string;
    promotionPrice?: number;
    /** 供应商id */
    providerId?: string;
    publicCode?: string;
    /** 付款方式（0线上付款，1，null或其他 线下对接） */
    serviceMode?: number;
    specs?: SpecVo[];
    spuId?: number;
    status?: number;
    totalPrice?: number;
    truckCode?: string;
    userId?: number;
    userIp?: string;
    wxAppletStatus?: number;
    /** 远行销售系统商品id */
    yxGoodsId?: string;
  };

  type ShoppingCartSkuIdDTO = {
    /** 商品id */
    goodsId: number;
    /** 商品数量 */
    goodsNumber: number;
  };

  type ShoppingCartVO = {
    newShoppingCartDTO?: ShoppingCartDTO;
    oldShoppingCartDTO?: ShoppingCartDTO;
  };

  type Sku = {
    /** 商品id */
    id: number;
    /** 商品否存在pk中 1：存在，0：不存在 */
    isPK: number;
    /** 商品价格 */
    price: number;
    /** 商品类型如（后市场的，轮胎、润滑油、尿素等） */
    productKindName: string;
    /** 商品sku名称 */
    productSkuName: string;
    /** 规格参数 */
    specs?: SpecParamVo[];
    /** 远行系统商品id */
    yxGoodId: number;
  };

  type SkuDTO = {
    /** 商品货号 */
    artNo?: string;
    /** 属性值1 */
    attributeValue1: string;
    /** 属性值2 */
    attributeValue2: string;
    /** skuid(编辑时传) */
    id: number;
    /** 商品参数 */
    paramDTOS: ProductParamDTO[];
    /** 库存预警值 */
    prewarning?: number;
    /** 商品价格 */
    price: number;
    /** 商品数量 */
    productNumber: number;
    /** 整车：1，后市场：2 */
    productTypeId: number;
    /** 商品库存 */
    sctocks: number;
  };

  type SkuListVO = {
    /** 属性数组 */
    attributes: AttributeVO[];
    /** skuId */
    id: number;
    /** sku价格 */
    price: number;
    /** sku上下架状态，是否上架：1->上架，2->下架 */
    state: number;
    /** 微信小程序商品状态(2:下架 1:上架) */
    wxAppletState: number;
  };

  type SkuVO = {
    /** 商品货号 */
    artNo: string;
    /** 属性值1 */
    attributeValue1: string;
    /** 属性值2 */
    attributeValue2: string;
    /** skuid */
    id: number;
    /** 参数值 */
    paramDTOS: ParamValueVO[];
    /** 库存预警值 */
    prewarning: number;
    /** 商品价格 */
    price: number;
    /** 商品数量 */
    productNumber: number;
    /** 整车：1，后市场：2 */
    productTypeId: number;
    /** 商品库存 */
    sctocks: number;
  };

  type SpecKeyEntity = {
    /** 创建时间 */
    createTime?: string;
    /** 描述 */
    decs?: string;
    /** 主键id */
    id?: number;
    /** 规格名称 */
    name?: string;
    /** 父Id */
    pid?: number;
    /** 单位 */
    unit?: string;
    /** 修改时间 */
    updateTime?: string;
  };

  type SpecKeyValueVo = {
    goodsType?: number;
    skuId?: number;
    spec?: value[];
    spuId?: number;
  };

  type SpecParamVo = {
    /** 规格名称 */
    key?: string;
    /** 规格名称Id */
    keyId?: number;
    /** 规格值 */
    value?: string;
    /** 规格值Id */
    valueId?: number;
  };

  type SpecValueEntity = {
    /** 创建时间 */
    createTime?: string;
    /** 主键id */
    id?: number;
    /** 规格名称Id */
    specKeyId?: number;
    /** 修改时间 */
    updateTime?: string;
    /** 规格值 */
    value?: string;
  };

  type SpecVo = {
    /** 规格名称 */
    name?: string;
    /** 规格名称父Id */
    pid?: number;
    /** 规格名称Id */
    specKeyId?: number;
    /** 规格单位 */
    unit?: string;
    /** 规格值 */
    value?: string;
    /** 规格值Id */
    valueId?: number;
    /** 规格值集合 */
    values?: value[];
  };

  type SpuAttributeEntity = {
    /** 属性名称 */
    attributeName: string;
    /** 属性值 */
    attributeValue: string;
    /** 创建时间 */
    createTime: string;
    /** 主键id(编辑时需要传) */
    id: number;
    /** spuid */
    spuId: number;
    /** 单位 */
    unit: string;
    /** 更新时间 */
    updateTime: string;
  };

  type SpuDTO = {
    /** 品牌id */
    brandId: number;
    /** 分类id */
    categoryId: number;
    /** 审核状态：1待审核，2审核已通过，3审核未通过 */
    isAudit: number;
    /** 不查回收站，该字段不传为null，回收站传1 */
    isRecycle: number;
    /** 是否上架：1->上架，2->下架 */
    isUp: number;
    /** 商家id */
    merchantId: number;
    /** 商品名称 */
    name: string;
  };

  type SpuInfoVO = {
    /** 商品属性 */
    attribute: string;
    /** 品牌id */
    brandId: number;
    /** 品牌名称 */
    brandName: string;
    /** 分类id */
    categoryId: number;
    /** 分类名称 */
    categoryName: string;
    /** id */
    id: number;
    /** 是否上架：1->上架，2->下架 */
    isUp: number;
    /** 是否上架：1->上架，2->下架 */
    isUpApplet: number;
    /** 商家id */
    merchantId: number;
    /** 商品名称 */
    name: string;
    /** 价格 */
    price: string;
    /** 销量 */
    salesNum: number;
    skeyword?: string;
    /** 库存量 */
    stockNum: number;
  };

  type SpuVO = {
    /** 品牌id */
    brandId: number;
    /** 品牌名称 */
    brandName: string;
    /** 分类id */
    categoryId: number;
    /** 分类名称 */
    categoryName: string;
    /** id */
    id: number;
    /** 列表图片路径（spu图片路径） */
    imageUrl: string;
    /** 审核状态：1待审核，2审核已通过，3审核未通过 */
    isAudit: number;
    /** 是否上架：1->上架，2->下架 */
    isUp: number;
    /** 是否上架：1->上架，2->下架 */
    isUpApplet: number;
    /** 上架最大价格 */
    maxPrice: number;
    /** 商家id */
    merchantId: number;
    /** 商家名称 */
    merchantName: string;
    /** 上架最小价格 */
    minPrice: number;
    /** 商品名称 */
    name: string;
    /** 整车：1，后市场：2 */
    productTypeId: number;
    /** 销量 */
    salesNum: number;
    /** 库存量 */
    stockNum: number;
  };

  type StatisticsVO = {
    /** 全部数量 */
    allNum: number;
    /** 未通过数量 */
    notPassNum: number;
    /** 已上架数量 */
    putawayNum: number;
    /** 下架数量 */
    soldOutNum: number;
  };

  type TemplateParamVO = {
    /** 参数名 */
    paramName: string;
    /** 参数值数据 */
    templateValues: TemplateValue[];
  };

  type TemplateValue = {
    /** 参数值 */
    valueName: string;
  };

  type TempParamVO = {
    /** 商品类型id */
    categoryId: string;
    /** 参数主键id */
    id: number;
    /** 商品类型名称 */
    modelName: string;
    /** 参数值类型(0:单选 1:多选 2:输入) */
    paramValueType: number;
    /** 参数名称 */
    tempName: string;
    /** 参数值 */
    tempValueVOS: TempValueVO[];
    /** 参数值逗号分割字符串 */
    values: string;
  };

  type TempValueVO = {
    /** 参数值 */
    value: string;
  };

  type ThirdStepDTO = {
    /** 商品相册（sku相册） */
    images: ImagesDTO[];
    /** 付款方式 */
    payMode: number;
    /** 商品价格 */
    skuDTOS: SkuDTO[];
    /** 商品属性(只有后市场才有属性) */
    spuAttributeEntities: SpuAttributeEntity[];
  };

  type ThirdStepVO = {
    /** 相册数据 */
    images: ImagesVO[];
    /** 付款方式 */
    payMode: number;
    skuVOS: PageInfoSkuVO_;
    /** 商品属性 */
    spuAttributeEntities: SpuAttributeEntity[];
  };

  type updateBatchStateUsingPOSTParams = {
    /** 广告id */
    ids?: number[];
    /** 是否使用 */
    isUse?: number;
  };

  type updateCategoryAttrUsingPUTParams = {
    /** id */
    id: number;
    /** 分类名称 */
    name: string;
  };

  type updateRestoreBySpuIdUsingPUTParams = {
    /** 商品id */
    spuId: number[];
  };

  type updateStateUsingPOSTParams = {
    /** 广告id */
    id?: number;
    /** 广告上下架状态：1启动、0禁用 */
    online?: number;
  };

  type updateUpBySkuIdUsingPUTParams = {
    /** skuId */
    skuId: number;
    /** 是否上架：1->上架，2->下架 */
    state: number;
    /** 微信小程序是否上架：1->上架，2->下架 */
    wxAppletState: number;
  };

  type updateUpBySpuIdUsingPUTParams = {
    /** 商品id */
    spuId: number;
    /** 是否上架：1->上架，2->下架 */
    isUp: number;
    /** 小程序是否上架：1->上架，2->下架 */
    isUpApplet: number;
  };

  type UserDataVO = {
    /** 累积用户数 */
    cumNum: number;
    /** 点击数 */
    hits: string;
    /** 用户活跃度 */
    monthlyUser: string;
    /** 年度注册用户数 */
    yearNum: number;
  };

  type value = {
    current?: boolean;
    /** 是否可选 */
    isEnable?: boolean;
    /** 规格名id */
    keyId: number;
    /** 规格名 */
    name: string;
    sorted?: number;
    /** 规格值 */
    value?: string;
    /** 规格值Id */
    valueId?: number;
    values?: values[];
  };

  type values = {
    isEnable?: boolean;
    keyId?: number;
    value?: string;
  };

  type VehicleVO = {
    /** 促销活动Id */
    activityId?: number;
    carSeriesName?: string;
    /** 车型id */
    id: number;
    /** 是否促销 */
    isPromotion?: boolean;
    /** 库存车 */
    list?: OrderTruckShowVo[];
    /** 最大价格 */
    maxPrice: number;
    /** 商家名称 */
    merchantName: string;
    /** 最小价格 */
    minPrice: number;
    /** 车辆图片 */
    photoUrls: string;
    /** 整车后市场区分, 整车：1，后市场：2 */
    productTypeId: number;
    /** 商品促销价格 */
    promotionPrice?: number;
    /** 车型数量 */
    total: number;
    /** 车系id */
    truckTypeId: string;
  };

  type ZcServiceShopEntity = {
    /** 地址 */
    address: string;
    /** 服务车辆数 */
    carTotal: string;
    /** 城市 */
    city: string;
    createdBy?: string;
    createdTime?: string;
    /** 可用状态 */
    enabled?: boolean;
    /** 主键 */
    id?: number;
    isDelete?: boolean;
    /** 纬度 */
    latitude: string;
    /** 经度：可在网上转换https://www.piliang.tech/geocoding */
    longitude: string;
    /** 商户号 */
    merchantId: string;
    /** 店铺名 */
    ownerName: string;
    /** 老板电话 */
    phone: string;
    /** 省 */
    province: string;
    /** 店铺名 */
    shopName: string;
    sort?: string;
    updatedBy?: string;
    updatedTime?: string;
    /** 区 */
    zone: string;
  };

  type ZcServiceShopSaveDTO = {
    /** 地址 */
    address: string;
    /** 服务车辆数 */
    carTotal: string;
    /** 城市 */
    city: string;
    /** 可用状态-默认可用 */
    enabled?: boolean;
    /** 主键 */
    id?: number;
    /** 纬度 */
    latitude: string;
    /** 经度：可在网上转换https://www.piliang.tech/geocoding */
    longitude: string;
    /** 商户号 */
    merchantId: string;
    /** 老板姓名 */
    ownerName: string;
    /** 老板电话 */
    phone: string;
    /** 省 */
    province: string;
    /** 店铺名 */
    shopName: string;
    /** 区 */
    zone: string;
  };

  type ZcServiceShopVO = {
    /** 地址 */
    address?: string;
    /** 服务车辆数 */
    carTotal?: string;
    /** 市 */
    city?: string;
    /** 距离 */
    distance?: string;
    /** 主键id */
    id?: number;
    /** 公里数 */
    kilometers?: number;
    /** 纬度 */
    latitude?: string;
    /** 经度 */
    longitude?: string;
    /** 老板姓名 */
    ownerName?: string;
    /** 电话 */
    phone?: string;
    /** 省 */
    province?: string;
    /** 门店名 */
    shopName?: string;
    /** 区 */
    zone?: string;
  };
}
