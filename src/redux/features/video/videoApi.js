import { customApi } from "../../../api/customApi";

export const videoApi = async (id) => {
  const fetchData = await customApi(`/videos/${id}`);
  return fetchData.data;
};
