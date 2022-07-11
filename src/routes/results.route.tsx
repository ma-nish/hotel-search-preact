/** @jsx h */
import { h, JSX } from 'preact'
import { useRouter } from "preact-router";
import { useContext, useEffect, useState } from 'preact/hooks';
import SearchComponent from '../components/search/search.component';
import { doRequest } from '../services/http.service';
import { BookingRequest, BookingResponse, HolidaysContextType } from '../types/booking';
import { DateTime } from 'luxon';
import { HolidayContext } from '../context/holidayContext';
import HolidayComponent from '../components/holiday/holiday.component';

export default function ResultsRoute(): JSX.Element {
    const { saveHolidays } = useContext(HolidayContext) as HolidaysContextType;

    const [searchParams] = useRouter();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const departureDate = DateTime.fromFormat(searchParams?.matches?.departureDate, "yyyy-MM-dd").toFormat("dd-MM-yyyy");
        const requestBody: BookingRequest = {
            "bookingType": "holiday",
            "location": searchParams?.matches?.location,
            "departureDate": departureDate,
            "duration": searchParams?.matches?.duration as unknown as number,
            "gateway": "LHR",
            "partyCompositions": [
                {
                    "adults": searchParams?.matches?.adults as unknown as number,
                    "childAges": [],
                    "infants": 0
                }
            ]
        }

        doRequest('POST', '/cjs-search-api/search', requestBody)
            .then((response: unknown | BookingResponse) => {
                setLoading(false)
                // Results are loaded here
                saveHolidays(response?.holidays);
            })
    }, [searchParams])


    return (
        <section>
            <SearchComponent loading={loading} />
            {loading && <div>Loading...</div>}
            {!loading && <HolidayComponent />}
        </section>
    )
}