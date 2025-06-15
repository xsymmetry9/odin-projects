import {describe, it, expect} from "vitest";
import { render, screen } from '@testing-library/react';
import ChangeHeading from "./ChangeHeading"
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

describe("App", () =>{
    it("renders correct headline", () =>{
        render(
            <MemoryRouter>
                <ChangeHeading title="Welcome"/>
            </MemoryRouter>);
        expect(screen.getByRole("heading").textContent).toMatch(/Welcome/i);
    });

    it("renders 'Jessica' after the button is clicked", async () =>{
        const user = userEvent.setup();

        render(
            <MemoryRouter>
                <ChangeHeading title="Welcome"/>
            </MemoryRouter>);
        
        const button = screen.getByRole('button', {name: "Click me!"});

        await user.click(button);

        const heading = screen.getByRole("heading");
        expect(heading).toHaveTextContent(/Jessica/i);
    })

})