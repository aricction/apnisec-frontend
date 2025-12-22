import { MdEdit } from "react-icons/md";

interface IssueCardProps {
    issueType: string;
    title: string;
    description: string;
    priority: string;
    status: string;
  
}

export default function IssueCard({issueType, title, description , priority, status}: IssueCardProps){
    return (
       <div className="bg-gray-800 text-white rounded-xl shadow-md p-4 w-full  lg:w-[300px] sm:w-[100%] h-full">
        <div className=" mb-5 items-center">
           
        <div className="flex items-center justify-between">
          
          <div>
            <p>{issueType}</p>
          </div>
           
           <button>
            <MdEdit />
           </button>
          </div>

          <div className="mt-2">
            <p className="text-sm text-gray-400">{title}</p>
          </div>
        

        <div className="relative flex gap-4 mt-3">
           <div className="bg-blue-400 p-1 px-3 items-center justify-center flex rounded-full mt-2 text-[12px]">
            <p>{priority}</p>
           </div>
           <div className="bg-blue-400 p-1 px-4 items-center justify-center flex rounded-full mt-2 text-[12px]">
            <p>{status}</p>
           </div>
        </div>

        </div>

        </div>
    )
}