import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export function notifier(text: string, type: string = "success") {
  let backgroundColor;
  if (type === "success") {
    backgroundColor = "linear-gradient(to right, rgba(40, 167, 69, 0.8), rgba(25, 135, 84, 0.9))";
  } else {
    backgroundColor = "linear-gradient(to right, rgba(220, 53, 69, 0.85), rgba(139, 0, 0, 0.8))";
  }
  Toastify({
    text: text,
    close: true,
    offset: {
      x: 12,
      y: 132,
    },
    style: {
      backgroundImage: backgroundColor,
      borderRadius: "12px",
      padding: "24px",
      fontSize: "18px",
      maxWidth: "380px",
    },
    onClick: function () {},
  }).showToast();
}
