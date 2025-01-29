import { elementWithId } from "@/Store/Slices/personData";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TemplateProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  picture: string;
  name: string;
  surname: string;
  inGeneral: string;
  activity: string;
  contacts: elementWithId[];
  education: elementWithId[];
  experience: elementWithId[];
  skills: elementWithId[];
  ahcivments: elementWithId[];
  personalQualities: elementWithId[];
  urls: elementWithId[];
  projects: elementWithId[];
}
