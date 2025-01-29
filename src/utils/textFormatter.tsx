import { JSX } from "react";

function highlightText(
  text: string,
  styles: Record<string, string>
): JSX.Element | string {
  if (typeof text !== "string") return text;

  const parts = text.split(/(~[^~]+~)/g);

  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("~") && part.endsWith("~") ? (
          <span key={index} className={styles["highlighted"]}>
            {part.slice(1, -1)}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function processFields<T extends Record<string, any>>(
  fields: T,
  styles: Record<string, string>
): T {
  return Object.fromEntries(
    Object.entries(fields).map(([key, value]) => {
      if (key === "picture") return [key, value];

      if (typeof value === "string") {
        return [key, highlightText(value, styles)];
      } else if (Array.isArray(value)) {
        return [
          key,
          value.map((item) =>
            typeof item === "object" &&
            item !== null &&
            "value" in item
              ? { ...item, value: highlightText(item.value, styles) }
              : item
          ),
        ];
      }
      return [key, value];
    })
  ) as T;
}
