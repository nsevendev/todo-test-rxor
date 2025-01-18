import { ChangeEventHandler, FC } from "react";

type InputProps = {
  id: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
};

export const Input: FC<InputProps> = ({ id, value, onChange }) => {
  return (
    <div className={"max-w-fit"}>
      <input
        className={
          "text-white bg-neutral-800 border border-transparent focus:border-neutral-600 focus:outline-none rounded-md px-4 py-2 w-80"
        }
        id={id}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
