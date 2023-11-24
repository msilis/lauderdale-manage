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
  const params = useParams();
  const addStudentRef = useRef();

  useEffect(() => {
    const fetchClassDetails = async () => {
      const classData = await getClassDetails(params.classId as string);
      setClassDetail(classData);
    };
    fetchClassDetails();
  }, []);
  return (
    <div className="flex flex-col ml-28 gap-6">
      <h1 className="text-5xl font-bold">Class Details</h1>
      <Navbar
        buttons={[
          {
            buttonText: UI_TEXT.addClassButton,
            url: "/dashboard/classes/addClass",
          },
        ]}
      />
      <ClassDetailsDisplay classDetail={classDetail} />
      <ClassStudentDisplay classDetail={classDetail!} />
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
