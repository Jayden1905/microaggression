import { type Categories } from "@prisma/client";
import React from "react";

type CheckBoxProps = {
  category: Categories;
  checkboxRef: React.RefObject<HTMLInputElement>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checkboxValues: string[];
};

export const CheckBox = ({
  category,
  checkboxRef,
  onChange,
  checkboxValues,
}: CheckBoxProps) => {
  return (
    <div key={category.id} className="form-control flex-row">
      <label className="label cursor-pointer">
        <input
          required={checkboxValues.length === 0}
          ref={checkboxRef}
          value={category.name}
          type="checkbox"
          className="checkbox mr-4"
          onChange={onChange}
          checked={checkboxValues.includes(category.name)}
        />
        <span className="label-text text-base">{category.name}</span>
      </label>
    </div>
  );
};
