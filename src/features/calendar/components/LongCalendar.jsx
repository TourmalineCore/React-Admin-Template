import ContentCard from '../../../components/ContentCard/ContentCard';

export default function LongCalendar() {
  return (
    <ContentCard
      isStickyHead
      headerContent={(
        <div className="calendar-heading">Longest Calendar Ever</div>
      )}
    >
      <div style={{ height: 2000, backgroundColor: '#f8fcff' }} />
    </ContentCard>
  );
}
