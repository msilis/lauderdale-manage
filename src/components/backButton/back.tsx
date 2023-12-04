import { FC, MouseEvent } from "react";

type BackButtonProps = {
  clickHandler: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

export const BackButton: FC<BackButtonProps> = ({
  clickHandler,
  className,
}) => {
  return (
    <div>
      <button onClick={clickHandler} className={className}>
        <img src="/Feather-arrows-chevron-left.svg" />
      </button>
    </div>
  );
};
