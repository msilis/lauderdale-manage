import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

it("save term dates to database", async () => {
  const termDates = ["2023-01-01", "2023-02-01"];
  const expectedResponse = { message: "Term dates saved successfully" };
  fetchMock.mockResponse(JSON.stringify(expectedResponse));

  const response = await fetch("../../../api/settings/termdates", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(termDates),
  });
  const data = await response.json();

  expect(fetchMock).toHaveBeenCalledWith("../../../api/settings/termdates", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(termDates),
  });
  expect(data).toEqual(expectedResponse);
});

it("returns error when saving dates fails", async () => {
  const termDates = ["2023-01-01", "2023-02-01"];
  const expectedResponse = new Error("Error storing settings in database");
  fetchMock.mockRejectOnce(expectedResponse);

  try {
    const response = await fetch("../../../api/settings/termdates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(termDates),
    });
    await response.json();
  } catch (error) {
    expect(error).toEqual(expectedResponse);
  }
});
