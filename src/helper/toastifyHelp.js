import { toast } from "react-toastify";

toast.configure();

export const successNotify = (notification) => {
  toast.success(notification, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 2000,
  });
};

export const errorNotify = (notification) => {
  toast.error(notification, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 2000,
  });
};
