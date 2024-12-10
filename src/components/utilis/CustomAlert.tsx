import Swal from "sweetalert2";
const CustomAlert = ({ type, message, onConfirm }: { 
  type: "success" | "error" | "warning", 
  message: string, 
  onConfirm?: () => void 
}) => {
  if (type === "error") {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: message,
    });
  } else if (type === "success") {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: message,
    });
  } else if (type === "warning") {
    Swal.fire({
      title: "Are you sure?",
      text: message,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed && onConfirm) {
        onConfirm();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  }
};

export default CustomAlert;
