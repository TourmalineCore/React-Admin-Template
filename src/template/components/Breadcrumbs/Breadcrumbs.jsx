import { Link } from 'react-router-dom';

export default function Breadcrumbs({
  list = [],
}) {
  return !list.length
    ? 'Homepage'
    : (
      <ul className="breadcrumbs">
        {list.map(({ breadcrumb, key }, i) => (
          <li key={key} className="breadcrumbs__item">
            {
            i !== list.length - 1
              ? <Link className="breadcrumbs__link" to={key}>{breadcrumb}</Link>
              : breadcrumb
          }
          </li>
        ))}
      </ul>
    );
}
