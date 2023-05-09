import React from "react";
import { Form } from "react-bootstrap";
import "./Form.css";

interface RoleSelectProps {
    role: string;
    setRole: (newRole: string) => void;
    options: string[];
}

export function RoleSelect({
    role,
    setRole,
    options
}: RoleSelectProps): JSX.Element {
    function newAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setRole(event.target.value);
    }
    return (
        <div className="drop-down">
            <h3>Role Selection</h3>
            <Form.Group controlId="Users">
                <Form.Select id="dropDown" value={role} onChange={newAnswer}>
                    {options.map((ans) => (
                        <option key={ans} value={ans}>
                            {ans}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
        </div>
    );
}
