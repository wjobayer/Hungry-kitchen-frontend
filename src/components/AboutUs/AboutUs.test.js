import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import AboutUs from './AboutUs'

test('render the page',()=>{
    render(<AboutUs/>)

    const aboutUsText=screen.getByText(/about us/i)
    expect(aboutUsText).toBeInTheDocument()
    const orderFoodText=screen.getByTestId('order-food-text');
    expect(orderFoodText).toBeInTheDocument()
    const imageAlt = screen.getByAltText(/pizza/i)
    expect(imageAlt).toBeInTheDocument();
    const image=screen.getByRole('img', { name: /pizza/i })
    expect(image).toBeInTheDocument()
})