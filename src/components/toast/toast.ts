import { toast } from "react-toastify";

export const successToast = (toastText: string) => {
  return toast.success(toastText, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
