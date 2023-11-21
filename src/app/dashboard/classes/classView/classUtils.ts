export const CLASS_TABLE = {
  className: "Class Name",
  classLocation: "Class Location",
  classStartTime: "Start Time",
  classEndTime: "End Time",
  classTeacher: "Teacher",
  classAccompanist: "Accompanist",
};

export const getAllClasses = async () => {
  const response = await fetch("../../../api/classes", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
