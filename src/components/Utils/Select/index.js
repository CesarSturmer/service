import {TextField} from '@material-ui/core'

const Select = (props) => {
    return (
        <TextField
            value={props.value}
            onChange={props.onChange}
            label={props.label}
            variant='outlined'
            size='small'
            type='number'
            margin='normal'
            style={{minWidth: '14rem'}}
            select
            required
        >
            {props.children}
        </TextField>
    )
}

export default Select