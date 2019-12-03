import React from "react";
import BackgroundFont from "./";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

const components = storiesOf("BackgroundFont", module);
components
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add("default", () => (
    <BackgroundFont firstName="Yutaro" lastName="Kataoka" />
  ));
