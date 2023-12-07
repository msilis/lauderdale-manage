import { fetchTermDates } from "./termDateViewUtils";
import { errorToast } from "@/components/toast/toast";
import { TOAST_TEXT } from "@/components/toast/toastText";
import fetchMock from "jest-fetch-mock";

// Mock the fetch function globally
jest.mock("node-fetch", () => jest.fn());

// Then in your tests
it("fetches term dates and converts them to Date objects", async () => {
  (fetchMock as jest.MockedFunction<typeof fetch>).mockImplementationOnce(() =>
    Promise.resolve(
      new Response(JSON.stringify({ termDates: ["2022-01-01", "2022-02-01"] }))
    )
  );
  // ...
});

it("shows an error toast when the fetch request fails", async () => {
  (fetchMock as jest.MockedFunction<typeof fetch>).mockImplementationOnce(() =>
    Promise.resolve(new Response(null, { status: 500 }))
  );
  // ...
});

it("throws an error when the fetch request throws an error", async () => {
  (fetchMock as jest.MockedFunction<typeof fetch>).mockImplementationOnce(() =>
    Promise.reject(new Error("Fetch error"))
  );
  // ...
});
