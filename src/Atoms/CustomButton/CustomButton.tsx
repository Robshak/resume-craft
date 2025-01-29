import styles from "./CustomButton.module.scss";
import cn from "classnames";
import { CustomButtonProps } from "./CustomButton.props";
import { motion } from "framer-motion";

export default function CustomButton({
  inscription,
  className,
  onClick,
}: CustomButtonProps) {
  return (
    <motion.button
      className={cn(styles["button"], className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {inscription}
    </motion.button>
  );
}
