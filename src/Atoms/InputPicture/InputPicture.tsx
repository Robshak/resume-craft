"use client";

import styles from "./InputPicture.module.scss";
import cn from "classnames";
import { InputPictureProps } from "./InputPicture.props";

import ImgIcon from "./icons/img.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Store/store";
import { setSoloField } from "@/Store/Slices/personData";
import Image from "next/image";
import { motion } from "framer-motion";

export default function InputPicture({
  className,
  ...props
}: InputPictureProps) {
  const picture = useSelector(
    (state: RootState) => state.personData.soloFields.picture
  );
  const dispatch = useDispatch();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const base64Image = reader.result as string;
        dispatch(setSoloField({ field: "picture", value: base64Image }));
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <motion.label
        htmlFor="file-upload"
        className={cn(styles["label"], { [styles["active"]]: picture })}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {picture ? (
          <Image
            width={150}
            height={200}
            src={picture}
            alt="Uploaded"
            className={cn(styles["picture"])}
          />
        ) : (
          <ImgIcon className={cn(styles["img-icon"])} />
        )}
      </motion.label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className={cn(styles["input"], className)}
        {...props}
      />
    </>
  );
}
