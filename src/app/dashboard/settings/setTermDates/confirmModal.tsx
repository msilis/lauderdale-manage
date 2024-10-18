import React from "react";
import { STYLE_UTILS } from "../../../../../utils/styleUtils";

type ConfirmProps = {
  confirmClick: () => void;
};

const ConfirmDateChange = React.forwardRef<HTMLDialogElement, ConfirmProps>(
  ({ confirmClick }, ref) => {
    return (
      <dialog className="modal" id="confirmDateChangeModal" ref={ref}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Are you sure?</h3>
          <p className="py-4">
            If you set new dates, previous dates will be erased!
          </p>
          <div className="modal-action">
            <button
              className={STYLE_UTILS.redButton}
              onClick={() => confirmClick()}
            >
              Yes
            </button>
            <form method="dialog">
              <button className={STYLE_UTILS.ghostButton}>Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    );
  }
);

export default ConfirmDateChange;
