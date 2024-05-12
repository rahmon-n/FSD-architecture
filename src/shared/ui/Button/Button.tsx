import {ButtonHTMLAttributes} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  PRIMARY = 'primary',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  theme?: ThemeButton
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    theme,
    children,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
