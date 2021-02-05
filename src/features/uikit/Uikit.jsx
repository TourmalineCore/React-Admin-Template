import { useState } from 'react';
import {
  Button, Input, NativeSelect, CheckField,
} from '@tourmalinecore/react-tc-ui-kit';
import ContentCard from '../../components/ContentCard/ContentCard';

const checkFieldsData = {
  1: 'label-1',
  2: 'label-2',
};

export default function Uikit() {
  const [selectedValue, setSelectedValue] = useState();
  const [selectedCheckboxes, setSelectedCheckboxes] = useState(new Set());
  const [selectedRadio, setSelectedRadio] = useState();
  return (
    <ContentCard>
      <h2>Buttons:</h2>

      <Button>
        text or jsx
      </Button>

      <h2>Inputs:</h2>

      <Input />

      <h2>NativeSelect:</h2>

      <NativeSelect
        value={selectedValue}
        options={[{ label: 'option1', value: 1 }, { label: 'option2', value: 2 }]}
        onChange={(option) => {
          setSelectedValue(option.value);
        }}
      />

      <h2>CheckField:</h2>
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

      <h2>As radiobuttons:</h2>

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
