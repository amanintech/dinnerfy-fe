export default function RadioButton({
  id,
  name,
  value,
  className = "",
  children,
  labelStyle = "",
  disabled = false,
  ...otherProps
}) {
  return (
    <li>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        className={["hidden peer", className].join(" ")}
        disabled={disabled}
        {...otherProps}
      />
      <label
        htmlFor={id}
        className={[
          "border border-gray-300 transition-all font-semibold bg-white cursor-pointer peer-checked:border-green-250 peer-checked:text-green-850 hover:text-gray-600 hover:bg-gray-100",
          disabled ? "opacity-60 cursor-not-allowed" : "",
          labelStyle,
        ].join(" ")}
      >
        {children}
      </label>
    </li>
  );
}
