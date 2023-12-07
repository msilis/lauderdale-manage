import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

it("saves family data to database", async () => {
  const familyData = {
    parent1FirstName: "Jane",
    parent1LastName: "Doe",
    parent1Email: "email@email.com",
    parent1Phone: "07428738948",
    parent1Address: "22 Road, London N4 3IU",
  };
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
