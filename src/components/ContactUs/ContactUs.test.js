// import dependencies
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
// import react-testing methods
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
// the component to test
import ContactUs from './ContactUs'




test('Render the page',() => {
    render(<ContactUs/>)
    const contactUsText=screen.getByText(/contact us/i)
    expect(contactUsText).toBeInTheDocument()
    const image =screen.getByRole('img', { name: /food/i })
    expect(image).toBeInTheDocument()
    const contactText=screen.getByText(/let's start a conversation/i)
    expect(contactText).toBeInTheDocument()
    const contactButton=screen.getByRole('button', { name: /send/i })
    fireEvent.click(contactButton)
    
    
  })