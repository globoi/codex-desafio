import { render, screen } from '@testing-library/react';
import NoticiaDestaque from './NoticiaDestaque';

const mockNoticia = {
  url: 'https://exemplo.com/noticia',
  section: 'Política',
  title: 'Título da Notícia',
  summary: 'Resumo da notícia importante.',
  image: 'https://exemplo.com/imagem.jpg',
};

describe('NoticiaDestaque', () => {
  it('não renderiza nada quando a notícia é nula', () => {
    const { container } = render(<NoticiaDestaque noticia={null} />);
    expect(container.firstChild).toBeNull();
  });

  it('renderiza título, seção, resumo e imagem corretamente', () => {
    render(<NoticiaDestaque noticia={mockNoticia} />);

    expect(screen.getByText(mockNoticia.section)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(mockNoticia.title);
    expect(screen.getByText(mockNoticia.summary)).toBeInTheDocument();
    expect(screen.getByAltText(mockNoticia.title)).toHaveAttribute('src', mockNoticia.image);
  });

  it('envolve o conteúdo com um link correto', () => {
    render(<NoticiaDestaque noticia={mockNoticia} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', mockNoticia.url);
  });
});