import React from "react";
import { connectToStore } from "@DocumentWizard/store";

const TitleComponent = ({ email }) => {
  return <h1>{email}</h1>;
};

const mapStateToProps = (state) => ({
  email: state.profile.email,
});

export const Title = connectToStore(mapStateToProps, null)(TitleComponent);
