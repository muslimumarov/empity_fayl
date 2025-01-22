import { useTranslation } from "react-i18next";

function App() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang); // Tilni o'zgartirish
    };

    return (
        <div className="App px-72 py-28">
            {/* Tilni o'zgartirish uchun select */}
            <select onChange={(e) => changeLanguage(e.target.value)} className="mb-40">
                <option value="en">English</option>
                <option value="ru">Русский</option>
                <option value="uz">O‘zbek</option>

            </select>

            {/* Tarjima qilingan so'zlarni ro'yxat */}
            <ul>
                <li>{t('GoodMorning')}</li>
                <li>{t('HaveAGoodDay')}</li>
                <li>{t('WhereAreYouFrom')}</li>
                <li>{t('NiceToMeetYou')}</li>
                <li>{t('CanYouHelpMe')}</li>
                <li>{t('WhatIsYourName')}</li>
                <li>{t('IWouldLikeToLearn')}</li>
                <li>{t('IAmLearningProgramming')}</li>
                <li>{t('TheWeatherIsBeautiful')}</li>
                <li>{t('IAmGratefulForYourHelp')}</li>
            </ul>
        </div>
    );
}

export default App;
