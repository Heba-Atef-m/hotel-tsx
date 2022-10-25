// Name : Heba Atef Mohamed
import React, { useState } from 'react'
import Form, { thisState } from './comp/form';
import Table from './comp/Table';
export default function App() {
  const [data , setData] = useState<thisState[]>([])
  const handelChange = (val:thisState)  => {
    setData([...data, val])
    console.log(data , 'data')
  }
  return (
    <div>
      <Form onSubmit={(vals) => handelChange(vals)} />
      <Table rows={data} />
    </div>
  )
}