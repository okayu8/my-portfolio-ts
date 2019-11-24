import * as React from "react";
import BackgroundFont from "../../molecules/backgroung-font";
import TopTitle from "../../atoms/top-title";
import Tooltip from "../../atoms/tooltip";

const Top = () => {
  return (
    <div>
      <BackgroundFont firstName="Yutaro" lastName="Kataoka" />
      <TopTitle firstName="Yutaro" lastName="Kataoka" />
      <Tooltip value="Web Developer" />
    </div>
  );
};

export default Top;
