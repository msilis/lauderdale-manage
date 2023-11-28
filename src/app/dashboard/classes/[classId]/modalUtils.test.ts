import { StudentOption } from "./addStudentModal";
import { saveStudentsToClass } from "./modalUtils";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();
jest.mock("../../../../components/toast/toast.ts", () => ({
  errorToast: jest.fn(),
  successToast: jest.fn(),
}));

describe("saveStudentsToClass", () => {
  it("should call the API with the correct data and handle the response", async () => {
    const mockResponse = { message: "Success" };
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const selectedStudents: StudentOption[] = [
      { id: "1", label: "John Doe", value: "John Doe" },
    ];
    const classId = "class1";

    await saveStudentsToClass(selectedStudents, classId);

    expect(fetch).toHaveBeenCalledWith("../../../api/classes/addToClass", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ classId, selectedStudents }),
    });
  });
});
