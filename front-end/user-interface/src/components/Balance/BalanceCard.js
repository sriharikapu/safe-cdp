import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import BalanceButton from "../../buttons/BalanceButton";
import '../../CSS/Balance.css';


const styles = {
  card: {
    minWidth: 586,
    minHeight: 235,
    marginTop: 50
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 15,
    fontWeight: 600,
    color: "#95aac9",
    fontFamily: "Cerebri Sans, sans-serif",
    paddingTop: 10
  },
  pos: {
    marginBottom: 12
  }
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className='balance'>
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Outstanding Balance:
        </Typography>
        
      </CardContent>
      <CardActions>
        <BalanceButton />
      </CardActions> 
    </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
