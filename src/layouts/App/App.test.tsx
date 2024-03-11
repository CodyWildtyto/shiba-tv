import { render, screen } from '@testing-library/react';

import App from './App';

test('renders main title', () => {
    render(<App />);

    const element = screen.getByText(/SHIBA TV/i);

    expect(element).toBeInTheDocument();
});
