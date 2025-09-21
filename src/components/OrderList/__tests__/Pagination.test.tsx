import { render, screen, fireEvent } from '@testing-library/react'
import Pagination from '../Pagination'

describe('Pagination', () => {
  const defaultProps = {
    currentPage: 1,
    totalPages: 5,
    totalItems: 25,
    onPageChange: vi.fn(),
  }

  it('should render pagination info', () => {
    render(<Pagination {...defaultProps} />)
    
    expect(screen.getByText('Showing 1-5 of 25 orders')).toBeInTheDocument()
  })

  it('should render correct number of page buttons', () => {
    render(<Pagination {...defaultProps} />)
    
    // Should have 5 page buttons (1, 2, 3, 4, 5)
    const pageButtons = screen.getAllByRole('button').filter(button => 
      /^\d+$/.test(button.textContent || '')
    )
    expect(pageButtons).toHaveLength(5)
  })

  it('should highlight current page', () => {
    render(<Pagination {...defaultProps} currentPage={3} />)
    
    const currentPageButton = screen.getByRole('button', { name: '3' })
    expect(currentPageButton).toHaveClass('active')
  })

  it('should call onPageChange when page button is clicked', () => {
    const onPageChange = vi.fn()
    render(<Pagination {...defaultProps} onPageChange={onPageChange} />)
    
    const page2Button = screen.getByRole('button', { name: '2' })
    fireEvent.click(page2Button)
    
    expect(onPageChange).toHaveBeenCalledWith(2)
  })

  it('should disable previous button on first page', () => {
    render(<Pagination {...defaultProps} currentPage={1} />)
    
    const prevButton = screen.getByRole('button', { name: /previous/i })
    expect(prevButton).toBeDisabled()
  })

  it('should disable next button on last page', () => {
    render(<Pagination {...defaultProps} currentPage={5} />)
    
    const nextButton = screen.getByRole('button', { name: /next/i })
    expect(nextButton).toBeDisabled()
  })

  it('should handle edge case when currentPage exceeds totalPages', () => {
    render(<Pagination {...defaultProps} currentPage={10} />)
    
    // Should show info for the last page
    expect(screen.getByText('Showing 21-25 of 25 orders')).toBeInTheDocument()
  })

  it('should render navigation buttons', () => {
    render(<Pagination {...defaultProps} />)
    
    expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
  })
})
