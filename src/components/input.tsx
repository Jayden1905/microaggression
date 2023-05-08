import { type ChangeEvent } from "react";

type InputProps = {
  disabled: boolean;
  label: string;
  required: boolean;
  type: string;
  placeholder: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export const Input = ({
  disabled,
  onChange,
  label,
  required,
  type,
  placeholder,
}: InputProps) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text text-lg">
          {label}
          {required && <span className="text-error"> *</span>}
        </span>
      </label>
      {type === "text" && (
        <input
          type={type}
          placeholder={placeholder}
          className="input-bordered input w-full max-w-xs text-base"
          disabled={disabled}
          onChange={onChange}
        />
      )}

      {type === "textarea" && (
        <textarea
          required={required}
          className="textarea-bordered textarea text-base"
          placeholder={placeholder}
          onChange={onChange}
        ></textarea>
      )}
    </div>
  );
};
