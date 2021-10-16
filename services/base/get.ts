import { AxiosRequestConfig } from "axios";
import axios from "./axios";

export default async (url: string, params?: AxiosRequestConfig<any> | undefined) => {
  return await axios.get(url, { ...params });
};
