import { useRouter } from "next/router";
import Overview from "./overview/page";
import Students from "./students/page";
import Families from "./families/page";
import Teachers from "./teachers/page";
import Classes from "./classes/page";

export const componentBasedOnRoute = (pathname: string) => {
  let Component;
  switch (pathname) {
    case "/dashboard/students":
      Component = Students;
      break;
    case "dashboard/families":
      Component = Families;
      break;
    case "/dashboard/Teachers":
      Component = Teachers;
      break;
    case "dashboard/classes":
      Component = Classes;
      break;
    default:
      Component = Overview;
  }

  return Component;
};
