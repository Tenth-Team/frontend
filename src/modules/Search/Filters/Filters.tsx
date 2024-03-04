import { Select } from "../DropdownBoxes/Select"
import { SelectCheckbox } from "../DropdownBoxes/SelectCheckbox"
import { filters } from "./constants"
import s from "./styles.module.scss"

export const Filters = () => {
  return (
    <div className={s.filters}>
      <div className={s.filters__container}>
        {filters.map(filter => {
          if (filter.type === "select") {
            return (
              <Select
                key={filter.id}
                data={filter}
                onSelect={() => console.log("click")}
              />
            )
          } else {
            return (
              <SelectCheckbox
                key={filter.id}
                data={filter}
                onSelect={() => console.log("click")}
              />
            )
          }
        })}
      </div>
    </div>
  )
}
