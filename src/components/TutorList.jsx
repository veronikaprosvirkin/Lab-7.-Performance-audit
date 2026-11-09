import { useRef, useMemo, useState, useEffect, memo } from 'react';
import TutorCard from './TutorCard';

function TutorList({
  tutors,
  favorites,
  selectedId,
  onSelect,
  onToggleFavorite,
  style,
}) {
  const containerRef = useRef(null);
  const loadMoreRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(30);

  useEffect(() => {
    setVisibleCount(10);
  }, [tutors]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + 30, tutors.length));
        }
      },
      { rootMargin: '300px' }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [tutors.length]);

  const favoriteIds = useMemo(() => new Set(favorites), [favorites]);
  const visibleTutors = tutors.slice(0, visibleCount);

  return (
    <div className="tutor-grid" ref={containerRef} style={style}>
      {visibleTutors.map((tutor) => (
        <TutorCard
          key={tutor.id}
          tutor={tutor}
          isFavorite={favoriteIds.has(tutor.id)}
          isSelected={tutor.id === selectedId}
          onSelect={onSelect}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
      {visibleCount < tutors.length && (
        <div ref={loadMoreRef} style={{ height: '20px', gridColumn: '1 / -1' }} />
      )}
    </div>
  );
}
export default memo(TutorList);