import { Box, InputBase, Popover, Popper, SvgIcon } from "@mui/material"
import SearchIcon from "../../assets/images/searchIcon.svg?react"
import FilterIcon from "../../assets/images/fadersHorizontalIcon.svg?react"
import { styled } from "@mui/material/styles"
import style from "./SearchCustom.module.scss"
import FilterList from "../FilterList/FilterList"
import { useState } from "react"

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 1),
    width: `760px`,
  },
}))

const SearchCustom = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }

  const handleOverlay = (e: { target?: any; currentTarget?: any }) => {
    if (e.target === e.currentTarget) {
      handleOpen()
    }
  }

  return (
    <div>
      <form className={style.search}>
        <div className={style.search__iconWrapper}>
          <SearchIcon />
        </div>
        <StyledInputBase
          placeholder="Поиск"
          inputProps={{ "aria-label": "search" }}
        />
        <button
          className={style.search__button}
          type="button"
          aria-describedby={"popover"}
          //variant="contained"
          onClick={() => handleOpen()}
        >
          <div className={style.search__iconWrapper}>
            <FilterIcon />
          </div>
        </button>
      </form>

      <Popover
        id={"popover"}
        open={open}
        //anchorEl={button}
        onClose={e => {
          handleOverlay(e)
        }}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <FilterList />
      </Popover>
    </div>
  )
}
export default SearchCustom
