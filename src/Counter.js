import React, { useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Grid , Button} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    operatorButton:{
        fontSize: '5rem !important' ,
        marginLeft: '15px',
        marginRight: '15px',
        '&:hover': {
            backgroundColor: '#fff'
        },
    },
    default:{
        width:'100px',
        height:'100px',
        marginTop:'15px',
        fontSize: '20px'
    },
    red:{
        backgroundColor: 'red',
        width:'100px',
        height:'100px',
        marginTop:'15px',
        fontSize: '20px',
        color:'#fafafa'
    },
    green:{
        backgroundColor: 'green',
        width:'100px',
        height:'100px',
        marginTop:'15px',
        fontSize: '20px',
        color:'#fafafa'
    }
}))

export default function Counter (){
    const [initialValue, setValue] = useState(0)
    const classes = useStyles()

    const subtract = () => {
        console.log(initialValue)
        setValue(initialValue - 1)
    }

    const add = () =>{
        setValue(initialValue + 1)
    }
    
    return(
       <Grid container direction='row' justifyContent='center'>
           <Grid item >
                <Button variant="text" className={classes.operatorButton} onClick={subtract} > - </Button>
           </Grid>
           <Grid item>
                <Button variant="contained" className = {initialValue < 5 ? classes.red : initialValue > 100  ?  classes.green : classes.default} >{initialValue}</Button>
           </Grid>
           <Grid item>
                <Button variant="text" className={classes.operatorButton} onClick={add}> + </Button>
           </Grid>
       </Grid>
    )
}