/* eslint-disable jsx-a11y/role-supports-aria-props */
import { Component } from 'react'

export interface RadioEventSelectedItem {
    value: string
    label: string
    index: number
}

export interface RadioProps {
    name: string
    values: string[]
    labels: string[]
    onClick?: Function
    defaultSelected: string
}

export default class RadioComponent extends Component<RadioProps, any, any> {
    public constructor(props: RadioProps) {
        super(props)
    }

    onClick(e: React.MouseEvent<HTMLInputElement, MouseEvent>, index: number) {
        if(this.props.onClick) {
            this.props.onClick.call(this, e, {
                value: this.props.values[index],
                label: this.props.labels[index],
                index: index
            } as RadioEventSelectedItem, this.props)
        }
    }

    public render(): JSX.Element[] {
        return this.props.values.map((value, index) => {
            return(
                <>
                 <input checked={this.props.defaultSelected === value} type='radio' name={this.props.name} value={value} onClick={(e) => this.onClick(e, index)} />
                 <label>{this.props.labels[index]}</label>
                </>
            )
        })
    }
}