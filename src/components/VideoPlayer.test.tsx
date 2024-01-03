import { render, screen } from '@testing-library/react';
import { VideoPlayer } from './VideoPlayer';

it('has some text', () => {
    render(<VideoPlayer />);
    const textElement = screen.getByText(/video player/i);
    expect(textElement).toBeInTheDocument();
})