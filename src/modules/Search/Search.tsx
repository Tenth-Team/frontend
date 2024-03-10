import { Search as SearchIcon, Tune as TuneIcon } from "@mui/icons-material"
import { Filters } from "./Filters"
import { IconButton } from "../../components/formElements/IconButton"

import s from "./styles.module.scss"
import { TrashIconSVG } from "../../ui-kit"
import { Chip } from "../../components/formElements/Chip"
import { useCallback, useState } from "react"

export const Search = () => {
  const [chipsList, setChipsList] = useState<
    {
      id: number
      title: string
    }[]
  >([])
  const [isOpen, setIsOpen] = useState(false)
  // const chips = useMemo(() => {
  //   return Array.from({ length: 5 }, (_, i) => ({
  //     id: i + 1,
  //     title: `Фильтр ${i + 1} ${Array.from(
  //       { length: i + 1 },
  //       (_, i) => i * i,
  //     ).join("")}`,
  //   }))
  // }, [])

  const openFilters = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [setIsOpen])

  const handleCleanChips = useCallback(() => {
    setChipsList([])
  }, [setChipsList])

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
          onClick={openFilters}
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
                onClick={handleCleanChips}
                icon={<TrashIconSVG />}
                type="button"
              ></IconButton>
            </li>
          </ul>
        </div>
      ) : null}
      {isOpen ? <Filters /> : null}
    </div>
  )
}
