/** @jsx h */
import { h, JSX } from 'preact'
import { useContext, useEffect, useState } from 'preact/hooks';
import { HolidayContext } from '../../context/holidayContext';
import { HolidayData, HolidaysContextType } from '../../types/booking';
import FilterHotelComponent from '../hotel/filter.component';
import HotelCardComponent from '../hotel/hotel.component';
import * as styles from './holiday.module.less'


export default function HolidayComponent(): JSX.Element {
    const { holidays } = useContext(HolidayContext) as HolidaysContextType;
    const [holidaysToShow, setHolidaysToShow] = useState<HolidayData[]>([]);

    // Set holidays data to component state
    useEffect(() => {
        setHolidaysToShow(holidays);
    }, [holidays])

    return (
        <section className={styles["holiday-result"]}>
            {holidaysToShow.length ? <div className={styles["wrapper"]}>
                <div className={styles["filter"]}>
                    <FilterHotelComponent holidays={holidays} setHolidaysToShow={setHolidaysToShow} />
                </div>
                <div className={styles["result"]}>
                    {holidaysToShow.map(
                        (item) => <div className=""><HotelCardComponent {...item} /></div>
                    )}
                </div>
            </div> : <div>No results found</div>}
        </section>
    )
}