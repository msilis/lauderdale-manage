"use client";

import Navbar from "@/components/navbar/navbar";
import { UI_TEXT } from "../../../../../utils/uitext";
import DashboardLayout from "@/layout/dashboardLayout";
import ClassDetailsDisplay from "./classDetailDisplay";
import { useState, useEffect, useRef } from "react";
import { ClassData } from "../classView/classTable";
import { useParams } from "next/navigation";
import { getClassDetails } from "../classView/classUtils";
import ClassStudentDisplay from "./classStudentDisplay";

const ClassDetail = () => {
  const [classDetail, setClassDetail] = useState<ClassData | undefined>();
  const [addStudent, setAddStudent] = useState<boolean>(false);
  const params = useParams();
  const addStudentRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const fetchClassDetails = async () => {
      const classData = await getClassDetails(params.classId as string);
      setClassDetail(classData);
    };
    fetchClassDetails();
  }, []);

  useEffect(() => {
    if (addStudent) {
      console.log("useEffect ran");
      addStudentRef.current?.showModal();
    } else {
      addStudentRef.current?.close();
    }
  }, [addStudent]);

  console.log(addStudentRef, "from the page");
  return (
    <div className="flex flex-col ml-28 gap-6">
      <h1 className="text-5xl font-bold">Class Details</h1>
      <Navbar
        buttons={[
          {
            buttonText: UI_TEXT.addClassButton,
            url: "/dashboard/classes/addClass",
          },
          {
            buttonText: UI_TEXT.addStudentsButton,
            onClick: () => {
              setAddStudent(true);
            },
          },
        ]}
      />
      <ClassDetailsDisplay classDetail={classDetail} />
      <ClassStudentDisplay
        classDetail={classDetail!}
        addStudent={addStudent}
        setAddStudent={setAddStudent}
        dialogRef={addStudentRef}
      />
    </div>
  );
};

const WrappedClassDetail = () => {
  return (
    <DashboardLayout>
      <ClassDetail />
    </DashboardLayout>
  );
};

export default WrappedClassDetail;
