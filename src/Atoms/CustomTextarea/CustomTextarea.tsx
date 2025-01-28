import { CustomTextareaProps } from "./CustomTextarea.props";
import styles from "./CustomTextarea.module.scss";
import cn from "classnames";

export default function CustomTextarea({
  errorMessage,
  className,
  ...props
}: CustomTextareaProps) {
  return (
    <textarea
      className={cn(styles["textarea"], className, {
        [styles["error"]]: errorMessage,
      })}
      {...props}
    />
  );
}
