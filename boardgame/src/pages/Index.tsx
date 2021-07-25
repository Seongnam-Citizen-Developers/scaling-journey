import React from "react";
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import logo from "../static/logo.png";
//test :
// #2E294E // #9055A2 // #D499B9
const useStyles = makeStyles({
  main: {
    textAlign: "center",
    padding: "10% 3% 10% 3%",
  },
  title: {
    fontFamily: "ONE-Mobile-POP",
  },
  detail: {
    padding: "10% 3% 10% 3%",
  },
  imgbox: {
    maxWidth: "200px",
    maxHeight: "200px",
    margin: "0 auto",
  },
});

const Index: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();

  const onClick = () => {
    history.push("/akinator");
  };

  return (
    <div className={classes.main}>
      <div className={classes.imgbox}>
        <img src={logo} alt="logo" width="100%" height="100%"></img>
      </div>
      <h1 className={classes.title}>셜록: 보드게임 탐정</h1>
      <div className={classes.detail}>
        <p>재미있는 보드게임을 찾고 계신가요??</p>
        <p>저희가 추천해드릴께요!!</p>
        <p>고민은 줄이고, 즐거움만 누리세요!</p>
      </div>

      <Button variant="contained" color="primary" onClick={onClick}>
        시작하기
      </Button>
    </div>
  );
};

export default Index;
