import { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { FilterMatchMode, FilterOperator } from 'primereact/api'

const DatatablePage = () => {
  const [customers, setCustomers] = useState([])
  const [filters, setFilters] = useState<any>(null)
  const [globalFilter, setGlobalFilter] = useState('')

  useEffect(() => {
    const getCustomersLarge = async () => {
      const resp = await fetch('data/customers.json')
      const json = await resp.json()
      console.log(json)
      setCustomers(json.data)
    }

    getCustomersLarge()
    initFilters()
  }, [])

  const initFilters = () => {
    setFilters({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
      'country.name': {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      representative: { value: null, matchMode: FilterMatchMode.IN },
      date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
      balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
      status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
      activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
      verified: { value: null, matchMode: FilterMatchMode.EQUALS },
    })
    setGlobalFilter('')
  }

  const onGlobalFilterChange = (e) => {
    const value = e.target.value
    let _filters = { ...filters }
    _filters['global'].value = value

    setFilters(_filters)
    setGlobalFilter(value)
  }

  const clearFilters = () => {
    initFilters()
  }

  const renderTableHeader = () => {
    return (
      <div className="d-flex justify-content-between">
        <Button
          type="button"
          icon="pi pi-filter-slash"
          label="Clear"
          className="p-button-outlined"
          onClick={clearFilters}
        />
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText value={globalFilter} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
        </span>
      </div>
    )
  }

  const renderActionsTemplate = (rowData) => {
    return (
      <>
        <button className="btn btn-sm btn-danger me-1">Elminar</button>
        <button className="btn btn-sm btn-warning">Editar</button>
      </>
    )
  }

  const tableHeader = renderTableHeader()

  return (
    <>
      <div className="">
        <h5>Basic</h5>
        <DataTable
          value={customers}
          paginator
          removableSort
          sortMode="multiple"
          responsiveLayout="scroll"
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Mostrando {first} al {last} de {totalRecords}"
          rows={10}
          rowsPerPageOptions={[10, 20, 50]}
          paginatorLeft={<Button type="button" icon="pi pi-refresh" className="p-button-text" />}
          paginatorRight={<Button type="button" icon="pi pi-cloud" className="p-button-text" />}
          filters={filters}
          filterDisplay="menu"
          globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']}
          header={tableHeader}
        >
          <Column
            field="name"
            header="Name"
            filter
            filterPlaceholder="Search by name"
            style={{ minWidth: '12rem' }}
            sortable
          />
          <Column field="country.name" header="Country" style={{ width: '25%' }} sortable></Column>
          <Column field="company" header="Company" style={{ width: '25%' }} sortable></Column>
          <Column field="representative.name" header="Representative" style={{ width: '25%' }} sortable></Column>
          <Column
            field="actions"
            header="Acciones"
            bodyClassName="text-center"
            style={{ minWidth: '10rem' }}
            body={renderActionsTemplate}
          />
        </DataTable>
      </div>
    </>
  )
}

export default DatatablePage
