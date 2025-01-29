"use client";

import styles from "./page.module.scss";
import cn from "classnames";

import ThemeSwitcher from "@/Components/ThemeSwitcher/ThemeSwitcher";
import CustomTextarea from "@/Atoms/CustomTextarea/CustomTextarea";
import CustomInput from "@/Atoms/CustomInput/CustomInput";
import InputPicture from "@/Atoms/InputPicture/InputPicture";
import SoloField from "@/Wrappers/SoloField/SoloField";
import CustomButton from "@/Atoms/CustomButton/CustomButton";
import NavigateTo from "@/Wrappers/NavigateTo/NavigateTo";
import { useTranslations } from "next-intl";
import LanguageDropdown from "@/Components/LanguageDropdown/LanguageDropdown";
import DataBlock from "@/Blocks/DataBlock/DataBlock";

export default function Home() {
  const t = useTranslations("");

  return (
    <>
      <div className={cn(styles["fixed-settings"])}>
        <LanguageDropdown />
        <ThemeSwitcher />
      </div>
      <main className={cn(styles["main"])}>
        <div className={cn(styles["header"])}>
          <h1 className={styles["title"]}>{t("main-header")}</h1>
          <div className={styles["help"]}>{t("helper")}</div>
        </div>

        <div className={cn(styles["top-block"])}>
          <InputPicture className={cn(styles["picture"])} />
          <SoloField
            fieldName={"name"}
            component={<CustomInput />}
            placeholder={`${t("name")}...`}
            className={cn(styles["name"])}
          />
          <SoloField
            fieldName={"surname"}
            component={<CustomInput />}
            placeholder={`${t("surname")}...`}
            className={cn(styles["surname"])}
          />
        </div>
        <DataBlock
          title={t("contacts")}
          placeholder={`${t("contact")}...`}
          fieldName={"contacts"}
        />
        <SoloField
          fieldName={"inGeneral"}
          component={<CustomTextarea />}
          placeholder={`${t("in-general")}...`}
        />
        <DataBlock
          title={t("education")}
          placeholder={`${t("point")}...`}
          fieldName={"education"}
        />
        <DataBlock
          title={t("experience")}
          placeholder={`${t("point")}...`}
          fieldName={"experience"}
        />
        <DataBlock
          title={t("skills")}
          placeholder={`${t("skill")}...`}
          fieldName={"skills"}
        />
        <SoloField
          fieldName={"activity"}
          component={<CustomTextarea />}
          placeholder={`${t("activity")}...`}
        />
        <DataBlock
          title={t("ahcivments")}
          placeholder={`${t("ahcivment")}...`}
          fieldName={"ahcivments"}
        />
        <DataBlock
          title={t("qualities")}
          placeholder={`${t("quality")}...`}
          fieldName={"personalQualities"}
        />
        <DataBlock
          title={t("urls")}
          placeholder={`${t("url")}...`}
          fieldName={"urls"}
        />
        <DataBlock
          title={t("projects")}
          placeholder={`${t("project")}...`}
          fieldName={"projects"}
        />
        <div className={cn(styles["bottom-block"])}>
          <NavigateTo
            to="/result"
            component={
              <CustomButton inscription={t("buttons.check-result")} />
            }
          />
        </div>
      </main>
    </>
  );
}
