import React from "react";
import { Amount } from "libjs-pdcomponents/Amount";
import { Title } from "@DocumentWizard/components/Title";

export const Layout = () => {
  return (
    <>
      <Title />
      <Amount amount={3} />
    </>
  );
};
