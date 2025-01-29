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
  return <>TEST</>;
}
