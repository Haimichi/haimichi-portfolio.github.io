import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2">
      <button
        className={`px-3 py-1 rounded ${i18n.language === 'vi' ? 'bg-accent text-white' : 'bg-gray-200'}`}
        onClick={() => changeLanguage('vi')}
      >
        VI
      </button>
      <button
        className={`px-3 py-1 rounded ${i18n.language === 'en' ? 'bg-accent text-white' : 'bg-gray-200'}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher; 