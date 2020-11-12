import React from "react";
import { Provider } from "react-redux";
import { devStore } from "@Dev/store";
import { DocumentWizardDevStoreContext } from "@Dev/store/context";
import { Wizard } from "@DocumentWizard";
import * as Styled from "@Dev/components/RootWrapper/styled";

export const RootWrapper = () => {
  return (
    <Provider store={devStore} context={DocumentWizardDevStoreContext}>
      <Styled.Header>Dev container</Styled.Header>
      <Wizard context={DocumentWizardDevStoreContext} />
    </Provider>
  );
};
