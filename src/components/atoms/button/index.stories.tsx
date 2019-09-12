import React from "react";
import Button from "./";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

const components = storiesOf("Button", module);
components
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add("default", () => <Button name="Button" to="/" />);
