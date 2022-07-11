/** @jsx h */
import { h } from 'preact';
import * as styles from './radio.module.less'

type RadioProps = {
    label: string
    name: string
    id: string
    checked?: boolean | false
    onChange?: () => void
}

export const RadioComponent = (props: RadioProps) => {
    return (
        <div className={styles['radio-component']}>
            <label for={props?.id}>
                <input
                    type="radio"
                    name={props?.name}
                    id={props?.id}
                    checked={props?.checked}
                    onChange={props?.onChange}
                />
                {props?.label}
            </label>
        </div>
    );
};
