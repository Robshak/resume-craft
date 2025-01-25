import styles from "./dataBlock.module.scss";
import cn from "classnames";

import { dataBlockProps } from "./dataBlock.props";

export default function DataBlock({
  title,
  placeholder,
  className,
  ...props
}: dataBlockProps) {
  return (
    <div className={cn(styles["data-block"], className)} {...props}>
      {title}
      {placeholder}
    </div>
  );
}
