import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Home from '@/app/page'

describe('Design System Setup', () => {
    it('renders the Home page', () => {
        const { container } = render(<Home />)
        expect(container).toBeTruthy()
    })

    it('contains the Urdu font class', () => {
        render(<Home />)
        // Check for Urdu text
        const urduText = screen.getByText('غیر ملکی کرنسی سیکھنے کا مرکز')
        expect(urduText).toBeTruthy()
        // Verify class application on the paragraph
        expect(urduText.className).toContain('font-urdu')
    })

    it('uses Deep Ocean background', () => {
        const { container } = render(<Home />)
        const main = container.querySelector('main')
        expect(main?.className).toContain('bg-bg-APP')
    })
})
