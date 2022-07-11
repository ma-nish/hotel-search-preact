/** @jsx h */
import { h, JSX } from 'preact'
import { useCallback, useEffect, useState } from 'preact/hooks'
import { HOTEL_FACILTITIES, PRICE_PER_PERSON, STAR } from '../../consts/search'
import { HolidayData } from '../../types/booking'
import { ButtonComponent } from '../button/button.component'
import { CheckboxComponent } from '../input/checkbox/checkbox.component'
import { RadioComponent } from '../input/radio/radio.component'
import * as styles from './filter.module.less'


export default function FilterHotelComponent({ holidays, setHolidaysToShow }): JSX.Element {
    const [rating, setRating] = useState<number>(0);
    const [facilities, setFacilities] = useState<string[]>([]);
    const [pricePerPerson, setPricePerPerson] = useState<[number, number]>([-1, 10000]);

    // Filter holidays data by rating
    const filterByRating = useCallback((rating: number) => {
        const filteredData = holidays.filter((option: HolidayData) =>
            Number(option.hotel.content.starRating) > rating - 1);

        // Set filtered data to component state
        setHolidaysToShow([...filteredData]);
    }, [holidays])

    useEffect(() => {
        filterByRating(rating);
    }, [filterByRating, rating])

    // Filter holidays data by available facilities
    const filterByFacilities = useCallback((facilities: string[]) => {
        let filteredData: HolidayData[] = holidays

        facilities.forEach((option: string) => {
            filteredData = filteredData.filter((op: HolidayData) =>
                op.hotel.content.hotelFacilities?.includes(option))
        })

        // Set filtered data to component state
        setHolidaysToShow([...filteredData]);
    }, [holidays])

    useEffect(() => {
        filterByFacilities(facilities);
    }, [filterByFacilities, facilities])

    // Filter holidays data by price per person
    const filterByPricePerPerson = useCallback((price: [number, number]) => {
        const filteredData = holidays.filter((option) =>
            Number(option.depositPerPerson) > price[0] - 1 && Number(option.depositPerPerson) < price[1] + 1);

        // Set filtered data to component state
        setHolidaysToShow([...filteredData]);
    }, [holidays])

    useEffect(() => {
        filterByPricePerPerson(pricePerPerson);
    }, [filterByPricePerPerson, pricePerPerson])

    // Facility selection in filter
    const handleFacilityChange = (facility: string) => {
        let availableFacilities: string[] = facilities;

        if (facilities.includes(facility)) {
            availableFacilities = facilities.filter((op: string) => op !== facility);
        } else {
            availableFacilities.push(facility);
        }

        setFacilities([...availableFacilities]);
    }

    // Price change in filter
    const handlePriceChange = (price: [number, number]) => {
        setPricePerPerson(price);
    }

    // Clear filter
    const handleClear = () => {
        setRating(0);
        setFacilities([]);
        setPricePerPerson([-1, 10000]);
        setHolidaysToShow([...holidays]);
    }

    return (
        <div className={styles["wrapper"]}>
            <div className={styles["rating"]}>
                {Array.from({ length: 5 }).map(
                    (_, idx) => <ButtonComponent
                        text={rating > idx ? STAR.FILLED : STAR.EMPTY}
                        skin="SECONDARY"
                        onClick={() => setRating(idx + 1)}
                    />
                )}
            </div>
            <hr />
            <div className={styles["facilities"]}>
                <h3>Facilities</h3>
                {HOTEL_FACILTITIES.map((option: string, idx: number) =>
                    <CheckboxComponent
                        key={idx}
                        id={"facility" + idx}
                        name={"facility" + idx}
                        label={option}
                        checked={facilities.includes(option)}
                        onChange={() => handleFacilityChange(option)}
                    />
                )}
            </div>
            <hr />
            <div className={styles['price-per-person']}>
                <h3>Price Per Person</h3>
                {PRICE_PER_PERSON.map((option: any, idx: number) =>
                    <RadioComponent
                        key={idx}
                        name="price"
                        id={'price-' + idx}
                        label={option.label}
                        checked={pricePerPerson[0] === option.value[0]}
                        onChange={() => handlePriceChange(option.value)}
                    />
                )}
            </div>
            <div className={styles['reset']}>
                <ButtonComponent text='Clear' onClick={handleClear} />
            </div>
        </div>
    )
}