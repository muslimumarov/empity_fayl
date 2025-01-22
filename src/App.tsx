import React from "react";
import { Trans, useTranslation } from "react-i18next"; // useTranslation hook'ini qo'shamiz
import i18n from "./utils/i18/index"; // Tilni o'zgartirish uchun i18n import qilamiz

function App() {
  const { i18n } = useTranslation(); // useTranslation hook'ini ishlatamiz

  const changeLanguage = (lang: string): void => {
    i18n.changeLanguage(lang); // Tilni o'zgartirish
  };

  return (
    <div className="App ml-10 mt-10 flex flex-col items-center">
      {/* Tilni o'zgartirish uchun select element */}
      <div className="mb-5">
        <select
          className="px-4 py-2 border-2 border-yellow-500 text-gray-800 bg-white rounded"
          onChange={(e) => changeLanguage(e.target.value)}
          value={i18n.language} // Hozirgi tilni selectda ko'rsatish
        >
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="uz">O'zbekcha</option>
        </select>
      </div>

      {/* Trans komponenti orqali tarjima qilish */}
      <div className="p-96">
        <h1>
          <Trans i18nKey="WelcomeMessage">Welcome user</Trans>
        </h1>
      </div>
    </div>
  );
}

export default App;
