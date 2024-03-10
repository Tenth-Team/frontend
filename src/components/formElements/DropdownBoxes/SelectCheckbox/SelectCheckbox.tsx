import type { FC, MouseEvent } from "react"
import { useEffect, useRef, useState } from "react"
import styles from "./styles.module.scss"
import {
  Box,
  CaretDownIconSVG,
  CheckboxOffSVG,
  CheckboxOnSVG,
} from "../../../../ui-kit"
import type { Filter, Option } from "../Select/types"

interface Props {
  data: Filter
  onSelect: (options: Option[]) => void
}

export const SelectCheckbox: FC<Props> = ({ data, onSelect }) => {
  const { label, list } = data
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>("")
  const selectRef = useRef<HTMLButtonElement>(null)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: Option) => {
    setSelectedOptions(state =>
      state.some(opt => opt.id === option.id)
        ? state.filter(opt => opt.id !== option.id)
        : state.concat(option),
    )
  }

  const handleOverlayClick = (e: MouseEvent<Document, MouseEvent>) => {
    if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
      setIsOpen(false)
    }
  }

  function checkedTags(id: number) {
    return selectedOptions.some(i => i.id === id)
  }

  useEffect(() => {
    document.addEventListener(
      "click",
      handleOverlayClick as unknown as EventListener,
    )
    return () => {
      document.removeEventListener(
        "click",
        handleOverlayClick as unknown as EventListener,
      )
    }
  }, [])

  const filteredList = list.filter(option =>
    option.label.toLowerCase().includes(searchValue.toLowerCase()),
  )

  return (
    <div className={styles.select}>
      <span className={styles.select__label}>{label}</span>
      <button
        aria-haspopup="listbox"
        aria-controls="options-list"
        className={styles.select__button}
        onClick={handleOpen}
        aria-expanded={isOpen}
        ref={selectRef}
      >
        Все
        <CaretDownIconSVG />
      </button>
      {isOpen && (
        <div
          role="listbox"
          id="options-list"
          className={styles.select__box}
          onClick={e => {
            e.stopPropagation()
          }}
        >
          <>
            <div className={styles.select__search}>
              <input
                autoComplete="off"
                type="search"
                name="modules"
                className={styles.select__searchInput}
                placeholder="Начните ввод"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
              />
            </div>
            <Box
              sx={{
                width: "100%",
                maxHeight: 300,
                overflow: " hidden auto",
                // overflowY: "auto",
                "&::-webkit-scrollbar": {
                  height: 10,
                  width: 10,
                  WebkitAppearance: "none",
                },
                "&::-webkit-scrollbar-track": {
                  borderRadius: 5,
                },
                "&::-webkit-scrollbar-thumb": {
                  borderRadius: 5,
                  border: "1px solid",
                  borderColor: "var(--gray-200)",
                  background: "var(--gray-200)",
                },
              }}
              className={styles.select__options}
            >
              <ul
                className={styles.select__optionsList}
                onClick={e => {
                  e.stopPropagation()
                }}
              >
                {filteredList.length ? (
                  filteredList.map(option => (
                    <li
                      key={option.id}
                      className={styles.checkbox}
                      onKeyDown={e => {
                        if (e.key === "Enter" || e.key === " ") {
                          handleOptionClick(option)
                        }
                      }}
                    >
                      <label
                        htmlFor={`${option.id}`}
                        className={styles.checkbox__label}
                        tabIndex={0}
                      >
                        <input
                          className={styles.checkbox__input}
                          id={`${option.id}`}
                          type="checkbox"
                          checked={checkedTags(option.id)}
                          onChange={() => handleOptionClick(option)}
                        />
                        {checkedTags(option.id) ? (
                          <CheckboxOnSVG />
                        ) : (
                          <CheckboxOffSVG />
                        )}
                        <span>{option.label}</span>
                      </label>
                    </li>
                  ))
                ) : (
                  <li className="dropdown__item">
                    <span className={styles.checkbox__label}>
                      Ни чего не найдено
                    </span>
                  </li>
                )}
              </ul>
            </Box>
          </>
        </div>
      )}
    </div>
  )
}
