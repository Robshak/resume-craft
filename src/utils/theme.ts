export const getStoredTheme = (): string => {
  if (typeof window === "undefined") return "light"; // Безопасная проверка
  return localStorage.getItem("theme") || "light";
};

export const setTheme = (theme: string) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};
