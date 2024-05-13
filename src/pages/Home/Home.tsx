import {useTranslation} from "react-i18next";

const Home = () => {
  const { t } = useTranslation('home');

  return (
    <div>
      {t("Home Page")}
    </div>
  );
};

export default Home;
