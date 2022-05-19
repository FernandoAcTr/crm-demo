import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'

const DatatablePage = () => {
  const [customers1, setCustomers1] = useState([])

  useEffect(() => {
    const getCustomersLarge = async () => {
      const resp = await fetch('data/customers.json')
      const json = await resp.json()
      console.log(json)
      setCustomers1(json.data)
    }

    getCustomersLarge()
  }, [])

  return (
    <>
      <div className="">
        <h5>Basic</h5>
        <DataTable
          value={customers1}
          paginator
          sortMode="multiple"
          removableSort
          responsiveLayout="scroll"
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Mostrando {first} al {last} de {totalRecords}"
          rows={10}
          rowsPerPageOptions={[10, 20, 50]}
          paginatorLeft={<Button type="button" icon="pi pi-refresh" className="p-button-text" />}
          paginatorRight={<Button type="button" icon="pi pi-cloud" className="p-button-text" />}
        >
          <Column field="name" header="Name" style={{ width: '25%' }} sortable></Column>
          <Column field="country.name" header="Country" style={{ width: '25%' }} sortable></Column>
          <Column field="company" header="Company" style={{ width: '25%' }} sortable></Column>
          <Column field="representative.name" header="Representative" style={{ width: '25%' }} sortable></Column>
        </DataTable>
      </div>
    </>
  )
}

export default DatatablePage
