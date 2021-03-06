import React from "react";
import Ripples from "./";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

const components = storiesOf("Ripples", module);
components
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add("default", () => <Ripples vertical_top={8} horizon_left={3} />);
