import { customApi } from "../../../api/customApi";

export const videosApi = async () => {
  const fetchData = await customApi("/videos");
  return fetchData.data;
};
