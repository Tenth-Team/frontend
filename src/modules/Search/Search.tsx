// import { useRef, useEffect } from "react"
import { Search as SearchIcon, Tune as TuneIcon } from "@mui/icons-material"
import { Filters } from "./Filters"
import { IconButton } from "./IconButton"

import s from "./styles.module.scss"
import { XIconSVG, TrashIconSVG } from "../../ui-kit"
import { Chip } from "./Chip"

export const Search = () => {
  // const fieldsetRef = useRef<HTMLFieldSetElement>(null)
  // const inputRef = useRef<HTMLInputElement>(null)

  // useEffect(() => {
  //   const handleInput = () => {
  //     if (fieldsetRef.current) {
  //       fieldsetRef.current.focus()
  //     }
  //   }

  //   if (inputRef.current) {
  //     inputRef.current.addEventListener("input", handleInput)
  //   }

  //   return () => {
  //     if (inputRef.current) {
  //       inputRef.current.removeEventListener("input", handleInput)
  //     }
  //   }
  // }, [])

  return (
    <div className={s.search}>
      <fieldset
        className={`${s.search__fieldset} ${s.fieldset}`}
        // ref={fieldsetRef}
      >
        <label className={s.fieldset__label} htmlFor="search-input">
          <SearchIcon />
        </label>
        <input
          // ref={inputRef}
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
      <div className={s.search__chips}>
        <ul className={s.search__chipsList}>
          {Array.from({ length: 10 }, (_, i) => ({
            id: i + 1,
            title: `Фильтр ${i + 1} ${Array.from(
              { length: i + 1 },
              (_, i) => i * i,
            ).join("")}`,
          })).map(item => {
            return (
              <li key={item.id}>
                <Chip label={item.title} />
              </li>
            )
          })}
          <li>
            <IconButton
              small
              onClick={() => {
                console.log("onClick")
              }}
              icon={<TrashIconSVG />}
              type="button"
            ></IconButton>
          </li>
        </ul>
      </div>
      <Filters />
    </div>
  )
}
