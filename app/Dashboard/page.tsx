"use client";
import React, { useState, useEffect } from "react";
import IssueForm from "../components/issueForm";
import IssueCard from "../components/issueCard";
import DashBoardNavbar from "../components/dashBoardNav";
import { useRouter } from "next/navigation";
import { logoutUser } from "../lib/api/auth-api";
import { useUserStore } from "../store/user-store";
import { useIssueStore } from "../store/issue-store";
import { createIssue , updateIssue , deleteIssue} from "../lib/api/issues-api"; 
import { Issue } from "../types/issueType";
import { CreateIssuePayload } from "../types/issueType";


export default function Dashboard() {
  const [isopen, setIsOpen] = React.useState(false);
  const [input, setInput] = React.useState({ title: "", description: "" });
  const router = useRouter();
  const logout = useUserStore((state)=> state.logout);
  const issue = useIssueStore((state)=> state.issues);
  const [edit, setEdit] = React.useState<Issue | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const user = useUserStore((state) => state.user);
  // protected route handled by middleware

useEffect(() => {
  setHydrated(true);
}, []);

if (!hydrated) {
  return null; // or a spinner
}

const handleSubmit = async (payload: CreateIssuePayload) => {
 //if edit then choose edit issue or else create issue
 
  if (edit) {
    await handleEdit(edit.id, payload);
    setEdit(null);
  } else {
    try {
      const result = await createIssue(payload);

      console.log("API response:", result);

      if (result.status !== "success") {
        throw new Error(result.message || "Failed to create issue");
      }

      const createdIssue = result.data;

      useIssueStore.getState().addIssue({
        id: createdIssue.id,
        title: createdIssue.title,
        description: createdIssue.description,
        type: createdIssue.type,
        priority: createdIssue.priority,
        status: createdIssue.status,
        createdAt: createdIssue.createdAt,
      });
    } catch (error: any) {
      console.error("Failed to create issue:", error.message);
    }
  }
  setIsOpen(false);
};


const handleEdit = async( id: string, payload: Partial<CreateIssuePayload>) => {
  try {
    const result = await updateIssue(id, payload);

    if(result.status === "success") {
      const updateIssue = result.data;
      useIssueStore.getState().updateIssue(id, updateIssue);
    } else {
      throw new Error(result.message || "failed to update");
    }
    
  } catch (error:any) {
    console.error("failed to update");
  }
}

const handleDelete = async (id: string)=> {
  try {
    const result = await deleteIssue(id);
    if(result.status === "success") {
      
      useIssueStore.getState().deleteIssue(id);
    } else {
      throw new Error(result.message || "failed to delete");
    }
  } catch (error: any) {
    console.error("Failed to delete");
    
  }

}

  const handleLogout = async () => {
    try {
      await logoutUser(); // backend logout
    } finally {
      logout();          // clear Zustand
      // Clear token cookie
      document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      router.push("/Login");
    }
  };

  

  return (
    <>
      <DashBoardNavbar />
      <div className="" style={{ fontFamily: "Lissen" }}>
        <section className="min-h-screen w-full flex flex-col px-4 sm:px-6 lg:px-20 py-10 ">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <h1 className="text2xl font-semibold">Welcome {user?.user.name}</h1>
            <h1 className="text-3xl font-semibold mb-4 sm:mb-0">Issues</h1>

            <div className="flex gap-4">
              <button
                onClick={() => setIsOpen(true)}
                className="px-5 py-3 rounded-md text-white bg-[#FF3D81] transition-colors duration-300 font-medium"
              >
                Create Issue
              </button>

              <button
                onClick={handleLogout}
                className="px-5 py-3 rounded-md text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 font-medium"
              >
                Logout
              </button>
            </div>
          </div>

          <IssueForm
            onClose={() => setIsOpen(false)}
            open={isopen}
            onSubmit={handleSubmit}
            isEditing={edit !== null}
            initialData = {edit}
            
          />

          <div className="flex flex-wrap gap-4 mt-4">
            {issue.length > 0 ? (
              issue.map((issueItem) => (
                <IssueCard
                  key={issueItem.id}
                  issue={issueItem}
                  onEdit={(issue)=> {setEdit(issue); setIsOpen(true);}}
                  onDelete = {(issue)=> {handleDelete(issue.id)}}
                />
              ))
            ) : (
              <div className="bg-gray-800 rounded-2xl p-6 shadow-lg w-full">
                <p className="text-gray-300">No issues found.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
