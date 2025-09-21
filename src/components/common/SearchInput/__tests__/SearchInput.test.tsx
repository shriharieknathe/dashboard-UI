import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchInput from '../SearchInput'

describe('SearchInput', () => {
  const defaultProps = {
    value: '',
    onChange: vi.fn(),
    placeholder: 'Search...',
  }

  it('should render with default props', () => {
    render(<SearchInput {...defaultProps} />)
    
    const input = screen.getByPlaceholderText('Search...')
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('')
  })

  it('should display the provided value', () => {
    render(<SearchInput {...defaultProps} value="test search" />)
    
    const input = screen.getByDisplayValue('test search')
    expect(input).toBeInTheDocument()
  })

  it('should call onChange when user types', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    
    render(<SearchInput {...defaultProps} onChange={onChange} />)
    
    const input = screen.getByPlaceholderText('Search...')
    await user.type(input, 'hello')
    
    expect(onChange).toHaveBeenCalledTimes(5)
    expect(onChange).toHaveBeenCalledWith('h')
    expect(onChange).toHaveBeenCalledWith('e')
    expect(onChange).toHaveBeenCalledWith('l')
    expect(onChange).toHaveBeenCalledWith('l')
    expect(onChange).toHaveBeenCalledWith('o')
  })


  it('should be disabled when disabled prop is true', () => {
    render(<SearchInput {...defaultProps} disabled />)
    
    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()
  })

  it('should have search icon', () => {
    render(<SearchInput {...defaultProps} />)
    
    // The search icon should be present (it's a Lucide icon)
    const icon = screen.getByRole('textbox').parentElement?.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })
})
