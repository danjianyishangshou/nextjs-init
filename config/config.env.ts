// @ts-ignore
const configEnv: {
  [key: string]: any;
} = {
  dev: {
    APP_BASE: "/clgg/",
    API_HOME: "http://127.0.0.1:8000/dev/api/"
  },
  test: {
    APP_BASE: "/clgg/",
    API_HOME: "http://127.0.0.1:8000/test/api/"
  },
  mock: {
    APP_BASE: "/clgg/",
    API_HOME: "http://127.0.0.1:8000/mock/api/"
  },
  prod: {
    APP_BASE: "/clgg/",
    API_HOME: "http://127.0.0.1:8000/prod/api/"
  }
};
const host = configEnv[process.env.DEPLOY ?? "dev"];
process.env.API = JSON.stringify(host);
