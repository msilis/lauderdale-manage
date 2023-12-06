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
import Link from "next/link";
import { STYLE_UTILS } from "../../../../../utils/styleUtils";
import { LINK_ROUTE } from "../../../../../utils/linkRoutes";

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

  const removeStudentHandler = () => {
    handleRemoveStudent(studentsToDelete, classDetail?.id);
    setUpdateTable(true);
    setStudentsToDelete([]);
  };

  const addStudentHandler = () => {
    setAddStudent(true);
  };

  return (
    <div className="flex flex-col ml-28 gap-6">
      <h1 className="text-5xl font-bold">Class Details</h1>
      <Navbar>
        <Link href={LINK_ROUTE.addClass}>
          <button className={STYLE_UTILS.ghostButton}>
            {UI_TEXT.addClassButton}
          </button>
        </Link>
        <button className={STYLE_UTILS.ghostButton} onClick={addStudentHandler}>
          {UI_TEXT.addStudentsButton}
        </button>
        {studentsToDelete.length > 0 ? (
          <button
            className={STYLE_UTILS.redButton}
            onClick={() => handleRemoveStudent}
          >
            {UI_TEXT.removeStudent}
          </button>
        ) : (
          ""
        )}
      </Navbar>
      <ClassDetailsDisplay classDetail={classDetail} />
      <ClassStudentDisplay
        classDetail={classDetail!}
        addStudent={addStudent}
        setAddStudent={setAddStudent}
        dialogRef={addStudentRef}
        updateTable={updateTable}
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
