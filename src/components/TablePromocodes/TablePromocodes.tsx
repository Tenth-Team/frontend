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
// import { useForm } from "react-hook-form"
// import { yupResolver } from "@hookform/resolvers/yup"
// import * as yup from "yup"
import { ModalAddPromocode } from "../../modules/ModalAddPromocode/ModalAddPromocode"
import { useAppSelector } from "../../store/hooks"
import { getAmbassadorsData } from "../../store/selectors"
import type {
  AmbGoal,
  AmbassadorRoot,
  Promocodes,
  YaEdu,
} from "../../store/ambassador/types"

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
  a: { [key in Key]: number | string | YaEdu | AmbGoal[] | Promocodes[] },
  b: { [key in Key]: number | string | YaEdu | AmbGoal[] | Promocodes[] },
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
  id: keyof AmbassadorRoot
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
    id: "promo_code",
    numeric: false,
    disablePadding: false,
    label: "Промо-код",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Статус промо-кода",
  },
  {
    id: "ya_edu",
    numeric: false,
    disablePadding: false,
    label: "Программа обучения",
  },
]

interface EnhancedTableProps {
  numSelected: number
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof AmbassadorRoot,
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
    (property: keyof AmbassadorRoot) => (event: React.MouseEvent<unknown>) => {
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

const TablePromocodes = () => {
  const [order, setOrder] = React.useState<Order>("asc")
  const [orderBy, setOrderBy] =
    React.useState<keyof AmbassadorRoot>("full_name")
  const [selected, setSelected] = React.useState<readonly number[]>([])

  const isSelected = (id: number) => selected.indexOf(id) !== -1

  const { results } = useAppSelector(getAmbassadorsData)

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof AmbassadorRoot,
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

  const visibleRows = React.useMemo(
    () => (results ? stableSort(results, getComparator(order, orderBy)) : []),
    [order, orderBy, results],
  )

  const getStatusClass = (status: string | number) => {
    let statusClass: string
    switch (status) {
      case "active":
        statusClass = "active"
        break
      case "inactive":
        statusClass = "not_ambassador"
        break
      /* case "none":
        statusClass = "pending"
        break */
      default:
        statusClass = "pending"
    }
    return statusClass
  }

  const getStatusName = (status: string) => {
    let statusName: string
    switch (status) {
      case "active":
        statusName = "Активный"
        break
      case "inactive":
        statusName = "Не активный"
        break
      /*       case "none":
        statusName = "Отсутствует"
        break */
      default:
        statusName = "Отсутствует"
    }
    return statusName
  }

  // const formInputsData: Record<
  //   string,
  //   {
  //     label: string
  //     name: string
  //     type: string
  //     placeholder: string
  //     schema: yup.StringSchema | yup.MixedSchema
  //   }
  // > = {
  //   promo_code: {
  //     label: "Промокод",
  //     name: "promo_code",
  //     type: "text",
  //     placeholder: "",
  //     schema: yup.string().min(1).max(100),
  //   },
  // }
  // const schema = yup
  //   .object(
  //     Object.keys(formInputsData).reduce(
  //       (prev, cur) => ({ ...prev, [cur]: formInputsData[cur].schema }),
  //       {},
  //     ),
  //   )
  //   .required()

  // const { register } = useForm<typeof formInputsData>({
  //   mode: "onBlur",
  //   resolver: yupResolver(schema),
  // })

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
            rowCount={results.length}
          />

          <TableBody>
            {/* row - амбассадор */}
            {visibleRows.map((row, index) => {
              const isItemSelected = isSelected(row.id)
              const labelId = `enhanced-table-checkbox-${index}`

              const newtelegram = row.telegram.replace("@", "")

              const promoCode = row.promo_code.reduce((prev, curr) => {
                return prev.id > curr.id ? prev : curr
              }, {} as Promocodes)

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
                      //  checked={isItemSelected}
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
                      <a href={`https://t.me/${row.telegram}`} target="_blank" rel="noreferrer">
                        {row.telegram}
                      </a>
                    ) : (
                      <a href={`https://t.me/${newtelegram}`} target="_blank" rel="noreferrer">
                        {newtelegram}
                      </a>
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {/*  {row.promo_code} */}
                    <ModalAddPromocode row={row} />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <div
                      className={
                        style.status + " " + style[getStatusClass(promoCode.status)]
                      }
                    >
                      <button type="button">{getStatusName(promoCode.status)}</button>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.ya_edu.name}
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

export default TablePromocodes
