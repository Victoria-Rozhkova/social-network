import React, { FC } from "react";

import * as svgIcons from "./icons-list";

import { IconName, IconProps } from "@/components/UI/Icon/icons.type";

const icons = Object(svgIcons);

const Icon: FC<
  Partial<Pick<IconProps, "size">> &
    Pick<IconProps, "className"> & { name: IconName }
> = (props) => {
  const { size = 20, className, name } = props;

  const CurrentIcon = icons[name];

  return <CurrentIcon size={size} className={className} />;
};

export default Icon;
