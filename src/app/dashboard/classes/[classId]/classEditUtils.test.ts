import { handleRemoveStudent } from "./classEditUtils";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

jest.mock("@/components/toast/toast", () => ({
  errorToast: jest.fn(),
  successToast: jest.fn(),
}));

describe("handleRemoveStudent", () => {
  it("should call the API with the correct data and handle the response", async () => {
    const mockResponse = { message: "Success" };
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const studentsToDelete = [{ id: "1", name: "John Doe" }];
    const classId = "class1";

    await handleRemoveStudent(studentsToDelete, classId);

    expect(fetch).toHaveBeenCalledWith("../../../api/classes/removeStudent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ studentsToDelete, classId }),
    });
  });
});
