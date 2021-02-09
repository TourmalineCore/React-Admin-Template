import { useState } from 'react';
import { Modal } from '@tourmalinecore/react-tc-modal';
import { Button } from '@tourmalinecore/react-tc-ui-kit';
import '../calendar/Calendar.css';
import ContentCard from '../../components/ContentCard/ContentCard';

export default function ModalExample() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isIconVisible] = useState(true);
  return (
    <ContentCard
      isStickyHead
      headerContent={(
        <div className="calendar-heading">Пример пакета Modal</div>
      )}
    >

      <Button
        onClick={() => setIsModalVisible(true)}
      >
        Открыть
      </Button>

      {isModalVisible && (
        <Modal
          title="Modal title"
          icon={isIconVisible
            ? (
              <svg width="18" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                {/* eslint-disable-next-line max-len */}
                <path d="M1 .9h0v.6s0 0 0 0l5.8 7v6.4c0 .2 0 .4.3.5h0a.6.6 0 00.5 0h0l3.3-1.6s0 0 0 0c.2 0 .3-.3.3-.5h0V8.5l5.8-7a.6.6 0 00-.5-1h-15C1.3.5 1 .7 1 1zm9.2 7s0 0 0 0l-.2.4s0 0 0 0v4.6l-2 1V8.3a.6.6 0 00-.2-.4l-5-6.2h12.5l-5.1 6.2z" fill="#27293D" stroke="#27293D" strokeWidth=".2" />
              </svg>
            )
            : false}
          content="Modal content text"
          overlay
          onClose={() => setIsModalVisible(false)}
          showApply
          onApply={() => setIsModalVisible(false)}
          applyText="Apply"
          showCancel
          onCancel={() => setIsModalVisible(false)}
        />
      )}
    </ContentCard>
  );
}
