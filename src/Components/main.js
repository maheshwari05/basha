import React,{useEffect, useState} from 'react';
import { Container, Divider, Button, colors } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../Store/Actions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    parent:{
        margin:24,
        padding:20
    },
    sentencecontainer:{
        bottom:0
    },
    inputcontainer:{
        padding:20
    },
    clickbuttons:{
        background: 'linear-gradient(45deg, #2AA4E1  30%, #04A0EE  90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        margin:30
    },
    buttons:{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        margin:30
    },
    correct:{
        background: 'green',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(0, 255, 0, 0)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        margin:30
    },
    wrong:{
        background: 'red',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(0, 255, 0, 0)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        margin:30
    }
  });


export default function Main(props){
    const dispatch = useDispatch();
    const classes = useStyles();
    const data = useSelector(({sentences})=> sentences)
    const [lucky, setLuck] = useState(Math.floor(Math.random() * 3))
    const [words, setWords] = useState({data:data.data[lucky].split(' ')})
    const result  = useSelector(({basic})=> basic.result)
    const input_buttons  = useSelector(({basic})=> basic.clicked)


    useEffect(()=>{
        dispatch(Actions.setSelected(data.data[lucky]));
    },[lucky])

    useEffect(()=>{
        dispatch(Actions.check());
    },[input_buttons])

    function resetthis(){
        setWords({data:data.data[lucky].split(' ')})
        dispatch(Actions.resetThis())
    }

    function clickHandel(word){
        const temp = [...words.data]
        const index = temp.indexOf(word);
        setWords(prevState=>{
            const data = prevState.data;
            data.splice(index,1);
            return {...prevState,data}
        })
        dispatch(Actions.clickHandel(word));
    }
    
    return (lucky && data && 
        <div className={classes.parent}>
            <h1>Pick the words in Order</h1>
            <Divider />
            <Container>
                <h2>{data.data[lucky]}</h2>
            </Container>
            <div className={classes.inputcontainer}>
                 {input_buttons && input_buttons.map(item=>{
                    return (
                    <Button className={classes.clickbuttons} >{item}</Button>
                    )
                })} 
            </div>
            
            <Container className={classes.sentencecontainer}>
                {words.data.map(item=>{
                    return (
                    <Button className={classes.buttons} onClick={()=> clickHandel(item)}>{item}</Button>
                    )
                })}
            </Container>
            <div>
                {result ? <Button className={classes.correct}>Well Done</Button> : ''}
                {!result && words.data.length===0 ? <Button className={classes.wrong} onClick={()=> resetthis()}>try again</Button>: ''}
            </div>
        </div>
    )

}