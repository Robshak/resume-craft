"use client";

import styles from "./page.module.scss";
import cn from "classnames";

import SoloField from "@/Atoms/SoloField/SoloField";
import ThemeSwitcher from "@/Atoms/ThemeSwitcher/ThemeSwitcher";
import DataBlock from "@/Blocks/DataBlock/DataBlock";
import CustomTextarea from "@/Atoms/CustomTextarea/CustomTextarea";
import CustomInput from "@/Atoms/CustomInput/CustomInput";
import InputPicture from "@/Atoms/InputPicture/InputPicture";

export default function Home() {
  return (
    <>
      <main className={cn(styles["main"])}>
        <h1 className={styles["title"]}>Create your resume</h1>
        <ThemeSwitcher></ThemeSwitcher>

        <div className={cn(styles["top-block"])}>
          <InputPicture className={cn(styles["picture"])} />
          <SoloField
            fieldName={"name"}
            component={<CustomInput />}
            placeholder="Name..."
            className={cn(styles["name"])}
          />
          <SoloField
            fieldName={"surname"}
            component={<CustomInput />}
            placeholder="Surname..."
            className={cn(styles["surname"])}
          />
        </div>
        <SoloField
          fieldName={"inGeneral"}
          component={<CustomTextarea />}
          placeholder="In general..."
        />
        <DataBlock title="Points" placeholder="Point..." fieldName={"points"} />
      </main>
    </>
  );
}
