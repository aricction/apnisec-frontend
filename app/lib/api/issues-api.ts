import API from "./axios";
import { CreateIssuePayload } from "@/app/types/issueType";

export const createIssue = async (data: CreateIssuePayload) => {
  const response = await API.post("/api/issues", data);
  return response.data;
};

export const updateIssue = async(id: string, data: Partial<CreateIssuePayload>) => {
  const response = await API.put(`/api/issues/${id}`, data);
  return response.data;
}
