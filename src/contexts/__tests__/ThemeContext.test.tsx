import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider, useTheme } from '../ThemeContext'

// Test component that uses the theme context
const TestComponent = () => {
  const { theme, toggleTheme, setTheme } = useTheme()
  
  return (
    <div>
      <div data-testid="current-theme">{theme}</div>
      <button data-testid="toggle-theme" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <button data-testid="set-light" onClick={() => setTheme('light')}>
        Set Light
      </button>
      <button data-testid="set-dark" onClick={() => setTheme('dark')}>
        Set Dark
      </button>
    </div>
  )
}

describe('ThemeContext', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should provide light theme by default', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    
    expect(screen.getByTestId('current-theme')).toHaveTextContent('light')
  })

  it('should toggle theme between light and dark', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    
    const toggleButton = screen.getByTestId('toggle-theme')
    const themeDisplay = screen.getByTestId('current-theme')
    
    expect(themeDisplay).toHaveTextContent('light')
    
    fireEvent.click(toggleButton)
    expect(themeDisplay).toHaveTextContent('dark')
    
    fireEvent.click(toggleButton)
    expect(themeDisplay).toHaveTextContent('light')
  })

  it('should set theme directly', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    
    const setDarkButton = screen.getByTestId('set-dark')
    const setLightButton = screen.getByTestId('set-light')
    const themeDisplay = screen.getByTestId('current-theme')
    
    fireEvent.click(setDarkButton)
    expect(themeDisplay).toHaveTextContent('dark')
    
    fireEvent.click(setLightButton)
    expect(themeDisplay).toHaveTextContent('light')
  })

  it('should persist theme in localStorage', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    
    const setDarkButton = screen.getByTestId('set-dark')
    fireEvent.click(setDarkButton)
    
    expect(localStorage.getItem('theme')).toBe('"dark"')
  })

  it('should load theme from localStorage', () => {
    localStorage.setItem('theme', '"dark"')
    
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )
    
    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark')
  })
})
