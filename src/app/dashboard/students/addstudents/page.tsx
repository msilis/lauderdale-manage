"use client";

import DashboardLayout from "@/layout/dashboardLayout";
import { UI_TEXT } from "../../../../../utils/uitext";
import { Suspense, useState, useEffect } from "react";
import Loading from "@/app/loading";
import { handleAddStudentSubmit } from "./addStudentFormHandler";
import { useRouter } from "next/navigation";
import { FamilyData } from "../../families/familyView/familyTable";
import { getAllFamilyInfo } from "../../families/familyView/familyUtils";
import { getAllTeachers } from "../../teachers/teacherView/teacherUtils";
import { TeacherData } from "../../teachers/teacherView/teacherView";

const AddStudent = () => {
  const router = useRouter();
  const [familyData, setFamilyData] = useState<FamilyData[]>([]);
  const [familyId, setFamilyId] = useState<string | null>("");
  const [parent2Name, setParent2Name] = useState<string | undefined>("");
  const [teacherData, setTeacherData] = useState<TeacherData[]>([]);
  const [teacherName, setTeacherName] = useState<{
    teacherLastName: string;
    id: string;
  } | null>({ teacherLastName: "", id: "" });
  const handleCancelButtonClick = () => {
    router.push("/dashboard/students");
  };

  useEffect(() => {
    const fetchFamilies = async () => {
      const data = await getAllFamilyInfo();
      setFamilyData(data);
    };
    fetchFamilies();
  }, []);

  useEffect(() => {
    const fetchTeachers = async () => {
      const data = await getAllTeachers();
      setTeacherData(data);
    };
    fetchTeachers();
  }, []);

  const familyMap = new Map(
    familyData.map((family) => [family.parent1LastName, family])
  );

  const teacherMap = new Map(
    teacherData.map((teacher) => [teacher.teacherLastName, teacher])
  );

  return (
    <div className="mt-6 ml-[30%] max-w-lg outline outline-slate-100 p-4 drop-shadow-lg rounded-md">
      <h2 className="font-bold">Enter Student Details</h2>
      <form
        className="mt-4 flex flex-col mx-auto"
        method="submit"
        onSubmit={(event) => handleAddStudentSubmit(event, router)}
      >
        <label htmlFor="studentFirstName" className="flex flex-col">
          First Name
        </label>
        <input
          id="studentFirstName"
          name="studentFirstName"
          type="text"
          placeholder="First name..."
          className="input input-bordered w-full mt-2"
          required
        />
        <label htmlFor="studentLastName" className="flex flex-col mt-2">
          Last Name
        </label>
        <input
          id="studentLastName"
          name="studentLastName"
          type="text"
          placeholder="Last name..."
          className="input input-bordered w-full  mt-2"
          required
        />
        <label htmlFor="studentFamily" className="flex flex-col mt-2">
          Family
        </label>
        <select
          className="select select-bordered w-full  mt-2"
          required
          name="studentFamily"
          onChange={(event) => {
            const selectedFamily = familyMap.get(event.target.value);
            if (selectedFamily) {
              setFamilyId(selectedFamily.id);
              setParent2Name(selectedFamily.parent2FirstName);
            }
          }}
        >
          <option value="">Family...</option>
          {Array.from(familyMap.keys()).map((familyName) => (
            <option value={familyName} key={familyMap.get(familyName)?.id}>
              {familyName}
            </option>
          ))}
        </select>
        <input type="hidden" name="familyId" value={familyId as string} />
        <input
          type="hidden"
          name="parent2FirstName"
          value={parent2Name as string}
        />
        <label htmlFor="studentBirthdate" className="flex flex-col mt-2">
          Birth Date
        </label>
        <input
          id="studentBirthdate"
          type="date"
          className="input input-bordered w-full  mt-2"
          required
          name="studentBirthdate"
        />
        <label htmlFor="studentTeacher" className="flex flex-col mt-2">
          Teacher
        </label>
        <select
          className="select select-bordered w-full  mt-2"
          required
          name="studentTeacher"
          onChange={(event) => {
            const selectedTeacher = teacherMap.get(event.target.value);
            if (selectedTeacher) {
              setTeacherName({
                teacherLastName: selectedTeacher.teacherLastName,
                id: selectedTeacher.id,
              });
            }
          }}
        >
          <option value="">Teacher...</option>
          {Array.from(teacherMap.keys()).map((teacherName) => (
            <option value={teacherName} key={teacherMap.get(teacherName)?.id}>
              {teacherName}
            </option>
          ))}
        </select>
        <input
          type="hidden"
          name="studentTeacher"
          value={teacherName?.teacherLastName as string}
        />

        <div className="flex w-full md:w-full justify-around mt-4">
          <button
            className="btn btn-secondary mt-4"
            type="reset"
            onClick={() => handleCancelButtonClick()}
          >
            {UI_TEXT.cancelButton}
          </button>
          <button className="btn btn-accent mt-4">{UI_TEXT.addButton}</button>
        </div>
      </form>
    </div>
  );
};

const WrappedAddStudent = () => {
  return (
    <DashboardLayout>
      <Suspense fallback={<Loading />}>
        <AddStudent />
      </Suspense>
    </DashboardLayout>
  );
};

export default WrappedAddStudent;
