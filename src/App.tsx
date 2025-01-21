
import { Trans } from "react-i18next";
import LanguageSelector from "./utils/select"; // Yangi komponentni import qilamiz
import i18n from "./utils/i18/index"; // Tilni o'zgartirish uchun i18n import qilamiz

function App() {

  // Tilni o'zgartirish funksiyasi
  const changeLanguage = (lang: string): void => {
    i18n.changeLanguage(lang); // Tilni o'zgartirish
  };

  return (
    <div className="App ml-10 mt-10 flex flex-col items-center">
      {/* Tilni o'zgartirish uchun LanguageSelector komponentini chaqiramiz */}
      <LanguageSelector onLanguageChange={changeLanguage} />

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
