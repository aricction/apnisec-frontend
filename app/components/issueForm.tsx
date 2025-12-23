"use client";
import React from "react";
import { Issue } from "../types/issueType";

interface IssueFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: {
    title: string;
    description: string;
    type: string;
    priority: string;
    status: string;
  }) => void;
  isEditing: boolean;
  initialData?: Issue | null;
}

export default function IssueForm({ open, onClose, onSubmit , isEditing, initialData}: IssueFormProps) {
  if (!open) return null;

  const [formData, setFormData] = React.useState({
    title: initialData?.title || "",
    description: initialData?.description|| "",
    type: initialData?.type || "Cloud Security",
    priority: initialData?.priority || "Low",
    status: initialData?.status || "Open",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleInput = (e: React.FormEvent) => {
  e.preventDefault();
  onSubmit(formData);

  setFormData({

    title: "",
    description: "",
    type: "Cloud Security",
    priority: "Low",
    status: "Open",
  });

  onClose();
};


  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-2xl p-6 w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold text-white mb-6">{isEditing? "Update Issue" : "Create Issue"}</h2>

        <form onSubmit={handleInput} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-gray-300 mb-1">Issue Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#FF3D81]"
            >
              <option>Cloud Security</option>
              <option>RedTeam Assessment</option>
              <option>VAPT</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 mb-1">Title</label>
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title here"
              className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF3D81]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 mb-1">Description</label>
            <textarea
            required
              name="description"
              placeholder="Enter description"
              value={formData.description}
              onChange={handleChange}
              className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF3D81] resize-none h-24"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 mb-1">Priority</label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#FF3D81]"
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#FF3D81]"
            >
              <option>Open</option>
              <option>In Progress</option>
              <option>Closed</option>
              <option>Resolved</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-[#FF3D81] hover:bg-[#FF5A9C] text-white transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
