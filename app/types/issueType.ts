export interface Issue {
  id: string;
  title: string;
  description: string;
  type: string;
  priority?: string;
  status?: string;
  createdAt?: string;
}
export interface CreateIssuePayload {
  
  title: string;
  description: string;
  type: string;
  priority?: string;
  status?: string;
}