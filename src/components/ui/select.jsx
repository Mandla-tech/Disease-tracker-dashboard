export const Select = ({
  value,
  onChange,
  options,
  className = '',
  placeholder = 'Select an option'
}) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`block w-full p-2 border rounded-lg bg-white ${className}`}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
