import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div role='form' className='clientForm'>
        <Grid cols='6 3 5'>
            <input id='nameField' className='form-control' placeholder='Name' 
                value={props.nameField}
                onChange={props.handleChangeName}/>
        </Grid>
        <Grid cols='6 3 5'>
        <input id='ageField' className='form-control' placeholder='Age' 
                value={props.ageField}
                onChange={props.handleChangeAge}/>

        </Grid>
        <Grid cols='12 3 2'>
            <button className="button" onClick={props.handleAdd} className="btn btn-success">Save</button>
            {/* <IconButton style='primary' onClick={props.handleAdd}>{'Save'}</IconButton> */}
        </Grid>
    </div>
)