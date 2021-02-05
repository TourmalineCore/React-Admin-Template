import { ClientTable } from '@tourmalinecore/react-table-responsive';
import ContentCard from '../../components/ContentCard/ContentCard';

import {
  all, someTypesOptions, data, actions, someTypesStrings, renderBonusObject,
} from './ConstTablet';

export default function Table() {
  return (
    <ContentCard>
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
