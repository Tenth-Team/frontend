import type { FC } from "react"
import style from "./Analytics.module.scss"
import { Link } from "react-router-dom"
import { BarChart } from "@mui/x-charts/BarChart"
import { MinusIconSVG } from "../../ui-kit"
import { TextField } from "@mui/material"
import { AUTHORS, CARDS, MERCH } from "../../assets/constants/analytics"
import { HeaderContent } from "../HeaderContent/HeaderContent"
import { Content } from "../Content/Content"

const Analytics: FC = () => {
  type CardValue = {
    id: number
    name: string
    count: string
  }

  type MerchValue = {
    id: number
    name: string
    sum: number
  }

  const merchItem = MERCH.map((item: MerchValue) => {
    return (
      <li key={item.id} className={style.container__merch}>
        <p
          className={`${style.container__text} ${style.container__text_name} `}
        >
          {item.name}
        </p>
        <p className={`${style.container__text} ${style.container__text_sum}`}>
          {item.sum} &#8381;
        </p>
      </li>
    )
  })

  const cardItem = CARDS.map((item: CardValue) => {
    return (
      <li key={item.id} className={style.container__card}>
        <h3
          className={` ${style.container__name} ${style.container__name_left}`}
        >
          {item.name}
        </h3>
        <p className={style.container__card_count}>{item.count}</p>
      </li>
    )
  })

  const clubSum = 100000
  let total = 0
  MERCH.forEach((item: MerchValue) => {
    return (total += item.sum)
  })

  const authorItem = AUTHORS.map((item: CardValue) => {
    return (
      <li  key={item.id}  className={style.container__author}>
        <p
          className={`${style.container__id} ${style.container__authorText} ${style.container__authorText_colored} ${style.container__authorText_bold}`}
        >
          {item.id}{" "}
        </p>
        <Link
          to="/"
          className={`${style.container__authorText} ${style.container__authorText_colored}`}
        >
          {item.name}
        </Link>
        <p
          className={`${style.container__count} ${style.container__authorText}`}
        >
          {item.count}
        </p>
      </li>
    )
  })

  return (
    <Content className={style.container}>
      <div className={style.container__calendarsArea}>
        <HeaderContent>Аналитика</HeaderContent>

        <form>
          <div className={style.container__date}>
            <TextField
              id="dateAt"
              type="date"
              defaultValue="2024-02-01"
              className={style.container__dateInput}
            />
            <MinusIconSVG />
            <TextField
              id="dateTo"
              type="date"
              defaultValue="2024-02-29"
              className={style.container__dateInput}
            />
          </div>
        </form>
      </div>
      <div className={style.container__content}>
        <ul className={style.container__cards}>{cardItem}</ul>
        <div className={style.container__publicationsArea}>
          <div className={style.container__publicationsTop}>
            <h3 className={style.container__name}>
              Топ-10 амбассадоров по количеству публикаций
            </h3>
            <ul className={style.container__publicationsList}>{authorItem}</ul>
          </div>

          <div
            className={`${style.container__publicationsTop} ${style.container__publicationsTop_center}`}
          >
            <h3 className={style.container__name}>
              Количество публикаций по платформам
            </h3>
            <BarChart
              xAxis={[
                {
                  scaleType: "band",
                  data: ["VC", "ВК", "Хабр", "Inst", "Medium"],
                },
              ]}
              series={[{ data: [10, 21, 20, 36, 21] }]}
              width={419}
              height={267}
              className={style.container__bar}
              sx={{ "& rect": { fill: "#ac9ff0", outline: `5px` } }}
            />
          </div>
        </div>
        <div className={style.container__budgetArea}>
          <h3 className={style.container__name}>Бюджет на мерч</h3>
          <ul className={style.container__merchList}>{merchItem}</ul>

          <li
            className={`${style.container__merch} ${style.container__merch_total}`}
          >
            <p className={style.container__text}>Клуб учащихся ночью</p>
            <p
              className={`${style.container__text}  ${style.container__text_sum}`}
            >
              {clubSum} &#8381;
            </p>
          </li>
          <li
            className={`${style.container__merch} ${style.container__merch_total}`}
          >
            <p className={style.container__text}>ВСЕГО</p>
            <p className={style.container__text}>{total + clubSum} &#8381;</p>
          </li>
        </div>
      </div>
    </Content>
  )
}

export { Analytics }
