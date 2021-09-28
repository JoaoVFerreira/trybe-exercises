import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import renderWithRouter from './helper/renderWithRouter'
import About from './pages/About';

describe('Test the whole application', () => {

  it('should render the main page and the links content basics', () => {
    renderWithRouter(<App />)

    const titleHome = screen.getByRole('heading', {name: 'Home', level: 2})
    expect(titleHome).toBeInTheDocument();

    const linkAbout = screen.getByRole('link', {name: 'About'})
    expect(linkAbout).toBeInTheDocument();

    userEvent.click(linkAbout)
    const textAbout = screen.getByText(/about me/i)
    expect(textAbout).toBeInTheDocument();

    const linkContact = screen.getByRole('link', {name: 'Contact'})
    userEvent.click(linkContact)
    const textContact = screen.getByText(/contact myself/i)
    expect(textContact).toBeInTheDocument()

    const linkProjects = screen.getByRole('link', {name: 'Projects'})
    userEvent.click(linkProjects)
    const textProjects = screen.getByText(/my awesome projects/i)
    expect(textProjects).toBeInTheDocument();
  })

  it('test About component and the contents within', () => {
    renderWithRouter(<About />)

    const nameText = screen.getByRole('heading', {name: /joão ferreira/i, level: 3})
    expect(nameText).toBeInTheDocument()

    const imgProfile = screen.getByRole('img')
    expect(imgProfile).toBeInTheDocument()

    const imgAlt = screen.getByAltText('profile-man')
    expect(imgAlt).toBeInTheDocument()

    const descriptionText = screen.getByRole('heading', {name: /natureza/i, level: 4})
    expect(descriptionText).toBeInTheDocument()

    const liSkills = screen.getByTestId('js')
    expect(liSkills).toBeInTheDocument()
  })
})
