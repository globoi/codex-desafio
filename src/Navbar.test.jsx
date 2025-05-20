import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
//import '@testing-library/jest-dom';

describe('Navbar', () => {
  it('deve renderizar a logo com o link correto', () => {
    render(<Navbar />);

    const logoImg = screen.getByAltText('Logo G1');
    expect(logoImg).toBeInTheDocument();
    expect(logoImg).toHaveAttribute('src');

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');
  });
});