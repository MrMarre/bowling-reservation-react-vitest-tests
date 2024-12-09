import './Input.scss';

function Input({
  label,
  type,
  customClass,
  name,
  handleChange,
  defaultValue,
  disabled,
  maxLength,
}) {
  return (
    <section className="input">
      <label htmlFor={name} className="input__label">
        {label}
      </label>
      <input
        id={name}
        type={type}
        className={`input__field ${customClass ? customClass : ''}`}
        name={name}
        onChange={handleChange}
        defaultValue={defaultValue ? defaultValue : ''}
        maxLength={maxLength}
        disabled={disabled}
      />
    </section>
  );
}

export default Input;
