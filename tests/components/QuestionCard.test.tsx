import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { QuestionCard } from '@/components/content/QuestionCard';

// Per TDD Skill: Test interaction logic, not visual layout
describe('QuestionCard', () => {
    const mockProps = {
        id: 'test-card-1',
        question: 'What is Forex?',
        children: <p>Forex is...</p>,
    };

    it('should render the question title correctly', () => {
        render(<QuestionCard {...mockProps} />);

        expect(screen.getByText('What is Forex?')).toBeInTheDocument();
    });

    it('should have aria-expanded="false" by default (collapsed)', () => {
        render(<QuestionCard {...mockProps} />);

        const button = screen.getByRole('button', { name: /what is forex/i });
        expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    it('should toggle aria-expanded on click', () => {
        render(<QuestionCard {...mockProps} />);

        const button = screen.getByRole('button', { name: /what is forex/i });

        // Initially collapsed
        expect(button).toHaveAttribute('aria-expanded', 'false');

        // Click to expand
        fireEvent.click(button);
        expect(button).toHaveAttribute('aria-expanded', 'true');

        // Click to collapse
        fireEvent.click(button);
        expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    it('should not render content when collapsed (AnimatePresence removes from DOM)', () => {
        render(<QuestionCard {...mockProps} />);

        // AnimatePresence removes content from DOM when collapsed
        const content = screen.queryByText('Forex is...');
        expect(content).not.toBeInTheDocument();
    });

    it('should render content when expanded', async () => {
        render(<QuestionCard {...mockProps} />);

        const button = screen.getByRole('button', { name: /what is forex/i });
        fireEvent.click(button);

        // Content should now be in the DOM
        const content = await screen.findByText('Forex is...');
        expect(content).toBeInTheDocument();
    });
});
