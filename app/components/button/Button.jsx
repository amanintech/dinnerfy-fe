const PADDINGS = {
  small: "py-1.5 px-3.5 text-sm",
  medium: "py-1.5 px-5",
  big: "py-3 px-8 text-2xl",
};

const THEMES = {
  none: "",
  primary: "bg-green-250 text-white font-semibold ",
  gray: "bg-gray-100 text-black hover:shadow-none hover:bg-black/10",
};

export default function Button({
  as: As = "button",
  children,
  theme = "primary",
  size = "medium",
  round = true,
  className = "",
  ...otherProps
}) {
  return (
    <As
      className={[
        PADDINGS[size],
        round ? "rounded-xl" : "",
        "inline-flex transition-all duration-300 justify-center items-center group space-x-2.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        THEMES[theme],
        className,
      ].join(" ")}
      {...otherProps}
    >
      {children}
    </As>
  );
}
