import { customApi } from "../../../api/customApi";

export const videosApi = async ({ searchByTags, searchByText }) => {
  let string = ``;
  if (searchByTags.length > 0) {
    string += searchByTags.map((tag) => `tags_like=${tag}`).join("&");
  }
  if (searchByText !== "") {
    string += `&q=${searchByText}`;
  }
  const fetchData = await customApi(`/videos/?${string}`);
  return fetchData.data;
};
