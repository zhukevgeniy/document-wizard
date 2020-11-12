import React from "react";
import { createStoreHook } from "react-redux";
import { StoreProvider } from "@DocumentWizard/store";
import { Layout } from "@DocumentWizard/components/Layout";

export const Wizard = ({ context }) => {
  const useStore = createStoreHook(context);
  const store = useStore();

  return (
    <StoreProvider store={store}>
      <Layout />
    </StoreProvider>
  );
};
