// @ts-ignore
const { generateService } = require("@umijs/openapi");

const openapi = [
  {
    schemaPath: "https://clggtest.clgg.com/miniapp/mall/v2/api-docs",
    serversPath: "./src/servers",
    requestImportStatement: `import request from '@/utils/request';
    const API=process.env.API_HOME;`,
    projectName: "home",
    apiPrefix: "API"
  }
];
openapi.forEach((item) => {
  generateService(item);
});
