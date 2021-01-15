import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows


test("form header renders", () => {
    render(<CheckoutForm />);
  });
  
  test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />);
  
    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/Last name/i);
    const address = screen.getByLabelText(/Address/i);
    const city = screen.getByLabelText(/City/i);
    const state = screen.getByLabelText(/State/i);
    const zip = screen.getByLabelText(/Zip/i);
  
    const button = screen.getByRole("button", { name: /checkout/i });
  
    fireEvent.change(firstName, {
      target: { name: "firstName", value: "Chris" },
    });
    fireEvent.change(lastName, {
      target: { name: "lastName", value: "Barba" },
    });
    fireEvent.change(address, {
      target: { name: "address", value: "350 S Pritchard Ave" },
    });
    fireEvent.change(city, { target: { name: "city", value: "Fullerton" } });
    fireEvent.change(state, { target: { name: "state", value: "CA" } });
    fireEvent.change(zip, { target: { name: "zip", value: "92833" } });
  
    fireEvent.click(button);
  
    const end = await screen.findByTestId("successMessage");
  
    const nameEnd = screen.getByTestId(/name/i);
    const addressEnd = screen.getByTestId(/address/i);
    const locationEnd = screen.getByTestId(/location/i);
  
    expect(nameEnd).toHaveTextContent(/chris barba/i);
    expect(addressEnd).toHaveTextContent(/350 S Pritchard Ave/i);
    expect(locationEnd).toHaveTextContent(/Fullerton/i);
  });