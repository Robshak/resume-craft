"use client";

import styles from "./page.module.scss";
import cn from "classnames";

import SoloField from "@/Atoms/SoloField/SoloField";
import ThemeSwitcher from "@/Atoms/ThemeSwitcher/ThemeSwitcher";
import DataBlock from "@/Blocks/DataBlock/DataBlock";

export default function Home() {
  return (
    <>
      <main className={cn(styles["main"])}>
        <h1 className={styles["title"]}>Create your resume</h1>
        <ThemeSwitcher></ThemeSwitcher>

        <SoloField fieldName={"name"} placeholder="Name..."></SoloField>
        <SoloField fieldName={"surname"} placeholder="Surname..."></SoloField>
        <DataBlock
          title="Points"
          placeholder="Point..."
          fieldName={"points"}
        ></DataBlock>
      </main>
    </>
  );
}
