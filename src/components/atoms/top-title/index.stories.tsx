import React from "react";
import TopTitle from "./";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

const components = storiesOf("TopTitle", module);
components
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add("default", () => <TopTitle firstName="Yutaro" lastName="Kataoka" />);
