import { Box, InputBase, SvgIcon } from "@mui/material"
import { styled } from "@mui/material/styles"

const Search = styled("div")(() => ({
  display: "flex",

  //position: "relative",
  border: `1px`,
  borderRadius: `4px`,
  borderStyle: "solid",
  borderColor: "#e0e0e0",
  backgroundColor: "#fff",
  "&:hover": {
    borderColor: "#3918d9",
  },
  marginRight: 0,
  marginLeft: 0,
  padding: `6px 12px 6px 16px`,
  width: `860px`,
  height: `36px`,
}))

const SearchIconWrapper = styled("div")(() => ({
  //padding: `16px 8px 10px 16px`,
  height: "100%",
  //position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const FilterIconWrapper = styled("div")(() => ({
  //padding: `16px 12px 10px 16px`,
  height: "100%",
  // position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create("width"),
    width: `760px`,
  },
}))

const SearchCustom = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Search>
        <SearchIconWrapper>
          <SvgIcon>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                stroke="#3F3F3F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.0001 14.0001L11.1001 11.1001"
                stroke="#3F3F3F"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{" "}
          </SvgIcon>
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Поиск"
          inputProps={{ "aria-label": "search" }}
        />
        <FilterIconWrapper>
          <SvgIcon>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 10.75C2 10.4739 2.22386 10.25 2.5 10.25H8.5C8.77614 10.25 9 10.4739 9 10.75C9 11.0261 8.77614 11.25 8.5 11.25H2.5C2.22386 11.25 2 11.0261 2 10.75Z"
                fill="#3F3F3F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 10.75C10 10.4739 10.2239 10.25 10.5 10.25H13.5C13.7761 10.25 14 10.4739 14 10.75C14 11.0261 13.7761 11.25 13.5 11.25H10.5C10.2239 11.25 10 11.0261 10 10.75Z"
                fill="#3F3F3F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 5.25C2 4.97386 2.22386 4.75 2.5 4.75H4.5C4.77614 4.75 5 4.97386 5 5.25C5 5.52614 4.77614 5.75 4.5 5.75H2.5C2.22386 5.75 2 5.52614 2 5.25Z"
                fill="#3F3F3F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 5.25C6 4.97386 6.22386 4.75 6.5 4.75H13.5C13.7761 4.75 14 4.97386 14 5.25C14 5.52614 13.7761 5.75 13.5 5.75H6.5C6.22386 5.75 6 5.52614 6 5.25Z"
                fill="#3F3F3F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.5 3.25C6.77614 3.25 7 3.47386 7 3.75V6.75C7 7.02614 6.77614 7.25 6.5 7.25C6.22386 7.25 6 7.02614 6 6.75V3.75C6 3.47386 6.22386 3.25 6.5 3.25Z"
                fill="#3F3F3F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.5 8.75C10.7761 8.75 11 8.97386 11 9.25V12.25C11 12.5261 10.7761 12.75 10.5 12.75C10.2239 12.75 10 12.5261 10 12.25V9.25C10 8.97386 10.2239 8.75 10.5 8.75Z"
                fill="#3F3F3F"
              />
            </svg>{" "}
          </SvgIcon>
        </FilterIconWrapper>
      </Search>
    </Box>
  )
}
export default SearchCustom
