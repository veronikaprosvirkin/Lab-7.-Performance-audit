import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import TutorList from '../components/TutorList';
import TutorCard from '../components/TutorCard';

vi.mock('../components/TutorCard', () => ({
  default: vi.fn(() => <div data-testid="tutor-card" />),
}));

describe('Regression test: TutorList memoization', () => {
  it('prevents unnecessary TutorCard re-renders when props remain unchanged', () => {
    const mockTutors = [{ id: 1, name: 'Тестовий Репетитор', reviews: [], subjects: [] }];
    const mockFavorites = [];
    const mockOnSelect = () => {};
    const mockOnToggleFavorite = () => {};

    const { rerender } = render(
      <TutorList
        tutors={mockTutors}
        favorites={mockFavorites}
        selectedId={null}
        onSelect={mockOnSelect}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    vi.clearAllMocks();

    rerender(
      <TutorList
        tutors={mockTutors}
        favorites={mockFavorites}
        selectedId={null}
        onSelect={mockOnSelect}
        onToggleFavorite={mockOnToggleFavorite}
      />
    );

    expect(TutorCard).toHaveBeenCalledTimes(0);
  });
});