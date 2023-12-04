import { FC, MouseEvent } from "react";

type BackButtonProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

export const BackButton: FC<BackButtonProps> = ({ onClick, className }) => {
  return (
    <div>
      <button onClick={onClick} className={className}>
        <img src="/Feather-arrows-chevron-left.svg" />
      </button>
    </div>
  );
};
