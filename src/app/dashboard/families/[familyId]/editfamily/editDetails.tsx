"use client";

import { FamilyData } from "../../familyView/familyTable";
import { UI_TEXT } from "../../../../../../utils/uitext";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { updateFamilyDetails } from "../../familyView/familyUtils";

const EditFamilyDetailsDisplay = ({
  detailsToEdit,
}: {
  detailsToEdit: FamilyData | undefined;
}) => {
  const router = useRouter();
  const params = useParams();
  const [editedFamilyValues, setEditedFamilyValues] = useState<FamilyData>(
    detailsToEdit as FamilyData
  );

  useEffect(() => {
    if (detailsToEdit) {
      setEditedFamilyValues(detailsToEdit);
    }
  }, [detailsToEdit]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setEditedFamilyValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(editedFamilyValues, "editedFamilyValues");
  console.log(detailsToEdit, "details to edit");
  const handleUpdateFamilyClick = () => {
    const navigateAfterUpdate = () => {
      router.push(`/dashboard/families/${params.familyId}`);
    };
    updateFamilyDetails(editedFamilyValues as FamilyData, navigateAfterUpdate);
  };

  return (
    <div className="mt-6 ml-[30%] max-w-2xl outline outline-slate-100 p-4 drop-shadow-lg rounded-md">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="flex flex-col md:w-1/2">
          <label htmlFor="parent1FirstName" className="flex flex-col">
            Parent 1 First Name
          </label>
          <input
            name="parent1FirstName"
            id="parent1FirstName"
            type="text"
            defaultValue={detailsToEdit?.parent1FirstName}
            onChange={handleInputChange}
            className="input input-bordered w-full max-w-xs mt-2"
          />
          <label htmlFor="Parent1LastName" className="flex flex-col mt-2">
            Parent 1 Last Name
          </label>
          <input
            name="parent1LastName"
            id="parent1LastName"
            type="text"
            defaultValue={detailsToEdit?.parent1LastName}
            onChange={handleInputChange}
            className="input input-bordered w-full max-w-xs mt-2"
          />
          <label htmlFor="parent1Email" className="flex flex-col mt-2">
            Email
          </label>
          <input
            name="parent1Email"
            type="email"
            id="parent1Email"
            defaultValue={detailsToEdit?.parent1Email}
            onChange={handleInputChange}
            className="input input-bordered w-full max-w-xs mt-2"
          />
          <label htmlFor="parent1Phone" className="flex flex-col mt-2">
            Phone
          </label>
          <input
            type="tel"
            name="parent1Phone"
            id="parent1Phone"
            defaultValue={detailsToEdit?.parent1Phone}
            onChange={handleInputChange}
            className="input input-bordered w-full max-w-xs mt-2"
          />
          <label htmlFor="parent1Address" className="flex flex-col mt-2">
            Address
          </label>
          <textarea
            className="textarea textarea-bordered mt-2"
            defaultValue={detailsToEdit?.parent1Address}
            name="parent1Address"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col md:w-1/2">
          <label htmlFor="parent2FirstName" className="flex flex-col">
            Parent 2 First Name
          </label>
          <input
            name="parent2FirstName"
            id="parent2FirstName"
            type="text"
            defaultValue={detailsToEdit?.parent2FirstName}
            onChange={handleInputChange}
            className="input input-bordered w-full max-w-xs mt-2"
          />
          <label htmlFor="parent2LastName" className="flex flex-col mt-2">
            Parent 2 Last Name
          </label>
          <input
            name="parent2LastName"
            type="text"
            id="parent2LastName"
            defaultValue={detailsToEdit?.parent2LastName}
            onChange={handleInputChange}
            className="input input-bordered w-full max-w-xs mt-2"
          />
          <label htmlFor="parent2Email" className="flex flex-col mt-2">
            Email
          </label>
          <input
            name="parent2Email"
            id="parent2Email"
            type="email"
            defaultValue={detailsToEdit?.parent2Email}
            onChange={handleInputChange}
            className="input input-bordered w-full max-w-xs mt-2"
          />
          <label htmlFor="parent2Phone" className="flex flex-col mt-2">
            Phone
          </label>
          <input
            name="parent2Phone"
            type="tel"
            id="parent2Phone"
            defaultValue={detailsToEdit?.parent2Phone}
            onChange={handleInputChange}
            className="input input-bordered w-full max-w-xs mt-2"
          />
          <label htmlFor="parent1Address" className="flex flex-col mt-2">
            Address
          </label>
          <textarea
            name="parent2Address"
            className="textarea textarea-bordered mt-2"
            defaultValue={detailsToEdit?.parent2Address}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex w-full md:w-full justify-around mt-4">
        <button
          className="btn btn-secondary mt-4"
          onClick={() => {
            router.back();
          }}
        >
          {UI_TEXT.cancelButton}
        </button>
        <button
          className="btn btn-accent mt-4"
          onClick={handleUpdateFamilyClick}
        >
          {UI_TEXT.updateFamily}
        </button>
      </div>
    </div>
  );
};

export default EditFamilyDetailsDisplay;
