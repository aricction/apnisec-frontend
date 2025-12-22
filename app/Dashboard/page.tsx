"use client";
import React from "react";
import IssueForm from "../components/issueForm";
import IssueCard from "../components/issueCard";
interface Issue {
  id: number;
  issueType: string;
  title: string;
  description: string;
  priority: string;
  status: string;
}

export default function Dashboard() {
  const [data, setData] = React.useState<Issue[]>([]);
  const [isopen, setIsOpen] = React.useState(false);
  const [input, setInput] = React.useState({ title: "", description: "" });

  const handleCreateIssue = (issue: Omit<Issue, "id">) => {
    if (!issue.title.trim()) return;

    const newIssue: Issue = {
      id: Date.now(),
      ...issue,
    };
    console.log(issue);

    setData((prev) => [...prev, newIssue]);
  };

  return (
    <div className="" style={{ fontFamily: "Lissen" }}>
      <section className="min-h-screen w-full flex flex-col px-4 sm:px-6 lg:px-20 py-10 ">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <h1 className="text-3xl font-semibold mb-4 sm:mb-0">Issues</h1>

          <button
            onClick={() => setIsOpen(true)}
            className="px-5 py-3 rounded-md text-white bg-[#FF3D81]  transition-colors duration-300 font-medium"
          >
            Create Issue
          </button>
        </div>

        <IssueForm
          onClose={() => setIsOpen(false)}
          open={isopen}
          onSubmit={handleCreateIssue}
        />

       

        <div className="flex flex-wrap gap-4 mt-4">
          {data.length > 0 ?  (
            data.map((issue) => (
            <IssueCard
              key={issue.id}
              issueType={issue.issueType}
              title={issue.title}
              description={issue.description}
              priority={issue.priority}
              status={issue.status}
            />
          ))): (
   <div className="bg-gray-800 rounded-2xl p-6 shadow-lg w-full">
          <p className="text-gray-300">No issues found.</p>
        </div>
          )}
        </div>
      </section>
    </div>
  );
}
