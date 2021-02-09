import { useState } from 'react';

import { Modal } from '@tourmalinecore/react-tc-modal';
import { Button } from '@tourmalinecore/react-tc-ui-kit';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

import ContentCard from '../../components/ContentCard/ContentCard';

export default function ModalExample() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <ContentCard
      isStickyHead
      headerContent={(
        <div className="calendar-heading">Sample package Modal</div>
      )}
    >

      <Button
        onClick={() => setIsModalVisible(true)}
      >
        Open Modal
      </Button>

      {isModalVisible && (
        <Modal
          title="Modal title"
          icon={<FontAwesomeIcon icon={faFlag} />}
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
