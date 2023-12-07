import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

const familyData = {
  parent1FirstName: "Jane",
  parent1LastName: "Doe",
  parent1Email: "email@email.com",
  parent1Phone: "07428738948",
  parent1Address: "22 Road, London N4 3IU",
};

it("saves family data to database", async () => {
  const expectedResponse = { message: "Family added to database" };
  fetchMock.mockResponse(JSON.stringify(expectedResponse));

  const response = await fetch("../../../api/addFamily", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(familyData),
  });

  const data = await response.json();

  expect(fetchMock).toHaveBeenCalledWith("../../../api/addFamily", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(familyData),
  });
  expect(data).toEqual(expectedResponse);
});

it("returns an error if saving family info to database fails", async () => {
  const expectedResponse = new Error("Error adding family to database");
  fetchMock.mockRejectOnce(expectedResponse);

  try {
    const response = await fetch("../../../api/addFamily", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(familyData),
    });
    await response.json();
  } catch (error) {
    expect(error).toEqual(expectedResponse);
  }
});
