import { useTranslations } from "next-intl";
import { TemplateProps } from "../Template.props";
import styles from "./Standart.module.scss";
import cn from "classnames";
import Image from "next/image";

export default function Standart({
  className,
  picture,
  name,
  surname,
  inGeneral,
  activity,
  contacts,
  education,
  experience,
  skills,
  ahcivments,
  personalQualities,
  urls,
  projects,
  ...props
}: TemplateProps) {
  const t = useTranslations("");

  return (
    <>
      <div className={cn(styles["body"], className)} {...props}>
        <div className={cn(styles["top-block"])}>
          <Image
            src={picture}
            width={0}
            height={200}
            style={{ width: "auto" }}
            alt="Picture"
            className={styles["picture"]}
          />
          <div className={styles["name"]}>{name}</div>
          <div className={styles["surname"]}>{surname}</div>
        </div>
        <div className={cn(styles["content"])}>
          <h1>{t("contacts")}</h1>
          <div className={cn(styles["contacts"])}>
            {contacts.map((contact) => (
              <div className={cn(styles["contact"])} key={contact.id}>
                {contact.value}
              </div>
            ))}
          </div>
          <h1>{t("in-general")}</h1>
          <div className={cn(styles["in-general"])}>{inGeneral}</div>
          <h1>{t("education")}</h1>
          <div className={cn(styles["education"])}>
            {education.map((edu) => (
              <div className={cn(styles["edu"])} key={edu.id}>
                {edu.value}
              </div>
            ))}
            <h1>{t("experience")}</h1>
          </div>
          <div className={cn(styles["experience"])}>
            {experience.length > 0 ? (
              experience.map((exp) => (
                <div className={cn(styles["exp"])} key={exp.id}>
                  {exp.value}
                </div>
              ))
            ) : (
              <div className={cn(styles["no-experience"])}>
                {t("no-experience")}
              </div>
            )}
          </div>
          <h1>{t("skills")}</h1>
          <ul className={cn(styles["skills"])}>
            {skills.map((skill) => (
              <li className={cn(styles["skill"])} key={skill.id}>
                {skill.value}
              </li>
            ))}
          </ul>
          <h1>{t("activity")}</h1>
          <div className={cn(styles["activity"])}>{activity}</div>
          <h1>{t("ahcivments")}</h1>
          <ul className={cn(styles["ahcivments"])}>
            {ahcivments.map((ahcivment) => (
              <li
                className={cn(styles["ahcivment"])}
                key={ahcivment.id}
              >
                {ahcivment.value}
              </li>
            ))}
          </ul>
          <h1>{t("qualities")}</h1>
          <ul className={cn(styles["personal-qualities"])}>
            {personalQualities.map((quality) => (
              <li
                className={cn(styles["personal-quality"])}
                key={quality.id}
              >
                {quality.value}
              </li>
            ))}
          </ul>
          <h1>{t("urls")}</h1>
          <div className={cn(styles["urls"])}>
            {urls.map((url) => (
              <div className={cn(styles["url"])} key={url.id}>
                {url.value}
              </div>
            ))}
          </div>
          <h1>{t("projects")}</h1>
          <div className={cn(styles["projects"])}>
            {projects.map((project) => (
              <div className={cn(styles["project"])} key={project.id}>
                {project.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
