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
import { handleRemoveStudent } from "./classEditUtils";

export type StudentToDeleteType = {
  studentId: string;
  studentName: string;
};

const ClassDetail = () => {
  const [classDetail, setClassDetail] = useState<ClassData | undefined>();
  const [updateTable, setUpdateTable] = useState<boolean>(false);
  const [studentsToDelete, setStudentsToDelete] = useState<
    StudentToDeleteType[]
  >([]);
  const [addStudent, setAddStudent] = useState<boolean>(false);
  const params = useParams();
  const addStudentRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const fetchClassDetails = async () => {
      const classData = await getClassDetails(params.classId as string);
      setClassDetail(classData);
      setUpdateTable(false);
    };
    fetchClassDetails();
  }, [updateTable]);

  useEffect(() => {
    if (addStudent) {
      addStudentRef.current?.showModal();
    } else {
      addStudentRef.current?.close();
    }
  }, [addStudent]);

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
          ...(studentsToDelete.length > 0
            ? [
                {
                  buttonText: UI_TEXT.removeStudent,
                  onClick: () => {
                    handleRemoveStudent(studentsToDelete, classDetail?.id);
                    setUpdateTable(true);
                    setStudentsToDelete([]);
                  },
                },
              ]
            : []),
        ]}
      />
      <ClassDetailsDisplay classDetail={classDetail} />
      <ClassStudentDisplay
        classDetail={classDetail!}
        addStudent={addStudent}
        setAddStudent={setAddStudent}
        dialogRef={addStudentRef}
        setUpdateTable={setUpdateTable}
        studentsToDelete={studentsToDelete}
        setStudentsToDelete={setStudentsToDelete}
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
