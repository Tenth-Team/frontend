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
import style from "../../components/TableComponent/TableComponent.module.scss"
import theme from "../../assets/theme"
import { Link } from "react-router-dom"
import { useAppSelector } from "../../store/hooks"
import { getContentData } from "../../store/selectors"
import type { СontentType } from "../../store/content/type"

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
  a: { [key in Key]: number | string | boolean | null },
  b: { [key in Key]: number | string | boolean | null },
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

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
  id: keyof СontentType
  label: string
  numeric: boolean
}

const headCells: readonly HeadCell[] = [
  {
    id: "full_name",
    numeric: false,
    disablePadding: true,
    label: "ФИО",
  },
  {
    id: "telegram",
    numeric: false,
    disablePadding: false,
    label: "Телеграмм",
  },
  {
    id: "link",
    numeric: false,
    disablePadding: false,
    label: "Ссылка на контент",
  },
  {
    id: "created_date",
    numeric: false,
    disablePadding: false,
    label: "Дата публикации",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Статус публикации",
  },
  {
    id: "comment",
    numeric: false,
    disablePadding: false,
    label: "Комментарий менеджера",
  },
]

interface EnhancedTableProps {
  numSelected: number
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof СontentType,
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
    (property: keyof СontentType) => (event: React.MouseEvent<unknown>) => {
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

const TableAmbassadorContent = () => {
  const [order, setOrder] = React.useState<Order>("asc")
  const [orderBy, setOrderBy] = React.useState<keyof СontentType>("full_name")
  const [selected, setSelected] = React.useState<readonly number[]>([])

  const isSelected = (id: number) => selected.indexOf(id) !== -1

  const { results, loading } = useAppSelector(getContentData)

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof СontentType,
  ) => {
    const isAsc = orderBy === property && order === "asc"
    setOrder(isAsc ? "desc" : "asc")
    setOrderBy(property)
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = results.map(n => n.id)
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

  const visibleRows = React.useMemo(() => {
    if (results) {
      return stableSort(results, getComparator(order, orderBy))
    }
    return []
  }, [order, orderBy, results])

  const getStatusClass = (status: string | number) => {
    let statusClass: string
    switch (status) {
      case "approved":
        statusClass = "active"
        break
      case "rejected":
        statusClass = "not_ambassador"
        break
      case "new":
        statusClass = "paused"
        break
      default:
        statusClass = "paused"
    }
    return statusClass
  }

  const getStatusName = (status: string) => {
    let statusName: string
    switch (status) {
      case "approved":
        statusName = "Активный"
        break
      case "rejected":
        statusName = "Не активный"
        break
      case "new":
        statusName = "Новая публикация"
        break
      default:
        statusName = "Новая публикация"
    }
    return statusName
  }

  return (
    <section className={style.tableBlock}>
      <TableContainer
        component={Paper}
        sx={{ border: "none", boxShadow: "none" }}
        className={style.tableContainer}
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
            rowCount={results?.length}
          />
          {!loading ? (
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id)
                const labelId = `enhanced-table-checkbox-${index}`

                const newtelegram = row.telegram.replace("@", "")

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
                      <Link to={`/ambassadors/${row.id}`}>{row.full_name}</Link>
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      sx={{ color: theme.palette.primary.main }}
                    >
                      {!row.telegram.includes("@") ? (
                        <a
                          href={`https://t.me/${row.telegram}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {row.telegram}
                        </a>
                      ) : (
                        <a
                          href={`https://t.me/${newtelegram}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {newtelegram}
                        </a>
                      )}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <a target="_blank" href={row.link} rel="noreferrer">
                        {row.link}
                      </a>
                    </StyledTableCell>

                    <StyledTableCell align="right">
                      {row.created_date}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <div
                        className={
                          style.status + " " + style[getStatusClass(row.status)]
                        }
                      >
                        <button type="button">
                          {getStatusName(row.status)}
                        </button>
                      </div>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.comment || ""}
                    </StyledTableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          ) : null}
        </Table>
      </TableContainer>
    </section>
  )
}

export { TableAmbassadorContent }
