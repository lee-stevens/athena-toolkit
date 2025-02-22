export type IEnvironment = {
  production: boolean;
  HOST_DEVICE_NAME: string | undefined;
  API_URL: string | undefined;
};

export type EnvVariable = {
  key: string;
  value: any;
  type: any;
};
