/** @jsx h */
import { h, JSX } from 'preact'
import { LOCATIONS } from '../../consts/search'
import { ButtonComponent } from '../button/button.component'
import { DateComponent } from '../date/date.component'
import * as styles from './search.module.less'
import { SelectComponent } from '../input/select/select.component'
import { route } from 'preact-router';
import { NumberComponent } from '../input/number/number.component'
import { useRouter } from 'preact-router'

export default function SearchComponent({ loading }): JSX.Element {
  const [searchParams] = useRouter();
  const onSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const url = `/results?location=${e.target['location']?.value}&departureDate=${e.target['departureDate'].value}&duration=${e.target['duration'].value}&adults=${e.target['adults'].value}`;
    route(url, true)
  }

  return (
    <section className={`${styles['search-form']} full-bleed`}>
      <div className="wrapper">
        <form onSubmit={onSubmit}>
          <div className={styles["grid"]}>
            <div className={styles["col"]}>
              <SelectComponent name="location" label="Destination" id="location_field" value={searchParams?.matches?.location || ""} options={LOCATIONS} required={true} />
            </div>
            <div className={styles["col"]}>
              <DateComponent name="departureDate" label="Date" id="departureDate" value={searchParams?.matches?.departureDate} required={true} />
            </div>
            <div className={styles["col"]}>
              <NumberComponent name="duration" label="Duration" id="duration_field" min={1} max={31} value={searchParams?.matches?.duration || 7} required={true} />
            </div>
            <div className={styles["col"]}>
              <NumberComponent name="adults" label="Adults" id="adults_field" min={1} max={9} value={searchParams?.matches?.adults || 2} required={true} />
            </div>
            <div className={styles["col"]}>
              <ButtonComponent text={loading ? "Loading..." : "Search"} type="SUBMIT" disabled={loading} />
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}