/** @jsx h */
import { h, JSX } from 'preact'
import { STAR } from '../../consts/search'

type Rating = {
    available: number
    total: number
}

export default function RatingComponent(props: Rating): JSX.Element {
    return (
        <div>
            {Array.from({ length: props.available }).map((_, idx: number) => STAR.FILLED)}
            {Array.from({ length: props.total - props.available }).map((_, idx: number) => STAR.EMPTY)}
        </div>
    )
}