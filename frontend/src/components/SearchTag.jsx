import React, { useState } from "react";
import { words } from "../helper/words";
import trie from "trie-prefix-tree";

/*
 * SearchTag Component
 * 
 * A search input component that provides autocomplete functionality for tags.
 * Uses a trie data structure for efficient prefix-based searching of available tags.
 * 
 * @param {Function} addTag - Callback function to add a selected tag to the parent component
 */
function SearchTag({ addTag}) {
  // Initialize trie data structure for efficient prefix searching
  let trie = require("trie-prefix-tree");
  let tagTrie = trie(words);
  
  // State to manage the currently displayed search results (initially shows first 50 words)
  const [activeSearch, setActiveSearch] = useState(words.slice(0,50));
  
  // Handle input changes and update search results based on prefix matching
  const handleChange = (e) => {
    if (e.target.value === "") setActiveSearch(words.slice(0, 50));
    else setActiveSearch(tagTrie.getPrefix(e.target.value));
  };
  
  return (
    <div className="flex flex-wrap relative h-full w-full hover:ease-in-out transition-all ">
      {/* Search input field with styling */}
      <input
        type="search"
        placeholder="Search for tags"
        className="h-fit transition-all hover:drop-shadow-[0px_2px_1px_rgba(255,255,255,0.2)] placeholder:italic text-slate-300 text-lg w-full p-1 pl-4 rounded-full bg-slate-800"
        onChange={(e) => handleChange(e)}
      ></input>
      
      {/* Dropdown container for search results - only shown when there are results */}
      {activeSearch.length > 0 && (
        <div className="h-[75px] overflow-auto flex-wrap p-1 gap-1 bg-slate-800 text-white w-full rounded-md flex-auto flex">
          {/* Render each matching tag as a clickable element */}
          {activeSearch.map((tag) => (
            <span
              key={tag}
              onClick={() => addTag(tag)}
              className="h-fit relative cursor-pointer hover:ring-2 ring-slate-400 w-max bg-slate-700 p-0.5 rounded-md "
            >
              {/* Display tag with underscores replaced by spaces */}
              {tag.replace("_", " ")}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchTag;