import * as React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableSortLabel from "@mui/material/TableSortLabel"
import Paper from "@mui/material/Paper"
import Checkbox from "@mui/material/Checkbox"
import { visuallyHidden } from "@mui/utils"
import style from "./TableComponent.module.scss"
import theme from "../../assets/theme"
import ambassadors from "./ambassadors.json"
import { Link } from "react-router-dom"

// TODO - убрать моки, когда будет готова апишка
// FIXME - пока непонятно откуда брать публикации. Возможно это контент, надо добавать

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.dark,
    fontWeight: 600,
    borderBottom: "none",
    textAlign: "left",
  },
  [`&.${tableCellClasses.body}`]: {
    border: "none",
    textAlign: "left",
  },
}))

interface Data {
  id: number
  name: string
  tg: string
  ya_edu: string
  city: string
  status: string
  publications: number
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

type Order = "asc" | "desc"

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number,
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) {
      return order
    }
    return a[1] - b[1]
  })
  return stabilizedThis.map(el => el[0])
}

interface HeadCell {
  disablePadding: boolean
  id: keyof Data
  label: string
  numeric: boolean
}

const headCells: readonly HeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "ФИО",
  },
  {
    id: "tg",
    numeric: false,
    disablePadding: false,
    label: "Телеграмм",
  },
  {
    id: "ya_edu",
    numeric: false,
    disablePadding: false,
    label: "Программа обучения",
  },
  {
    id: "city",
    numeric: false,
    disablePadding: false,
    label: "Город",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Статус",
  },
  {
    id: "publications",
    numeric: false,
    disablePadding: false,
    label: "Публикации",
  },
]

interface EnhancedTableProps {
  numSelected: number
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => void
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  order: Order
  orderBy: string
  rowCount: number
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property)
    }

  return (
    <TableHead>
      <TableRow>
        <StyledTableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            sx={{ color: theme.palette.secondary.light }}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </StyledTableCell>
        {headCells.map(headCell => (
          <StyledTableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

const TableComponent = () => {
  const [order, setOrder] = React.useState<Order>("asc")
  const [orderBy, setOrderBy] = React.useState<keyof Data>("name")
  const [selected, setSelected] = React.useState<readonly number[]>([])

  const isSelected = (id: number) => selected.indexOf(id) !== -1

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === "asc"
    setOrder(isAsc ? "desc" : "asc")
    setOrderBy(property)
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = ambassadors.map(n => n.id)
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id)
    let newSelected: readonly number[] = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      )
    }
    setSelected(newSelected)
  }

  const visibleRows = React.useMemo(
    () => stableSort(ambassadors, getComparator(order, orderBy)),
    [order, orderBy],
  )

  const getStatusClass = (status: string) => {
    let statusClass: string
    switch (status) {
      case "Активный":
        statusClass = "status-active"
        break
      case "На паузе":
        statusClass = "status-pause"
        break
      case "Не амбассадор":
        statusClass = "status-not"
        break
      case "Уточняется":
        statusClass = "status-refine"
        break
      default:
        statusClass = "status-refine"
    }
    return statusClass
  }

  return (
    <section className={style.tableBlock}>
      <TableContainer
        component={Paper}
        sx={{ maxHeight: 700, border: "none", boxShadow: "none" }}
      >
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          size="medium"
          stickyHeader
          aria-label="sticky table"
        >
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={ambassadors.length}
          />
          <TableBody>
            {visibleRows.map((row, index) => {
              const isItemSelected = isSelected(row.id)
              const labelId = `enhanced-table-checkbox-${index}`

              const newTg = row.tg.replace("@", "")

              return (
                <TableRow
                  hover
                  onClick={event => handleClick(event, row.id)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.id}
                  selected={isItemSelected}
                  sx={{ cursor: "pointer" }}
                >
                  <StyledTableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isItemSelected}
                      sx={{ color: theme.palette.secondary.light }}
                      inputProps={{
                        "aria-labelledby": labelId,
                      }}
                    />
                  </StyledTableCell>
                  <StyledTableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    sx={{ color: theme.palette.primary.main }}
                    padding="none"
                  >
                    <Link to="/">{row.name}</Link>
                  </StyledTableCell>

                  <StyledTableCell
                    align="right"
                    sx={{ color: theme.palette.primary.main }}
                  >
                    {!row.tg.includes("@") ? (
                      <a href={`https://t.me/${row.tg}`} target="_blank">
                        {row.tg}
                      </a>
                    ) : (
                      <a href={`https://t.me/${newTg}`} target="_blank">
                        {newTg}
                      </a>
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.ya_edu}</StyledTableCell>
                  <StyledTableCell align="right">{row.city}</StyledTableCell>
                  <StyledTableCell align="right">
                    <div
                      className={
                        style.status + " " + style[getStatusClass(row.status)]
                      }
                    >
                      {row.status}
                    </div>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.publications}
                  </StyledTableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  )
}

export default TableComponent
