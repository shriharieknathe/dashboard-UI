import { render, screen } from '@testing-library/react'
import MetricsGrid from '../MetricsGrid'

describe('MetricsGrid', () => {
  it('should render all metric cards', () => {
    render(<MetricsGrid />)
    
    // Check if all metric cards are rendered
    expect(screen.getByText('Customers')).toBeInTheDocument()
    expect(screen.getByText('Orders')).toBeInTheDocument()
    expect(screen.getByText('Revenue')).toBeInTheDocument()
    expect(screen.getByText('Growth')).toBeInTheDocument()
  })

  it('should display correct metric values', () => {
    render(<MetricsGrid />)
    
    // Check metric values
    expect(screen.getByText('3,781')).toBeInTheDocument() // Customers
    expect(screen.getByText('1,219')).toBeInTheDocument() // Orders
    expect(screen.getByText('$695')).toBeInTheDocument() // Revenue
    expect(screen.getByText('30.1%')).toBeInTheDocument() // Growth
  })

  it('should display trend indicators', () => {
    render(<MetricsGrid />)
    
    // Check for trend indicators (positive/negative)
    expect(screen.getByText('+11.01%')).toBeInTheDocument()
    expect(screen.getByText('-0.03%')).toBeInTheDocument()
    expect(screen.getByText('+15.03%')).toBeInTheDocument()
    expect(screen.getByText('+6.08%')).toBeInTheDocument()
  })

  it('should have proper CSS classes', () => {
    render(<MetricsGrid />)
    
    const metricsGrid = screen.getByText('Customers').closest('.metrics-grid')
    expect(metricsGrid).toBeInTheDocument()
    
    // Check individual metric card classes
    const customersCard = screen.getByText('Customers').closest('.metric-card')
    expect(customersCard).toHaveClass('customers')
    
    const ordersCard = screen.getByText('Orders').closest('.metric-card')
    expect(ordersCard).toHaveClass('orders')
  })
})
