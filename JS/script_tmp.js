function addFilter(table, column, values, exclusive) {
  if(!table.hasAttribute('data-filtercount')) {
    table.setAttribute('data-filtercount', 1);
    table.setAttribute('data-filterid', 0);
    var filterId = 0;
  }
  else {
    var
      filterCount = parseInt(table.getAttribute('data-filtercount')) + 1,
      filterId = filterCount === 1 ?
        0 : parseInt(table.getAttribute('data-filterid')) + 1;
    table.setAttribute('data-filtercount', filterCount);
    table.setAttribute('data-filterid', filterId);
  }
  exclusive = !!exclusive;
  var
    filterClass = 'filt_' + filterId,
    tableParent = table.parentNode,
    tableSibling = table.nextSibling,
    rows = table.rows,
    rowCount = rows.length,
    r = table.tBodies[0].rows[0].rowIndex;
  if(tableParent)
    tableParent.removeChild(table);
  for(; r < rowCount; r++) {
    if((values.indexOf(rows[r].cells[column].textContent.trim()) !== -1) === exclusive)
      rows[r].classList.add(filterClass);
  }
  if(tableParent)
    tableParent.insertBefore(table, tableSibling);
  return filterId;
}

/*
The removeFilter function takes two arguments:
  1) a reference to the table that has the filter you want to remove
  2) the filter's ID number (i.e. the value that the addFilter function returned)
*/
function removeFilter(table, filterId) {
  var
    filterClass = 'filt_' + filterId,
    tableParent = table.parentNode,
    tableSibling = table.nextSibling,
    lastId = table.getAttribute('data-filterid'),
    rows = table.querySelectorAll('.' + filterClass),
    r = rows.length;
  if(tableParent)
    tableParent.removeChild(table);
  for(; r--; rows[r].classList.remove(filterClass));
  table.setAttribute(
    'data-filtercount',
    parseInt(table.getAttribute('data-filtercount')) - 1
  );
  if(filterId == lastId)
    table.setAttribute('data-filterid', parseInt(filterId) - 1);
  if(tableParent)
    tableParent.insertBefore(table, tableSibling);
}

/*
THE REMAINING JS CODE JUST SETS UP THE DEMO AND IS NOT PART OF THE SOLUTION, though it
does provide a simple example of how to connect the above functions to an interface.
*/
/* Initialize interface. */
(function() {
  var
    table = document.getElementById('hugeTable'),
    addFilt = function() {
      var
        exclusive = document.getElementById('filterType').value === '0' ? true : false,
        colSelect = document.getElementById('filterColumn'),
        valInputs = document.getElementsByName('filterValue'),
        filters = document.getElementById('filters'),
        column = colSelect.value,
        values = [],
        i = valInputs.length;
      for(; i--;) {
        if(valInputs[i].value.length) {
          values[i] = valInputs[i].value;
          valInputs[i].value = '';
        }
      }
      filters.children[0].insertAdjacentHTML(
        'afterend',
        '<div><input type="button" value="Remove">'
        + colSelect.options[colSelect.selectedIndex].textContent.trim()
        + (exclusive ? '; [' : '; everything but [') + values.toString() + ']</div>'
      );
      var
        filter = filters.children[1],
        filterId = addFilter(table, column, values, exclusive);
      filter.children[0].addEventListener('click', function() {
        filter.parentNode.removeChild(filter);
        removeFilter(table, filterId);
      });
    },
    addFiltVal = function() {
      var input = document.querySelector('[name="filterValue"]');
      input.insertAdjacentHTML(
        'beforebegin',
        '<input name="filterValue" type="text" placeholder="value">'
      );
      input.previousElementSibling.focus();
    },
    remFiltVal = function() {
      var input = document.querySelector('[name="filterValue"]');
      if(input.nextElementSibling.name === 'filterValue')
        input.parentNode.removeChild(input);
    };
  document.getElementById('addFilterValue').addEventListener('click', addFiltVal);
  document.getElementById('removeFilterValue').addEventListener('click', remFiltVal);
  document.getElementById('addFilter').addEventListener('click', addFilt);
})();

/* Fill test table with 5000 rows of random data. */
(function() {
  var
    tbl = document.getElementById('hugeTable'),
    num = 5000,
    dat = [
      'a','b','c','d','e','f','g','h','i','j','k','l','m',
      'n','o','p','q','r','s','t','u','v','w','x','y','z'
    ],
    len = dat.length,
    flr = Math.floor,
    rnd = Math.random,
    bod = tbl.tBodies[0],
    sib = bod.nextSibling,
    r = 0;
  tbl.removeChild(bod);
  for(; r < num; r++) {
    bod.insertAdjacentHTML(
      'beforeend',
      '<tr><td>' + r + '</td><td>' + dat[flr(rnd() * len)] + '</td></tr>');
  }
  tbl.insertBefore(bod, sib);
})();
