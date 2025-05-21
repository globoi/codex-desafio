import { render, screen, fireEvent } from '@testing-library/react';
import VideoModal from './VideoModal';

describe('VideoModal', () => {
  const mockOnClose = vi.fn();

  const props = {
    isOpen: true,
    onClose: mockOnClose,
    videoUrl: 'https://exemplo.com/video.mp4',
    title: 'Título do Vídeo',
  };

  it('não renderiza nada se isOpen for false', () => {
    const { container } = render(
      <VideoModal {...props} isOpen={false} />
    );
    expect(container.firstChild).toBeNull();
  });

  it('renderiza o título corretamente', () => {
    render(<VideoModal {...props} />);
    expect(screen.getByText(props.title)).toBeInTheDocument();
  });

  it('renderiza o vídeo com a URL correta', () => {
    render(<VideoModal {...props} />);
    const source = screen.getByRole('video').querySelector('source');
    expect(source).toHaveAttribute('src', props.videoUrl);
  });

  it('chama onClose ao clicar no botão X', () => {
    render(<VideoModal {...props} />);
    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalled();
  });
});