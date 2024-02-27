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
  Stack,
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

  const handleChangeGender = (event: SelectChangeEvent) => {
    setGender(event.target.value)
  }

  const handleChangeSorting = (event: SelectChangeEvent) => {
    setSorting(event.target.value)
  }

  return (
    <div className={style.container}>
      <Grid xs={3} rowSpacing={`10px`}>
        <Stack className={style.item}>
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
              <MenuItemFilter value="">По умолчанию</MenuItemFilter>
              <MenuItemFilter value={"date"}>По дате</MenuItemFilter>
              <MenuItemFilter value={"alphabet"}>По алфавиту</MenuItemFilter>
              <MenuItemFilter value={"all"}>По умолчанию</MenuItemFilter>
              <MenuItemFilter value={"public"}>
                По количеству публикаций
              </MenuItemFilter>
            </Select>
          </FormControl>
        </Stack>
      </Grid>
      <Grid xs={3}>
        <Stack className={style.item}>
          Город
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
        </Stack>
      </Grid>

      <Grid xs={3}>
        <Stack className={style.item}>
          Страна
          <FormControl
            sx={{ maxWidth: `176px`, maxHeight: `32px`, padding: `0px` }}
          >
            <Select
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
        </Stack>
      </Grid>

      <Grid xs={3}>
        <Stack className={style.item}>
          <p>Статус амбассадора</p>
          <FormControl
            sx={{ maxWidth: `188px`, maxHeight: `32px`, padding: `0px` }}
          >
            <Select
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
        </Stack>
      </Grid>
      <Grid xs={4}>
        <Stack className={style.item}>
          <p>Программа обучения</p>
          <FormControl
            sx={{ maxWidth: `281px`, maxHeight: `32px`, padding: `0px` }}
          >
            <Select
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
        </Stack>
      </Grid>
      <Grid xs={3}>
        <Stack className={style.item}>
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
              <MenuItemFilter value="">Любой</MenuItemFilter>
              <MenuItemFilter value={"female"}>Женский</MenuItemFilter>
              <MenuItemFilter value={"male"}>Мужской</MenuItemFilter>
              <MenuItemFilter value={"all"}>Любой</MenuItemFilter>
            </Select>
          </FormControl>
        </Stack>
      </Grid>
    </div>
  )
}

export default FilterList
