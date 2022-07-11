/** @jsx h */
import { h, JSX } from 'preact'
import { HolidayData } from '../../types/booking'
import { ButtonComponent } from '../button/button.component';

import * as styles from './hotel.module.less'
import RatingComponent from '../rating/rating.component';

type KeyFeatures = {
    description: string;
    name: string;
}

export default function HotelCardComponent(props: HolidayData): JSX.Element {
    return (
        <div className={styles['hotel-card']}>
            <img src={props.hotel.content?.images[0]?.RESULTS_CAROUSEL?.url} alt='Hotel' />
            <div className={styles['card-body']}>
                <div className={styles["top"]}>
                    <div className=''>
                        <h3>{props.hotel.name}</h3>
                    </div>
                    <RatingComponent available={Number(props.hotel.content.starRating)} total={5} />
                </div>
                <div className={styles["description"]}>
                    <p className=''>
                        {props.hotel.content.hotelDescription}
                    </p>
                </div>
                <div className={styles["content"]}>
                    <div className={styles["facilities"]}>
                        <h3>Facilities</h3>
                        <ul className=''>
                            {props.hotel.content.hotelFacilities.map((op: string, idx: number) => <li key={idx}>{op}</li>)}
                        </ul>
                    </div>
                    <div className={styles["key-features"]}>
                        <h3>Key Features</h3>
                        <ul className=''>
                            {props.hotel.content.keyFeatures.map((op: KeyFeatures, idx: number) => <li key={idx}>{op.description}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles['card-footer']}>
                <div className={styles['price']}>
                    ${props.depositPerPerson}<small> per person</small>
                </div>
                <ButtonComponent text='Book Now' />
            </div>
        </div>
    )
}