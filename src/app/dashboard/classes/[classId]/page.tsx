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
import { BackButton } from "@/components/backButton/back";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { ClassDataContext } from "../../../../../utils/context/context";

export type StudentToDeleteType = {
  studentId: string;
  studentName: string;
};

const ClassDetail = () => {
  const [updateTable, setUpdateTable] = useState<boolean>(false);
  const [studentsToDelete, setStudentsToDelete] = useState<
    StudentToDeleteType[]
  >([]);
  const [addStudent, setAddStudent] = useState<boolean>(false);
  const params = useParams();
  const addStudentRef = useRef<HTMLDialogElement | null>(null);
  const router = useRouter();
  const { classDetail, setClassDetail } = useContext(ClassDataContext);

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

  const handleBackClick = () => {
    return router.back();
  };

  return (
    <div className="flex flex-col pl-28 gap-6">
      <h1 className="text-5xl font-bold">Class Details</h1>
      <Navbar className={STYLE_UTILS.navbarStyle}>
        <BackButton
          className={STYLE_UTILS.squareButton}
          onClick={handleBackClick}
        />
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
            onClick={() => removeStudentHandler()}
          >
            {UI_TEXT.removeStudent}
          </button>
        ) : (
          ""
        )}
        <Link href={LINK_ROUTE.generateClassList}>
          <button className={STYLE_UTILS.ghostButton}>
            {UI_TEXT.generateClassList}
          </button>
        </Link>
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
