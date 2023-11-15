import { handleLogout } from "./dashboardUtils";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { mock } from "jest-mock-extended";

// Mock the router object
const mockRouter = mock<AppRouterInstance>();

// Mock the sessionStorage object
global.sessionStorage = mock<Storage>();

describe("handleLogout", () => {
  it("should remove email from sessionStorage and redirect to home page", () => {
    handleLogout(mockRouter);

    // Verify that removeItem was called with 'email'
    expect(sessionStorage.removeItem).toHaveBeenCalledWith("email");

    // Verify that push was called with '/'
    expect(mockRouter.push).toHaveBeenCalledWith("/");
  });
});
