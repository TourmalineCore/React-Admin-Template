import { Link } from 'react-router-dom';

import './Breadcrumbs.css';

export default function Breadcrumbs({
  list = [],
}) {
  return (
    <ul className="breadcrumbs">
      {list.map(({ path, label }, i) => (
        <li key={path} className="breadcrumbs__item">
          {
            i !== list.length - 1
              ? <Link className="breadcrumbs__link" to={path}>{label}</Link>
              : label
          }
        </li>
      ))}
    </ul>
  );
}
