import { render, screen } from '@testing-library/react';
import Materia from './Materia';

const mockNoticia = {
  title: 'Título da Notícia',
  section: 'Política',
  summary: 'Resumo da notícia.',
  image: 'https://via.placeholder.com/150',
  url: '/noticia-exemplo'
};

describe('Materia', () => {
  it('renderiza corretamente com todos os dados', () => {
    render(<Materia noticia={mockNoticia} index={0} />);

    const image = screen.getByAltText('Título da Notícia');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockNoticia.image);

    const titleLink = screen.getAllByRole('link', { name: /título da notícia/i });
    expect(titleLink[0]).toHaveAttribute('href', mockNoticia.url);
    expect(titleLink[1]).toHaveAttribute('href', mockNoticia.url);

    expect(screen.getByText('Título da Notícia')).toBeInTheDocument();
    expect(screen.getByText('Política')).toBeInTheDocument();
    expect(screen.getByText('Resumo da notícia.')).toBeInTheDocument();
  });

  it('não renderiza a imagem se não for fornecida', () => {
    const noticiaSemImagem = { ...mockNoticia, image: null };
    render(<Materia noticia={noticiaSemImagem} index={1} />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});