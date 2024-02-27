import type { SelectChangeEvent } from "@mui/material"
import {
  Checkbox,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,

} from "@mui/material"
import React from "react"
import { FILTERS } from "../../assets/constants/filterConstants"
import MenuItemFilter from "../MenuItemFilter/MenuItemFilter"
import style from "./FilterList.module.scss"

const FilterList = () => {
  const [gender, setGender] = React.useState("")
  const [sorting, setSorting] = React.useState("")

  const MenuProps = {
    PaperProps: {
      style: {
        // maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 176,
      },
    },
  }

  const [cityName, setCityName] = React.useState<string[]>([])
  const [countryName, setCountryName] = React.useState<string[]>([])
  const [programName, setProgramName] = React.useState<string[]>([])
  const [statusName, setStatusName] = React.useState<string[]>([])

  const handleChangeCityName = (event: SelectChangeEvent<typeof cityName>) => {
    const {
      target: { value },
    } = event
    setCityName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value,
    )
  }

  const handleChangeCountryName = (
    event: SelectChangeEvent<typeof countryName>,
  ) => {
    const {
      target: { value },
    } = event
    setCountryName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value,
    )
  }

  const handleChangeStatusName = (
    event: SelectChangeEvent<typeof statusName>,
  ) => {
    const {
      target: { value },
    } = event
    setStatusName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value,
    )
  }

  const handleChangeGender = (event: SelectChangeEvent) => {
    setGender(event.target.value)
  }

  const handleChangeSorting = (event: SelectChangeEvent) => {
    setSorting(event.target.value)
  }

  const handleChangeProgramName = (event: SelectChangeEvent<typeof programName>) => {
    const {
      target: { value },
    } = event
    setProgramName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value,
    )
  }


  return (
    <div className={style.area}>
    <div className={style.container}>
        
        <div className={style.item__sort}>
          <p>Сортировать</p>
          <FormControl
            sx={{
              maxWidth: `188px`,
              maxHeight: `32px`,
              padding: 0,
              "&.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input":
                { padding: 0 },
            }}
          >
            <Select
              sx={{ padding: 0 }}
              value={sorting}
              onChange={handleChangeSorting}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              
            >
              <MenuItemFilter disabled value="">По умолчанию</MenuItemFilter> 
              <MenuItemFilter value={"date"}>По дате</MenuItemFilter>
              <MenuItemFilter value={"alphabet"}>По алфавиту</MenuItemFilter>
              <MenuItemFilter value={"all"}>По умолчанию</MenuItemFilter>
              <MenuItemFilter value={"public"}>
                По количеству публикаций
              </MenuItemFilter>
            </Select>
          </FormControl>
        </div>

        <div className={style.item__city}>
        <p>Город</p>
          <FormControl
            sx={{ maxWidth: `176px`, maxHeight: `32px`, padding: `0px` }}
          >
            <Select
              // labelId="demo-multiple-checkbox-label"
              // id="demo-multiple-checkbox"
              multiple
              displayEmpty
              value={cityName}
              onChange={handleChangeCityName}
              renderValue={selected => {
                if (selected.length === 0) {
                  return <p>Город</p>
                }

                return selected.join(", ")
              }}
              MenuProps={MenuProps}
              placeholder="Город"
            >
              {FILTERS.cities.map(city => (
                <MenuItemFilter key={city} value={city}>
                  <Checkbox checked={cityName.indexOf(city) > -1} />
                  <ListItemText primary={city} />
                </MenuItemFilter>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className={style.item__city}>
          <p>Страна</p>
          <FormControl
            sx={{ maxWidth: `176px`, maxHeight: `32px`, padding: `0px` }}
          >
            <Select
            className={style.select}
              multiple
              displayEmpty
              value={countryName}
              onChange={handleChangeCountryName}
              MenuProps={MenuProps}
              renderValue={selected => {
                if (selected.length === 0) {
                  return <p>Страна</p>
                }

                return selected.join(", ")
              }}
            >
              {FILTERS.countries.map(country => (
                <MenuItemFilter key={country} value={country}>
                  <Checkbox checked={countryName.indexOf(country) > -1} />
                  <ListItemText primary={country} />
                </MenuItemFilter>
              ))}
            </Select>
          </FormControl>
        </div>
</div>
<div className={style.container}>
        <div className={style.item__sort}>
          <p>Статус амбассадора</p>
          <FormControl
            sx={{ maxWidth: `188px`, maxHeight: `32px`, padding: `0px` }}
          >
            <Select
              multiple
              displayEmpty
              value={statusName}
              onChange={handleChangeStatusName}
              MenuProps={MenuProps}
              renderValue={selected => {
                if (selected.length === 0) {
                  return <p>Все</p>
                }

                return selected.join(", ")
              }}
            >
              {FILTERS.status.map(status => (
                <MenuItemFilter key={status} value={status}>
                  <Checkbox checked={statusName.indexOf(status) > -1} />
                  <ListItemText primary={status} />
                </MenuItemFilter>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className={style.item__program}>
          <p>Программа обучения</p>
          <FormControl
            sx={{ maxWidth: `281px`, maxHeight: `32px`, padding: `0px` }}
          >
            <Select
              multiple
              displayEmpty
              value={programName}
              onChange={handleChangeProgramName}
              MenuProps={MenuProps}
              renderValue={selected => {
                if (selected.length === 0) {
                  return <p>Все</p>
                }

                return selected.join(", ")
              }}
            >
              {FILTERS.program.map(program => (
                <MenuItemFilter key={program} value={program}>
                  <Checkbox checked={programName.indexOf(program) > -1} />
                  <ListItemText primary={program} />
                </MenuItemFilter>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className={style.item__gender}>
          Пол
          <FormControl
            sx={{ maxWidth: `176px`, maxHeight: `32px`, padding: `0px` }}
          >
            <Select
              value={gender}
              onChange={handleChangeGender}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItemFilter disabled value="">Любой</MenuItemFilter>
              <MenuItemFilter value={"female"}>Женский</MenuItemFilter>
              <MenuItemFilter value={"male"}>Мужской</MenuItemFilter>
              <MenuItemFilter value={"all"}>Любой</MenuItemFilter>
            </Select>
          </FormControl>
        </div>
    </div>
    </div>
  )
}

export default FilterList
