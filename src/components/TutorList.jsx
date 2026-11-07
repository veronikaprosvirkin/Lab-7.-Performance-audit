import { useRef } from 'react';
import TutorCard from './TutorCard';
import { useMemo } from 'react';

export default function TutorList({
  tutors,
  favorites,
  selectedId,
  onSelect,
  onToggleFavorite,
  style,
}) {
  const containerRef = useRef(null);

  const favoriteIds = useMemo(() => new Set(favorites), [favorites]);

  return (
    <div className="tutor-grid" ref={containerRef} style={style}>
      {tutors.map((tutor) => (
        <TutorCard
          key={tutor.id}
          tutor={tutor}
          isFavorite={favoriteIds.has(tutor.id)}
          isSelected={tutor.id === selectedId}
          onSelect= {onSelect}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
