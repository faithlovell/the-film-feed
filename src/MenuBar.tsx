import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./Form.css";

// interface RoleSelectProps {
//     answer: string;
// }

export function RoleSelect({
    options
}: {
    options: ["Movie Master", "Movie Mentor", "Movie Member"];
}): JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);
    function newAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <h3 style={{ color: "#FFF5EE" }}>Role Selection</h3>
            <Form.Group controlId="favoriteColors">
                <Form.Select id="dropDown" value={answer} onChange={newAnswer}>
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
