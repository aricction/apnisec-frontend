import { create } from "zustand";
import { Issue } from "../types/issueType";

interface IssueState {
  issues: Issue[];
  addIssue: (issue: Issue) => void;
  updateIssue: (id: string, updatedIssue: Partial<Issue>) => void;
   deleteIssue: (id: string) => void;
  setIssues: (issues: Issue[]) => void;
  
  clearIssues: () => void;
}

export const useIssueStore = create<IssueState>((set) => ({
  issues: [],
  addIssue: (issue) => set((state) => ({ issues: [...state.issues, issue] })),
  updateIssue: (id, updatedIssue) => set((state) => ({ issues: state.issues.map(issue => issue.id === id ? { ...issue, ...updatedIssue } : issue) })),
  deleteIssue: (id) => set((state) => ({ issues: state.issues.filter(issue => issue.id !== id) })),
  setIssues: (issues) => set({ issues }),
  clearIssues: () => set({ issues: [] }),
}));
