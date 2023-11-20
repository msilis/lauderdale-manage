import WrappedOverview from "./overview/page";
import WrappedStudents from "./students/page";
import WrappedFamilies from "./families/page";
import WrappedTeachers from "./teachers/page";
import WrappedClasses from "./classes/page";

export const componentBasedOnRoute = (pathname: string) => {
  let Component;
  switch (pathname) {
    case "/dashboard/students":
      Component = WrappedStudents;
      break;
    case "dashboard/families":
      Component = WrappedFamilies;
      break;
    case "/dashboard/Teachers":
      Component = WrappedTeachers;
      break;
    case "dashboard/classes":
      Component = WrappedClasses;
      break;
    default:
      Component = WrappedOverview;
  }

  return Component;
};
