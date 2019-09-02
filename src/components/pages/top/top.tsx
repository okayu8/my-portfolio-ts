import * as React from "react";
import BackgroundFont from "../../molecules/backgroung-font";
import TopTitle from "../../atoms/top-title";

const Top = () => {
  return (
    <div>
      <BackgroundFont firstName="Yutaro" lastName="Kataoka" />
      <TopTitle firstName="Yutaro" lastName="Kataoka" />
    </div>
  );
};

export default Top;
