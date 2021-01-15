import { useEffect, useState } from 'react';

export function useBreadcrumbs(routes, currentPath) {
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    setBreadcrumbs(getBreadcrumbs(routes, currentPath));
  }, [currentPath]);

  return breadcrumbs;
}

function getBreadcrumbs(routes, currentPath) {
  const path = [];

  let found = false;

  function search(haystack) {
    for (let i = 0; i !== haystack.length; i++) {
      path.push({
        label: haystack[i].label,
        path: haystack[i].path,
      });

      if (haystack[i].path === currentPath) {
        found = true;
        break;
      }

      if (haystack[i].nestedItems && haystack[i].nestedItems.length) {
        search(haystack[i].nestedItems);
        if (found) break;
      }

      path.pop();
    }
  }

  search(routes);

  return path;
}
