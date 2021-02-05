import { useState } from 'react';
import { Modal } from '@tourmalinecore/react-tc-modal';
import { Button } from '@tourmalinecore/react-tc-ui-kit';
import ContentCard from '../../components/ContentCard/ContentCard';

export default function ModalExample() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <ContentCard>

      <h2>Modal:</h2>

      <Button
        onClick={() => setIsModalVisible(true)}
      >
        Открыть
      </Button>

      {isModalVisible && (
        <Modal
          title="Modal title"
          content="Modal content text"
          overlay
          onClose={() => setIsModalVisible(false)}
          showApply
          onApply={() => setIsModalVisible(false)}
          applyText="text for apply btn"
          showCancel
          onCancel={() => setIsModalVisible(false)}
        />
      )}
    </ContentCard>
  );
}
