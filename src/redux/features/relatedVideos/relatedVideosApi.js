import { customApi } from "../../../api/customApi";

export const relatedVideosApi = async ({ id, tags }) => {
  let url = ``;
  if (tags.length > 0) {
    url += tags.map((tag) => `tags_like=${tag}`).join("&");
  }

  const fetchData = await customApi(`/videos/?${url}&id_ne=${id}`);
  return fetchData.data;
};
