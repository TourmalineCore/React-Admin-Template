import { ClientTable } from '@tourmalinecore/react-table-responsive';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

import ContentCard from '../../components/ContentCard/ContentCard';

import {
  all, someTypesOptions, data, someTypesStrings,
} from './tableData';

function renderBonusObject(row) {
  return (
    <b>
      {row.original.bonusObject}
    </b>
  );
}

export default function Table() {
  const actions = [
    {
      name: 'open-dictionaries-action',
      show: () => true,
      renderIcon: () => <FontAwesomeIcon icon={faBook} />,
      renderText: () => 'Open Dictionaries',
    },
  ];

  return (
    <ContentCard
      isStickyHead
      headerContent={(
        <div className="calendar-heading">Sample package Tablet</div>
    )}
    >
      <ClientTable
        tableId="tc-story-bonus-table"
        data={data}
        order={{
          id: 'weightForSorting',
          desc: true,
        }}
        renderMobileTitle={(row) => renderBonusObject(row)}
        enableTableStatePersistance
        actions={actions}
        columns={[
          {
            Header: 'Bonus Object',
            accessor: 'bonusObject',
            filter: 'fuzzyText',
            Cell: ({ row }) => renderBonusObject(row),
            Footer: () => <strong>Total</strong>,
          },
          {
            Header: 'Weight (%)',
            accessor: 'weightForSorting',
            width: 80,
            Footer: () => 100,
          },
          {
            Header: 'Planned (₽)',
            accessor: 'plannedSales',
            Footer: () => '48 529 957,27 ₽',
          },
          {
            Header: 'Previous (₽)',
            accessor: 'previousSales',
            Footer: () => '42 238 542,94 ₽',
          },
          {
            Header: 'Actual (₽)',
            accessor: 'actualSales',
            Footer: () => '47 193 196,2 ₽',
          },
          {
            Header: 'Target (%)',
            accessor: 'targetAchivementPercent',
            width: 80,
            Footer: () => '97,25',
          },
          {
            Header: 'Forecasting',
            width: 260,
            minWidth: 140,
            id: 'newSlider',
            accessor: 'targetAchivementPercent',
            Cell: () => (<input type="range" min={0} max={100} value={79} readOnly />),
            twoRowsMobileLayout: true,
            noFooterColumn: true,
          },
          {
            Header: 'Bonus (₽)',
            id: 'calculatedBonus',
            accessor: (row) => row.forcastedBonus || row.calculatedBonus,
            Cell: (row) => `${row.value} ₽`,
            noFooterColumn: true,
          },
          {
            Header: 'Type',
            accessor: 'someType',
            minWidth: 200,
            maxWidth: 400,
            Cell: (cell) => someTypesStrings[cell.value],
            selectFilterOptions: [all, ...someTypesOptions],
            noFooterColumn: true,
          },
        ]}
      />
    </ContentCard>
  );
}
