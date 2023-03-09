import { customApi } from "../../../api/customApi";

export const tagsApi = async () => {
  const fetchData = await customApi("/tags");
  return fetchData.data;
};
