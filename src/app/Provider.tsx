"use client";

import { Provider } from "react-redux";
import { persistor, store } from "@/Store/store";
import React from "react";
import { PersistGate } from "redux-persist/integration/react";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/*TODO : loading*/}
        {children}
      </PersistGate>
    </Provider>
  );
}
