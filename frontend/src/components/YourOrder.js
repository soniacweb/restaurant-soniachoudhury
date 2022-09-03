import React from "react";
import { useSelector } from "react-redux";

// import { addToOrder, removeFromOrder } from "../actions/orderActions";
import { Grid, Paper, Typography, ButtonBase } from "@mui/material";
import { styled } from "@mui/material/styles";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const YourOrder = ({ itemId, location }) => {
  const orderList = useSelector((state) => state.order);

  const {
    userOrder: { orderItems },
  } = orderList;

  console.log(orderItems);

  const total = orderItems.reduce((accumulator, currentValue) => {
    return parseInt(accumulator) + parseInt(currentValue.price);
  }, 0);

  return (
    <>
      {orderItems.map((item) => (
        <Paper
          sx={{
            p: 2,
            margin: "20px auto",
            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img alt={item.disName} src={item.image} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {item.disName}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {item.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.type}
                  </Typography>
                  {/* <Typography variant="body2" color="text.secondary">
                    {item.qty}
                  </Typography> */}
                </Grid>
                <Grid item>
                  <Typography sx={{ cursor: "pointer" }} variant="body2">
                    Remove
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  Price: £{Number(item.price).toFixed(2)}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}

      <Paper
        sx={{
          p: 2,
          margin: "20px auto",
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}></Grid>
            <Grid item>
              <Typography
                component="div"
                style={{ margin: "50px auto", fontSize: "20px" }}
                variant="title"
              >
                Total: £{total.toFixed(2)}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default YourOrder;
