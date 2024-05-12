import cls from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {

  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink className={cls.mainLink} to='/'>Home</AppLink>
        <AppLink theme={AppLinkTheme.RED} to='/about'>About</AppLink>
      </div>
    </nav>
  );
};
