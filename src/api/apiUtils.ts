import axios from "axios";
import { API_DEFAULTS } from "./apiConfig";

export const apiRequest = async (
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data: any = {}
) => {
  try {
    const response = await axios({
      url,
      method,
      data: { ...API_DEFAULTS, ...data },
    });
    return response.data;
  } catch (error: any) {
    console.error(`Error in API Request to ${url}:`, error);
    throw new Error(
      error.response?.data?.message || "An error occurred. Please try again."
    );
  }
};
