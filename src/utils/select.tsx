// utils/select.tsx

import React from 'react';

interface LanguageSelectorProps {
  onLanguageChange: (lang: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onLanguageChange }) => {

  const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onLanguageChange(event.target.value); // Tanlangan tilni onLanguageChange orqali yuboramiz
  };

  return (
    <div className="flex justify-center gap-5 mb-5">
      <label htmlFor="language" className="text-white">Select Language: </label>
      <select
        id="language"
        className="px-4 py-2 border-2 border-yellow-500 text-gray-800 bg-gray-200 rounded"
        onChange={handleChangeLanguage}
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="uz">O‘zbekcha</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
