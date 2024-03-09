import { Search as SearchIcon, Tune as TuneIcon } from "@mui/icons-material"
import { Filters } from "./Filters"
import { IconButton } from "../../components/formElements/IconButton"

import s from "./styles.module.scss"
import { TrashIconSVG } from "../../ui-kit"
import { Chip } from "../../components/formElements/Chip"
import { useState } from "react"

export const Search = () => {
  const [chipsList, setChipsList] = useState(() =>
    Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      title: `Фильтр ${i + 1} ${Array.from(
        { length: i + 1 },
        (_, i) => i * i,
      ).join("")}`,
    })),
  )

  return (
    <div className={s.search}>
      <fieldset className={`${s.search__fieldset} ${s.fieldset}`}>
        <label className={s.fieldset__label} htmlFor="search-input">
          <SearchIcon />
        </label>
        <input
          className={s.fieldset__input}
          type="search"
          name="search-input"
          id="search-input"
          placeholder="Поиск"
        />
        <IconButton
          small
          onClick={() => {
            console.log("onClick")
          }}
          icon={<TuneIcon />}
          type="button"
        ></IconButton>
      </fieldset>
      {chipsList.length ? (
        <div className={s.search__chips}>
          <ul className={s.search__chipsList}>
            {chipsList.map(item => {
              return (
                <li key={item.id}>
                  <Chip label={item.title} />
                </li>
              )
            })}
            <li>
              <IconButton
                small
                onClick={() => setChipsList([])}
                icon={<TrashIconSVG />}
                type="button"
              ></IconButton>
            </li>
          </ul>
        </div>
      ) : null}
      <Filters />
    </div>
  )
}
