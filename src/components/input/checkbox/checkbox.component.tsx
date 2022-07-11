/** @jsx h */
import { h } from 'preact';
import * as styles from './checkbox.module.less'

type CheckboxProps = {
    label: string
    name: string
    id: string
    checked?: boolean | false
    onChange?: () => void
}

export const CheckboxComponent = (props: CheckboxProps) => {
    return (
        <div className={styles['checkbox-component']}>
            <label for={props?.id}>
                <input
                    type="checkbox"
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
