import React from "react";

type InputProps = {
  value: string;
  handleChange: (evnet: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = React.forwardRef(
  ({ value, handleChange }: InputProps, ref: React.Ref<HTMLInputElement>) => {
    return (
      <input type="text" value={value} onChange={handleChange} ref={ref} />
    );
  }
);
