import type { FC, MouseEvent } from "react"
import { useEffect, useRef, useState } from "react"
import styles from "./styles.module.scss"
import { CaretDownIconSVG } from "../../../../ui-kit"
import type { Filter, Option } from "./types"

interface Props {
  data: Filter
  onSelect: (option: Option) => void
}

export const Select: FC<Props> = ({ data, onSelect }) => {
  const { label, list } = data
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    list.length > 0 ? list[0] : null,
  ) // Устанавливаем первую опцию по умолчанию
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const selectRef = useRef<HTMLButtonElement>(null)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option)
    setIsOpen(false)
    if (onSelect) {
      onSelect(option)
    }
  }

  const handleOverlayClick = (e: MouseEvent<Document, MouseEvent>) => {
    if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
      setIsOpen(false)
    }
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
        {selectedOption ? selectedOption.label : "Select"}
        <CaretDownIconSVG />
      </button>
      {isOpen && (
        <ul role="listbox" id="options-list" className={styles.select__options}>
          {list.map(option => (
            <li
              key={option.id}
              className={`${styles.select__option} ${
                selectedOption && selectedOption.id === option.id
                  ? styles.selected
                  : ""
              }`}
              onClick={() => handleOptionClick(option)}
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") {
                  handleOptionClick(option)
                }
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
