import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const someTypes = {
  firstType: 'firstType',
  secondType: 'secondType',
};

export const someTypesStrings = {
  firstType: 'First Type',
  secondType: 'Second Type',
};

export const all = {
  label: 'All',
  value: '',
};

export const someTypesOptions = Object.keys(someTypes).map((x) => ({ label: someTypesStrings[x], value: x }));

export const data = [
  {
    actualSales: 5096606.9,
    bonusObject: 'CARDIO',
    bonusObjectType: 'BusinessUnit',
    calculatedBonus: 2774.4,
    plannedSales: 5593097.36,
    previousSales: 4354489.83,
    targetAchivementPercent: 91.12,
    weight: 25,
    weightForSorting: '025,00-CARDIO',
    someType: someTypes.firstType,
  },
  {
    actualSales: 21455221.56,
    bonusObject: 'CNS',
    bonusObjectType: 'BusinessUnit',
    calculatedBonus: 7507.2,
    plannedSales: 23126748.43,
    previousSales: 19740627.1,
    targetAchivementPercent: 92.77,
    weight: 25,
    weightForSorting: '025,00-CNS',
    someType: someTypes.secondType,
  },
  {
    actualSales: 7709519.93,
    bonusObject: 'GYNO',
    bonusObjectType: 'BusinessUnit',
    calculatedBonus: 36755.2,
    plannedSales: 7385674.05,
    previousSales: 6572816.8,
    targetAchivementPercent: 104.38,
    weight: 25,
    weightForSorting: '025,00-GYNO',
    someType: someTypes.firstType,
  },
  {
    actualSales: 12931847.81,
    bonusObject: 'OTC',
    bonusObjectType: 'BusinessUnit',
    calculatedBonus: 36480,
    plannedSales: 12424437.43,
    previousSales: 11570609.21,
    targetAchivementPercent: 104.08,
    weight: 25,
    weightForSorting: '025,00-OTC',
    someType: someTypes.secondType,
  },
];

export const actions = [
  {
    name: 'open-dictionaries-action',
    show: () => true,
    renderIcon: () => <FontAwesomeIcon icon={faBook} />,
    renderText: () => 'Open Dictionaries',
  },
];

export function renderBonusObject(row) {
  return (
    <b>
      {row.original.bonusObject}
    </b>
  );
}
