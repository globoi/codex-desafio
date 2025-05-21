import { render, screen } from '@testing-library/react';
import Anuncio from './Anuncio';

describe('<Anuncio />', () => {
  it('renderiza o componente de anúncio corretamente', () => {
    render(<Anuncio index={1} />);
    
    const img = screen.getByAltText('Anúncio');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://picsum.photos/600/400');

    expect(screen.getByText('Anunciante')).toBeInTheDocument();

    expect(screen.getByText('Deixe aqui o seu anúncio.')).toBeInTheDocument();

    expect(screen.getByText('Descrição do anúncio')).toBeInTheDocument();
  });
});