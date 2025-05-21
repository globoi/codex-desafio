import { render, screen, fireEvent } from '@testing-library/react';
import Video from './Video';

const mockNoticia = {
  title: 'Exemplo de Vídeo',
  summary: 'Descrição do vídeo',
  image: 'https://via.placeholder.com/150',
  video: {
    source: 'https://example.com/video.mp4'
  }
};

describe('Video Component', () => {
  it('deve renderizar corretamente com os dados fornecidos', () => {
    render(<Video noticia={mockNoticia} index={0} />);
    
    expect(screen.getByTestId('video-title')).toBeInTheDocument();
    expect(screen.getByText('Descrição do vídeo')).toBeInTheDocument();
    expect(screen.getByText('Video')).toBeInTheDocument();
    expect(screen.getByTestId('video-thumbnail')).toBeInTheDocument();
  });

  it('deve abrir o modal ao clicar no item', () => {
    render(<Video noticia={mockNoticia} index={0} />);

    fireEvent.click(screen.getByTestId('video-list-item'));

    expect(screen.getByTestId('video-modal')).toBeVisible();
  });

  it('deve fechar o modal ao clicar no botão de fechar', () => {
    render(<Video noticia={mockNoticia} index={0} />);

    fireEvent.click(screen.getByTestId('video-list-item'));

    const closeButton = screen.getByRole('button', { name: /fechar modal/i });
    fireEvent.click(closeButton);

    // Como o modal fecha, o botão de fechar deve desaparecer
    expect(screen.queryByRole('button', { name: /fechar modal/i })).not.toBeInTheDocument();
  });
});