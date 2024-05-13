import cls from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink className={cls.mainLink} to='/'>{t("Home")}</AppLink>
        <AppLink theme={AppLinkTheme.RED} to='/about'>{t("About")}</AppLink>
      </div>
    </nav>
  );
};
