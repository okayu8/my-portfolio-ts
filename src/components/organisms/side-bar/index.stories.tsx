import React from "react";
import SideBar from "./";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

const components = storiesOf("SideBar", module);
components
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add("default", () => <SideBar />);
