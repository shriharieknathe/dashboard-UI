import { renderHook } from '@testing-library/react'
import { usePageTitle } from '../usePageTitle'

// Mock document.title
const mockTitle = 'Original Title'
Object.defineProperty(document, 'title', {
  writable: true,
  value: mockTitle,
})

describe('usePageTitle', () => {
  beforeEach(() => {
    document.title = mockTitle
  })

  it('should update document title on mount', () => {
    renderHook(() => usePageTitle('Test Page'))
    
    expect(document.title).toBe('Test Page - ByeWind Dashboard')
  })

  it('should restore original title on unmount', () => {
    const { unmount } = renderHook(() => usePageTitle('Test Page'))
    
    expect(document.title).toBe('Test Page - ByeWind Dashboard')
    
    unmount()
    
    expect(document.title).toBe(mockTitle)
  })

  it('should update title when title changes', () => {
    const { rerender } = renderHook(
      ({ title }) => usePageTitle(title),
      { initialProps: { title: 'First Page' } }
    )
    
    expect(document.title).toBe('First Page - ByeWind Dashboard')
    
    rerender({ title: 'Second Page' })
    
    expect(document.title).toBe('Second Page - ByeWind Dashboard')
  })
})
