import { useSearchParams } from "next/navigation";

export function getPage(defaultPage: string | number = 0, defaultPageSize: string | number = 0) {
  const page: IPage = {
    page: useSearchParams().get("page") || defaultPage?.toString() || "1",
    size: useSearchParams().get("pageSize") || defaultPageSize?.toString() || "10",
  };
  return page;
}
export function getModalMessage(type?: string, message?: string): IModalMessage {
  switch (type) {
    case "create_success":
      return {
        title: "Success",
        message: "Data creation successful.",
        status: "success",
      };
    case "update_success":
      return {
        title: "Success",
        message: "Data modification successful.",
        status: "success",
      };
    case "delete_success":
      return {
        title: "Success",
        message: "Data deletion successful.",
        status: "success",
      };

    case "create_error":
      return {
        title: "Error",
        message: "Data creation unsuccessful.",
        status: "error",
      };
    case "update_error":
      return {
        title: "Error",
        message: "Data modification unsuccessful.",
        status: "error",
      };
    case "delete_error":
      return {
        title: "Error",
        message: "Data deletion unsuccessful.",
        status: "error",
      };
    case "warn":
      return {
        title: "Warning",
        message: "",
        status: "warn",
      };
    case "error":
      return {
        title: "Error",
        message: message,
        status: "error",
      };
    default:
      return {
        title: "",
        message: "Something went wrong",
        status: "error",
      };
  }
}
export function getConfirmModalMessage(type: string) {
  switch (type) {
    case "delete_warning":
      return {
        title: "!Warning",
        message: "are you sure you want to delete this data?",
      };

    default:
      return {
        title: "",
        message: "Something went wrong",
      };
  }
}
