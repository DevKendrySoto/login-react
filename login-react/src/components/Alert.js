import Swal from "sweetalert2";

function AlertNotification(
  title,
  icon,
  position = "top-end",
  button = false,
  timer = 1500
) {
  Swal.fire({
    position: position,
    icon: icon,
    title: title,
    showConfirmButton: button,
    timer: timer,
  });
}
export default AlertNotification;
