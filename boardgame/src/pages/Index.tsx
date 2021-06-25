import React from "react";
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

//test : 
// #2E294E // #9055A2 // #D499B9
const useStyles = makeStyles({
    main : {
        textAlign:'center',
        padding : "10% 3% 10% 3%",
    },
    title : {
    },
    detail :{
        padding : "10% 3% 10% 3%",
    },
})

const Index: React.FC = () =>{
    
    const history = useHistory()
    const classes = useStyles()

    const onClick = () =>{
        history.push('/akinator')
    }

    return(
        <div
            className={classes.main}
        >
            <h1 className={classes.title}>프로젝트 이름 </h1>
            <div className={classes.detail}>
                <p>무슨 보드게임을 해야할지 모르겠다고요??</p>
                <p>저희가 딱 알맞는 게임을 추천해드릴께요!!</p>
                <p>고민은 줄이고, 즐거움만 잔뜩 누리세요!</p>
            </div>
                    
            <Button 
                variant="contained" 
                color="primary"
                onClick={onClick}
            >지금 바로 시작하기</Button>
        </div>
    )
}

export default Index