
import React from 'react';
import { Space, Table, Tag } from 'antd';


export const DynamicTable = ({ tableTitle, columnsData, dataContent }) => {

  console.log(columnsData)

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'age',
      dataIndex: 'age',
      key: 'age',
    }
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
   
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
  },
];

return(
    <Table columns={columns} dataSource={data} />
)
}
