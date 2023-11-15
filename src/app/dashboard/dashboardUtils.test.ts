import { handleLogout } from "./dashboardUtils";

describe("handleLogout", () => {
  it('should remove email from sessionStorage and redirect to "/"', () => {
    const mockRouter = {
      push: jest.fn(),
    };

    sessionStorage.setItem("email", "test@example.com");
    handleLogout(mockRouter);

    expect(sessionStorage.getItem("email")).toBeNull();
    expect(mockRouter.push).toHaveBeenCalledWith("/");
  });

  it('should not remove email from sessionStorage if it does not exist and redirect to "/"', () => {
    const mockRouter = {
      push: jest.fn(),
    };

    handleLogout(mockRouter);

    expect(sessionStorage.getItem("email")).toBeNull();
    expect(mockRouter.push).toHaveBeenCalledWith("/");
  });
});
