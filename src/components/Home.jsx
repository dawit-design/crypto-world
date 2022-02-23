// import React, { useState, useEffect } from 'react';
// import { useTable, useSortBy } from 'react-table';
// import axios from 'axios';
// import {api} from '../services/index'


// function Table () {
//     const [currencies, setCurrencies] = useState('')
   
//     let coinName = []
//       let coinPrice = []
//       let coinChange = []
//       let coinMarketCap = []
//   useEffect(() => {
//     const getCoins = async () => {
//       const resp = await axios.get(api)
//       for(const dataObj of resp.data){
//           coinName.push(dataObj.name)
//           coinPrice.push(dataObj.current_price)
//           coinChange.push(dataObj.market_cap_change_percentage_24h)
//           coinMarketCap.push(dataObj.market_cap)
//       }
//       console.log(resp.data[0])
//       setCurrencies(resp.data)
//     }
//     getCoins()
//   },[])
//     if(!currencies) return null

//  const data = React.useMemo(
//      () => [
//        {
//          col1: coinName,
//          col2: coinPrice,
//          col3: coinChange,
//          col3: coinMarketCap
//        },
//     //    {
//     //      col1: 'Vilnius',
//     //      col2: '30',
//     //      col3: 'rain',
//     //    },
//     //    {
//     //      col1: 'London',
//     //      col2: '23',
//     //      col3: 'rain',
//     //    },
//      ],
//      []
//  )

//  const columns = React.useMemo(
//      () => [
//        {
//          Header: 'Name',
//          accessor: 'col1', // accessor is the "key" in the data
//        },
//        {
//          Header: 'Price',
//          accessor: 'col2',
//        },
//        {
//          Header: 'Change',
//          accessor: 'col3', // accessor is the "key" in the data
//        },
//        {
//          Header: 'Market Cap',
//          accessor: 'col4', // accessor is the "key" in the data
//        },
//      ],
//      []
//  )

//  const {
//    getTableProps,
//    getTableBodyProps,
//    headerGroups,
//    rows,
//    prepareRow,
//  } = useTable({ columns, data }, useSortBy);

//  return (
//      <div>
//        <table {...getTableProps()} style={{ border: 'solid 1px black' }}>
//          <thead>
//          {headerGroups.map(headerGroup => (
//              <tr {...headerGroup.getHeaderGroupProps()}>
//                {headerGroup.headers.map(column => (
//                    <th
//                        {...column.getHeaderProps(column.getSortByToggleProps())}
//                        style={{
//                          borderBottom: 'solid 3px red',
//                          color: 'black',
//                        }}
//                    >
//                      {column.render('Header')}
//                      <span>
//                        {column.isSorted
//                            ? column.isSortedDesc
//                                ? '🔽'
//                                : '🔼'
//                            : ''}
//                     </span>
//                    </th>
//                ))}
//              </tr>
//          ))}
//          </thead>
//          <tbody {...getTableBodyProps()}>
//          {rows.map(row => {
//            prepareRow(row)
//            return (
//                <tr {...row.getRowProps()}>
//                  {row.cells.map(cell => {
//                    return (
//                        <td
//                            {...cell.getCellProps()}
//                            style={{
//                              padding: '10px',
//                              border: 'solid 1px gray',
//                            }}
//                        >
//                          {cell.render('Cell')}
//                        </td>
//                    )
//                  })}
//                </tr>
//            )
//          })}
//          </tbody>
//        </table>
//      </div>
//  );
// }

// export default Table;