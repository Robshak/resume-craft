"use client";

import styles from "./page.module.scss";
import cn from "classnames";
import { RootState } from "@/Store/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Standart from "./Templates/Standart/Standart";
import NavigateTo from "@/Wrappers/NavigateTo/NavigateTo";
import CustomButton from "@/Atoms/CustomButton/CustomButton";
import { processFields } from "@/utils/textFormatter";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useTranslations } from "next-intl";

const templates = [Standart];

const baseColor = "#9E31B4";

export default function Choice() {
  const t = useTranslations("buttons");
  const [currentTemplate, setCurrentTemplate] = useState(0);
  const [color, setColor] = useState(baseColor);
  const [width, setWidth] = useState<null | number>(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const soloFields = useSelector(
    (state: RootState) => state.personData.soloFields
  );
  const multiFields = useSelector(
    (state: RootState) => state.personData.multiFields
  );

  const processedSoloFields = processFields(soloFields, styles);
  const processedMultiFields = processFields(multiFields, styles);

  const SelectedTemplate = templates[currentTemplate];

  const handleSaveAsPdf = async () => {
    const resume = document.getElementById("resume");
    if (!resume) return;

    const canvas = await html2canvas(resume, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210;
    const pageHeight = 297;

    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let yPosition = 0;

    while (yPosition < imgHeight) {
      pdf.addImage(
        imgData,
        "PNG",
        0,
        -yPosition,
        imgWidth,
        imgHeight
      );
      yPosition += pageHeight;
      if (yPosition < imgHeight) {
        pdf.addPage();
      }
    }

    pdf.save("resume.pdf");
  };

  return (
    <main
      className={cn(styles["main"])}
      style={
        {
          "--resume-color": color,
          "--window-width": width,
        } as React.CSSProperties
      }
    >
      <div className={cn(styles["resume"])}>
        <SelectedTemplate
          {...processedSoloFields}
          {...processedMultiFields}
        />
      </div>
      <div className={cn(styles["resume-clone"])} id="resume">
        <SelectedTemplate
          {...processedSoloFields}
          {...processedMultiFields}
        />
      </div>

      <div className={cn(styles["settings"])}>
        <CustomButton
          inscription="<"
          onClick={() =>
            setCurrentTemplate(
              (prev) =>
                (prev - 1 + templates.length) % templates.length
            )
          }
        />
        <input
          type="color"
          onChange={(e) => setColor(e.target.value)}
          value={color}
          className={styles["color-input"]}
          id="color"
        />
        <CustomButton
          inscription=">"
          onClick={() =>
            setCurrentTemplate(
              (prev) => (prev + 1) % templates.length
            )
          }
        />
      </div>
      <div className={cn(styles["bottom-block"])}>
        <NavigateTo
          to="/"
          component={<CustomButton inscription={t("back")} />}
        />
        <CustomButton
          inscription={t("PDF")}
          onClick={() => handleSaveAsPdf()}
        />
      </div>
    </main>
  );
}
