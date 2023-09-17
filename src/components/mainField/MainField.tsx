import React, { ReactNode } from "react";
import style from "./style.module.css";

import clsx from "clsx";
export const MainField = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={clsx(style.box, className)}>{children}</div>;
};
