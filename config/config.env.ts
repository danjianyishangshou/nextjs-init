// @ts-ignore
const configEnv: {
  [key: string]: any;
} = {
  dev: {
    NEXT_PUBLIC_APP_BASE: "/clgg/",
    NEXT_PUBLIC_API_HOME: "https://clggtest.clgg.com/miniapp/mall"
  },
  test: {
    NEXT_PUBLIC_APP_BASE: "/clgg/",
    NEXT_PUBLIC_API_HOME: "http://127.0.0.1:8000/test/api"
  },
  mock: {
    NEXT_PUBLIC_APP_BASE: "/clgg/",
    NEXT_PUBLIC_API_HOME: "http://127.0.0.1:8000/mock/api"
  },
  prod: {
    NEXT_PUBLIC_APP_BASE: "/clgg/",
    NEXT_PUBLIC_API_HOME: "http://127.0.0.1:8000/prod/api"
  }
};
const host = configEnv[process.env.DEPLOY ?? "dev"];
process.env = {
  ...process.env,
  ...host
};
