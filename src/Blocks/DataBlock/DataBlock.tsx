"use client";

import styles from "./DataBlock.module.scss";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Store/store";
import CustomInput from "@/Atoms/CustomInput/CustomInput";
import {
  pushMultiField,
  removeMultiField,
  setMultiField,
} from "@/Store/Slices/personData";
import { AnimatePresence, motion } from "framer-motion";

import AddIcon from "./icons/plus.svg";
import DeleteIcon from "./icons/delete.svg";
import { DataBlockProps } from "./dataBlock.props";

export default function DataBlock({
  fieldName,
  title,
  placeholder,
  className,
  ...props
}: DataBlockProps) {
  const points = useSelector(
    (state: RootState) => state.personData.multiFields[fieldName]
  );
  const dispatch = useDispatch();

  return (
    <div className={cn(styles["data-block"], className)} {...props}>
      <h2 className={cn(styles["title"])}>{title}</h2>
      <AnimatePresence>
        {points.map((point) => {
          return (
            <motion.div
              key={point.id}
              className={cn(styles["point"])}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <CustomInput
                placeholder={placeholder}
                value={point.value}
                onChange={(e) =>
                  dispatch(
                    setMultiField({
                      field: fieldName,
                      value: e.target.value,
                      index: point.id,
                    })
                  )
                }
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={cn(
                  styles["delete-button"],
                  styles["button"]
                )}
                onClick={() =>
                  dispatch(
                    removeMultiField({
                      field: fieldName,
                      index: point.id,
                    })
                  )
                }
              >
                <DeleteIcon />
              </motion.button>
            </motion.div>
          );
        })}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          className={cn(styles["add-button"], styles["button"])}
          onClick={() =>
            dispatch(pushMultiField({ field: fieldName, value: "" }))
          }
        >
          <AddIcon />
        </motion.button>
      </AnimatePresence>
    </div>
  );
}
