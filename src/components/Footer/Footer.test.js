import { describe, it, expect } from 'vitest'; // Or use globals if enabled
import { render, screen } from '@testing-library/react';
import Footer from './Footer'; // Adjust path if necessary
import { BrowserRouter as Router } from 'react-router-dom'; // Footer might contain Links or other router-dependent components

describe('Footer Component', () => {
  it('renders contact information', () => {
    render(
      <Router> {/* Wrap with Router if Footer uses Link or other router components */}
        <Footer />
      </Router>
    );
    // Example: Check for a piece of text that should be in the footer
    // Adjust this assertion based on the actual content of your Footer
    expect(screen.getByText(/contacto/i)).toBeInTheDocument(); 
  });

  it('renders social media icons', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    // Check for the Instagram icon specifically by its class within an <a> tag
    const instagramLink = screen.getByRole('link', { name: /instagram/i });
    expect(instagramLink).toBeInTheDocument();
    
    // Check for the <i> tag with Font Awesome class within the link
    const iconElement = instagramLink.querySelector('i.fa-instagram');
    expect(iconElement).toBeInTheDocument();
  });
});
