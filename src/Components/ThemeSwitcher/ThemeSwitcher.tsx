"use client";

import styles from "./ThemeSwitcher.module.scss";
import cn from "classnames";
import ButtonIcon from "../../Atoms/ButtonIcon/ButtonIcon";

import SunIcon from "./icons/sun.svg";
import MoonIcon from "./icons/moon.svg";
import { useTheme } from "@/Context/ThemeContext";

export default function ThemeSwitcher({
  className,
}: {
  className?: string;
}) {
  const { theme, toggleTheme } = useTheme();

  if (!theme) return null;

  return (
    <>
      <div className={cn(styles["theme-button"], className)}>
        {theme == "dark" ? (
          <ButtonIcon
            onClick={toggleTheme}
            className={cn(styles["button"], styles["light"])}
            icon={<SunIcon />}
          />
        ) : (
          <ButtonIcon
            onClick={toggleTheme}
            className={cn(styles["button"], styles["dark"])}
            icon={<MoonIcon />}
          />
        )}
      </div>
    </>
  );
}
