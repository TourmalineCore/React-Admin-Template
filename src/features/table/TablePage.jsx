import { ClientTable, SelectColumnFilter } from '@tourmalinecore/react-table-responsive';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import ContentCard from '../../components/ContentCard/ContentCard';
import DefaultCardHeader from '../../components/DefaultCardHeader/DefaultCardHeader';

import {
  all, someTypesOptions, data, someTypesStrings,
} from './tableData';

export default function TablePage() {
  const actions = [
    {
      name: 'edit-row-action',
      show: () => true,
      renderIcon: () => <FontAwesomeIcon icon={faEdit} />,
      renderText: () => 'Edit Row',
    },
  ];

  return (
    <ContentCard
      isStickyHead
      headerContent={(
        <DefaultCardHeader>Responsive Table Demo</DefaultCardHeader>
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
        maxStillMobileBreakpoint={1200}
        actions={actions}
        columns={[
          {
            Header: 'Bonus Object',
            accessor: 'bonusObject',
            filter: 'fuzzyText',
            nonMobileColumn: true,
            principalFilterableColumn: true,
            Cell: ({ row }) => renderBonusObject(row),
            Footer: () => <strong>Total</strong>,
          },
          {
            Header: 'Weight (%)',
            accessor: 'weightForSorting',
            width: 80,
            disableFilters: true,
            Footer: () => 100,
          },
          {
            Header: 'Planned (₽)',
            accessor: 'plannedSales',
            disableFilters: true,
            Footer: () => '48 529 957,27 ₽',
          },
          {
            Header: 'Previous (₽)',
            accessor: 'previousSales',
            disableSortBy: true,
            disableFilters: true,
            Footer: () => '42 238 542,94 ₽',
          },
          {
            Header: 'Actual (₽)',
            accessor: 'actualSales',
            disableSortBy: true,
            disableFilters: true,
            Footer: () => '47 193 196,2 ₽',
          },
          {
            Header: 'Target (%)',
            accessor: 'targetAchivementPercent',
            width: 80,
            disableSortBy: true,
            disableFilters: true,
            Footer: () => '97,25',
          },
          {
            Header: 'Bonus (₽)',
            id: 'calculatedBonus',
            noFooterColumn: true,
            accessor: (row) => row.forcastedBonus || row.calculatedBonus,
            Cell: (row) => `${row.value} ₽`,
          },
          {
            Header: 'Type',
            accessor: 'someType',
            minWidth: 200,
            maxWidth: 400,
            noFooterColumn: true,
            Cell: (cell) => someTypesStrings[cell.value],
            Filter: SelectColumnFilter,
            selectFilterOptions: [all, ...someTypesOptions],
          },
        ]}
      />
    </ContentCard>
  );
}

function renderBonusObject(row) {
  return (
    <i>
      {row.original.bonusObject}
    </i>
  );
}
