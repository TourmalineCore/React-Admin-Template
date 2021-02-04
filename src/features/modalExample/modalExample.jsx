import React, { useState } from 'react';
import { Modal } from '@tourmalinecore/react-tc-modal';
import { Button } from '@tourmalinecore/react-tc-ui-kit';

export default function modalExample() {
  const [IsModalVisible, setIsModalVisible] = useState(false);

  return (
    <div>

      <Button
        type="button"
        className=""
        disabled={false}
        onClick={() => setIsModalVisible(true)}
      >
        Открыть
      </Button>

      {IsModalVisible && (
        <Modal
          title="Modal title"
          content="Modal content text"
          overlay
          maxWidth={600}
          onClose={() => setIsModalVisible(false)}
          showApply
          onApply={() => setIsModalVisible(false)}
          applyText="text for apply btn"
          showCancel
          onCancel={() => setIsModalVisible(false)}
          language="ru"
        />
      )}
    </div>
  );
}
