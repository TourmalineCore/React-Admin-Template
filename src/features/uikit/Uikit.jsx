import { useState } from 'react';
import {
  Button, Input, NativeSelect, CheckField,
} from '@tourmalinecore/react-tc-ui-kit';
import ContentCard from '../../components/ContentCard/ContentCard';
import '../calendar/Calendar.css';

const checkFieldsData = {
  1: 'label-1',
  2: 'label-2',
};

export default function Uikit() {
  const [inputValue, setInputValue] = useState('');
  const [selectedValue, setSelectedValue] = useState();
  const [selectedCheckboxes, setSelectedCheckboxes] = useState(new Set());
  const [selectedRadio, setSelectedRadio] = useState();
  return (
    <ContentCard
      isStickyHead
      headerContent={(
        <div className="calendar-heading">Пример пакета Ui-kit</div>
      )}
    >
      <h4>Buttons:</h4>

      <Button
        style={{
          marginRight: 16,
        }}
      >
        Обычная
      </Button>

      <Button
        style={{
          marginRight: 16,
        }}
        simple
      >
        Простая
      </Button>

      <Button
        style={{
          marginRight: 16,
        }}
        cancel
      >
        Отмена
      </Button>

      <h4>Inputs:</h4>

      <Input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />

      <h4>NativeSelect:</h4>

      <NativeSelect
        value={selectedValue}
        options={[{ label: 'option1', value: 1 }, { label: 'option2', value: 2 }]}
        onChange={(option) => {
          setSelectedValue(option.value);
        }}
      />

      <h4>CheckField:</h4>
      {Object.entries(checkFieldsData).map(([value, label]) => (
        <CheckField
          key={value}
          style={{
            marginBottom: 16,
          }}
          label={label}
          checked={selectedCheckboxes.has(value)}
          onChange={() => {
            setSelectedCheckboxes((prevSelected) => {
              if (prevSelected.has(value)) {
                return new Set([...prevSelected].filter((x) => x !== value));
              }

              return new Set([...prevSelected, value]);
            });
          }}
        />
      ))}

      <h4>As radiobuttons:</h4>

      {Object.entries(checkFieldsData).map(([value, label]) => (
        <CheckField
          key={value}
          style={{
            marginBottom: 16,
          }}
          viewType="radio"
          label={label}
          checked={value === selectedRadio}
          onChange={() => {
            setSelectedRadio(value);
          }}
        />
      ))}
    </ContentCard>
  );
}
