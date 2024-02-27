import { Box, InputBase, SvgIcon } from "@mui/material"
import SearchIcon from "../../assets/images/searchIcon.svg?react"
import FilterIcon from "../../assets/images/fadersHorizontalIcon.svg?react"
import { styled } from "@mui/material/styles"
import style from "./SearchCustom.module.scss"

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 1),
    width: `760px`,
  },
}))

const SearchCustom = () => {
  return (
    <form className={style.search}>
      <div className={style.search__iconWrapper}>
        <SearchIcon />
      </div>
      <StyledInputBase
        placeholder="Поиск"
        inputProps={{ "aria-label": "search" }}
      />
      <button className={style.search__button} type="button">
        <div className={style.search__iconWrapper}>
          <FilterIcon />
        </div>
      </button>
    </form>
  )
}
export default SearchCustom
