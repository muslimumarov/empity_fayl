import React from "react";

interface LanguageSelectorProps {
  onLanguageChange: (lang: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onLanguageChange }) => {
  return (
    <div className="mb-5">
      <select
        className="px-4 py-2 border-2 border-yellow-500 text-gray-800 bg-white rounded"
        onChange={(e) => onLanguageChange(e.target.value)}
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="uz">O'zbekcha</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
