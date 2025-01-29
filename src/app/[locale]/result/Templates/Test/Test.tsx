import { TemplateProps } from "../Template.props";
import styles from "./Test.module.scss";
import cn from "classnames";
import Image from "next/image";

export default function Test({
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
          <h1>Contacts</h1>
          <div className={cn(styles["contacts"])}>
            {contacts.map((contact) => (
              <div className={cn(styles["contact"])} key={contact.id}>
                {contact.value}
              </div>
            ))}
          </div>
          <h1>In general</h1>
          <div className={cn(styles["in-general"])}>{inGeneral}</div>
          <h1>Education</h1>
          <div className={cn(styles["education"])}>
            {education.map((edu) => (
              <div className={cn(styles["edu"])} key={edu.id}>
                {edu.value}
              </div>
            ))}
            <h1>Experience</h1>
          </div>
          <div className={cn(styles["experience"])}>
            {experience.length > 0
              ? experience.map((exp) => (
                  <div className={cn(styles["exp"])} key={exp.id}>
                    {exp.value}
                  </div>
                ))
              : "No experience"}
          </div>
          <h1>Skills</h1>
          <div className={cn(styles["skills"])}>
            {skills.map((skill) => (
              <div className={cn(styles["skill"])} key={skill.id}>
                {skill.value}
              </div>
            ))}
          </div>
          <h1>Activity</h1>
          <div className={cn(styles["activity"])}>{activity}</div>
          <h1>Ahcivments</h1>
          <div className={cn(styles["ahcivments"])}>
            {ahcivments.map((ahcivment) => (
              <div
                className={cn(styles["ahcivment"])}
                key={ahcivment.id}
              >
                {ahcivment.value}
              </div>
            ))}
          </div>
          <h1>Personal qualities</h1>
          <div className={cn(styles["personal-qualities"])}>
            {personalQualities.map((quality) => (
              <div
                className={cn(styles["personal-quality"])}
                key={quality.id}
              >
                {quality.value}
              </div>
            ))}
          </div>
          <h1>Url</h1>
          <div className={cn(styles["urls"])}>
            {urls.map((url) => (
              <div className={cn(styles["url"])} key={url.id}>
                {url.value}
              </div>
            ))}
          </div>
          <h1>Projects</h1>
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
