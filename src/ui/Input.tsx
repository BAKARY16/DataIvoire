import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";

const keywords = [
  "électricien",
  "chauffeur",
  "tresseuse",
  "plombier",
  "menuisier",
  "maçon"
];

const AnimatedInput = () => {
  const [placeholder, setPlaceholder] = useState("");
  const [keywordIndex, setKeywordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue) return; // Stop animation if user is typing

    const current = keywords[keywordIndex];
    const updatedText = isDeleting
      ? current.substring(0, charIndex - 1)
      : current.substring(0, charIndex + 1);
    setPlaceholder(updatedText);
    setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

    if (!isDeleting && updatedText === current) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setKeywordIndex((prev) => (prev + 1) % keywords.length);
    }

    const timer = setTimeout(() => {}, isDeleting ? 50 : 150);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, keywordIndex, inputValue]);

  return (
    <div className="w-full max-w-xl mx-auto flex items-center bg-white rounded-full px-4 py-2 shadow-md">
      <input
        type="text"
        className="flex-grow outline-none text-gray-700 placeholder-gray-400"
        placeholder={placeholder || "Recherche..."}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="text-white bg-orange-500 rounded-full p-2">
        <Search size={20} />
      </button>
    </div>
  );
};

export default AnimatedInput;
