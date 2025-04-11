import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";


const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParam, setSearchParam] = useSearchParams();
  const pasteId = searchParam.get("pasteId");
  const dispatch=useDispatch();

  const createPaste = () => {
    const paste={
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt:new Date().toISOString()
    }


    // console.log(paste);
    
    
    if(pasteId){
      // update
      dispatch(updateToPastes(paste));
    }
    
    else{
      // create
      dispatch(addToPastes(paste));
    }



  // after creation and Updation 
  setTitle('');
  setValue('');
  setSearchParam({});
  };


  return (
    <div>
      <div className="flex mt-4 place-content-center gap-7">
        <input
          type="text"
          value={title}
          placeholder="Enter the Title Here"
          className="bg-gray-100  rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-0 "
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          onClick={createPaste}
          className="bg-gray-100 border border-gray-300 rounded-4xl p-2  "
        >
          {pasteId ? "Update Paste" : "Create Paste"}
        </button>
      </div>

      <div className="flex place-content-center">
        <textarea
          className="rounded-2xl mt-5 p-4 min-w-[600px] bg-gray-100 focus:outline-none focus:ring-0 shadow-sm"
          value={value}
          placeholder="Enter Your Content here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default Home;
