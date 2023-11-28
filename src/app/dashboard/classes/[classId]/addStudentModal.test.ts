import { ActionMeta } from "react-select";
import { StudentOption } from "./addStudentModal";

describe("handleSelectChange", () => {
  it("should update selected students", () => {
    const setSelectedStudents = jest.fn();
    const selectedStudents = [
      { id: "1", label: "John Doe", value: "John Doe" },
    ];
    const actionMeta: ActionMeta<StudentOption> = { action: "select-option" };

    const handleSelectChange = (
      selectedStudents: readonly StudentOption[],
      actionMeta: ActionMeta<StudentOption>
    ) => {
      if (selectedStudents) {
        setSelectedStudents(Array.from(selectedStudents));
      } else {
        setSelectedStudents([]);
      }
    };

    handleSelectChange(selectedStudents, actionMeta);

    expect(setSelectedStudents).toHaveBeenCalledWith(selectedStudents);
  });

  it("should clear selected students when none are selected", () => {
    const setSelectedStudents = jest.fn();
    const actionMeta: ActionMeta<StudentOption> = { action: "clear" };

    const handleSelectChange = (
      selectedStudents: readonly StudentOption[],
      actionMeta: ActionMeta<StudentOption>
    ) => {
      if (selectedStudents) {
        setSelectedStudents(Array.from(selectedStudents));
      } else {
        setSelectedStudents([]);
      }
    };

    handleSelectChange(undefined, actionMeta);

    expect(setSelectedStudents).toHaveBeenCalledWith([]);
  });
});
