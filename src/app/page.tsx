"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import CustomInput from "../Atoms/CustomInput/CustomInput";
import { useTheme } from "@/hooks/use-theme";
import cn from "classnames";

import SunIcon from "./icons/sun.svg";
import MoonIcon from "./icons/moon.svg";
import ButtonIcon from "@/Atoms/ButtonIcon/ButtonIcon";

export default function Home() {
  const { setTheme } = useTheme();
  return (
    <>
      <div className={cn(styles["theme-button"])}>
        <ButtonIcon
          onClick={() => setTheme("light")}
          className={cn(styles["button"], styles["light"])}
          icon={<SunIcon />}
        />
        <ButtonIcon
          onClick={() => setTheme("dark")}
          className={cn(styles["button"], styles["dark"])}
          icon={<MoonIcon />}
        />
      </div>
      <main className={cn(styles["main"])}>
        <h1 className={styles["title"]}>Create your resume</h1>

        <CustomInput placeholder="Name..."></CustomInput>
        <CustomInput placeholder="Surname..."></CustomInput>
      </main>
    </>
  );
}
