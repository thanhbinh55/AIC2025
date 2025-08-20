import React from "react";
import Image from "next/image";

function Icon({ handleCreate, type, color}) {
  return (
    <div className="flex flex-col" >
      <button
        onClick={() => handleCreate(type)}
        type="button"
        className="border-slate-200 hover:scale-90 relative hover:border hover:bg-slate-400 transition m-1 w-10 h-10 rounded-md bg-slate-100 flex items-center justify-center"
      >
        <span className="text-xs font-medium text-slate-700">
          {type}
        </span>
      </button>
      {!color && (
        <div className="text-holder w-10">
          <p className="text-clip overflow-hidden text-center">{type}</p>
        </div>
      )}
    </div>
  );
}

export default Icon;