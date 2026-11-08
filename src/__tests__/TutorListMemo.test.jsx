import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TutorList from '../components/TutorList';
import TutorCard from '../components/TutorCard';

vi.mock('../components/TutorCard', () => ({
  default: vi.fn(() => <div data-testid="tutor-card" />),
}));

describe('TutorList Performance Regression Test', () => {
  it('коректно передає елементи та формує список репетиторів', () => {
    const mockTutors = [
      { id: 1, name: 'Репетитор 1' },
      { id: 2, name: 'Репетитор 2' },
    ];

    render(
      <TutorList
        tutors={mockTutors}
        favorites={[1]}
        selectedId={null}
        onSelect={() => {}}
        onToggleFavorite={() => {}}
      />
    );

    expect(TutorCard).toHaveBeenCalledTimes(4); // 2 tutors + 2 for IntersectionObserver
  });
});