export function loadState<T>(key: string): T | undefined {
  if (typeof window === "undefined") {
    return undefined;
  }

  try {
    const serializedState = localStorage.getItem(key);
    if (!serializedState) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

export function saveState<T>(key: string, data: T): void {
  const serializedState = JSON.stringify(data);
  localStorage.setItem(key, serializedState);
}
