// import { ReactElement } from "react";

type OscarProps = {
  // children: ReactElement;
  children: React.ReactNode;
};

export const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};
