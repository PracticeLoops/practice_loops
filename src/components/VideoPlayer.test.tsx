import { getByRole, render, screen } from '@testing-library/react';
import { VideoPlayer } from './VideoPlayer';
import { act } from 'react-dom/test-utils';

describe("Webcam Test", () => {
    act(() => { render(<VideoPlayer />); })
    it('has webcam', () => {
        const videoPlayer = screen.getByTestId("test-video");
        expect(videoPlayer).toBeInTheDocument();
    })
})

