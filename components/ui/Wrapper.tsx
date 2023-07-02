import React, { FC } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  styles?: string;
}

const Wrapper: FC<Props> = ({ children, styles, ...props }) => {
  return (
    <div
      className={
        "bg-secondary flex flex-col sm:gap-16 gap-8 text-center items-center py-10 px-4 justify-center rounded-lg max-w-5xl " +
        styles
      }
      {...props}
    >
      {children}
    </div>
  );
};

export default Wrapper;
