import { AxiosRequestConfig } from "axios";
import axios from "./axios";

export default async (
  url: string,
  body: any,
  params: AxiosRequestConfig<any> | undefined
) => {
  return await axios.post(url, body, { ...params });
};
