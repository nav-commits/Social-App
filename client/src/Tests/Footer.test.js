import '@testing-library/jest-dom/extend-expect';
import Footer from "../Components/Footer.jsx";
import React from 'react';
import { render } from '@testing-library/react';

test('should render footer component', () =>{
   const {getByTestId} = render(<Footer/>);
   const footer = getByTestId('footer-example');   
   expect(footer).toBeInTheDocument();
})
