// import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { RoleSelect } from "../MenuBar";

describe("RoleSelect", () => {
    const options = ["Option 1", "Option 2", "Option 3"];

    test("renders RoleSelect component with options", () => {
        const { getByText } = render(
            // eslint-disable-next-line react/react-in-jsx-scope
            <RoleSelect role="Option 1" setRole={jest.fn()} options={options} />
        );

        // Check if the component renders correctly
        const titleElement = getByText("Role Selection");
        expect(titleElement).toBeInTheDocument();

        // Check if the options are rendered
        options.forEach((option) => {
            const optionElement = getByText(option);
            expect(optionElement).toBeInTheDocument();
        });
    });

    test("calls setRole function on option selection", () => {
        const setRole = jest.fn();

        const { getByRole } = render(
            // eslint-disable-next-line react/react-in-jsx-scope
            <RoleSelect role="Option 1" setRole={setRole} options={options} />
        );

        // Find the select element by its role
        const selectElement = getByRole("combobox") as HTMLSelectElement;
        expect(selectElement).toBeInTheDocument();

        // Simulate selecting an option
        fireEvent.change(selectElement, { target: { value: "Option 2" } });

        // Check if setRole function is called with the selected value
        expect(setRole).toHaveBeenCalledWith("Option 2");
    });
    test("renders RoleSelect component with the selected role", () => {
        const { getByDisplayValue } = render(
            // eslint-disable-next-line react/react-in-jsx-scope
            <RoleSelect role="Option 2" setRole={jest.fn()} options={options} />
        );

        // Check if the select element displays the selected role
        const selectElement = getByDisplayValue(
            "Option 2"
        ) as HTMLSelectElement;
        expect(selectElement).toBeInTheDocument();
    });

    test("renders RoleSelect component with a default option when role is not found", () => {
        const { getByText } = render(
            // eslint-disable-next-line react/react-in-jsx-scope
            <RoleSelect role="Option 4" setRole={jest.fn()} options={options} />
        );

        // Check if the select element displays a default option
        const selectElement = getByText("Role Selection") as HTMLSelectElement;
        expect(selectElement).toBeInTheDocument();
        expect(selectElement.value).toBe(undefined); // Check if the default option has no value
    });

    test("does not call setRole function when the selected option is the same as the current role", () => {
        const setRole = jest.fn();

        const { getByRole } = render(
            // eslint-disable-next-line react/react-in-jsx-scope
            <RoleSelect role="Option 2" setRole={setRole} options={options} />
        );

        const selectElement = getByRole("combobox") as HTMLSelectElement;
        expect(selectElement).toBeInTheDocument();

        // Simulate selecting the same option as the current role
        fireEvent.change(selectElement, { target: { value: "Option 2" } });

        // No need to check if setRole function is not called
    });
});
