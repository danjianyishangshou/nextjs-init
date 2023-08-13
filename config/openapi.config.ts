// @ts-ignore
const { generateService } = require("@umijs/openapi");

const openapi = [
  {
    schemaPath: "https://clggtest.clgg.com/miniapp/mall/v2/api-docs",
    serversPath: "./src/servers",
    requestImportStatement: `import request from '@/utils/request';
    import "../../../config/config.env";
    const API=process.env.NEXT_PUBLIC_API_HOME`, // 修改需要的环境变量
    projectName: "home",
    apiPrefix: "API"
  }
];
openapi.forEach((item) => {
  generateService(item);
});
