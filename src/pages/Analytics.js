import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "lucide-react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import "../component.css";
import { Store, CreditCard, ShoppingBag } from "lucide-react";
import ListA from "../components/ListA.js";
import Chart from "../components/Chart.js";
function Analytics() {
  return (
    <div className="w-full flex flex-col space-y-6 py-12 px-14 bgcolor">
      <div>
        <h2>Analytics</h2>
        <div className="mt-5">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
                <Card
                  sx={{ minWidth: 49 + "%", height: 152 }}
                  className="gradient"
                >
                  <CardContent className="text-white">
                    <div>
                      <CreditCard className="text-white" />
                    </div>
                    <Typography gutterBottom variant="h5" component="div">
                      INR 300K
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: "white" }}
                    >
                      Total Earnings
                    </Typography>
                  </CardContent>
                </Card>
                <Card
                  sx={{ minWidth: 49 + "%", height: 152 }}
                  className="gradient"
                >
                  <CardContent className="text-white">
                    <div>
                      <ShoppingBag className="text-white" />
                    </div>
                    <Typography gutterBottom variant="h5" component="div">
                      INR 900K
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: "white" }}
                    >
                      Total Sales
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card sx={{ maxWidth: 345 }} className="gradient">
                  <Stack spacing={2} direction="row">
                    <div className="iconstyle">
                      <Store className="mt-5 ml-5" />
                    </div>
                    <div className="p-[10px] text-white">
                      <span className="pricetitle">INR 20000</span>
                      <br />
                      <span className="pricesubtitle">Total Income</span>
                    </div>
                  </Stack>
                </Card>
                <Card sx={{ maxWidth: 345 }} className="">
                  <Stack spacing={2} direction="row">
                    <div className="iconstyle">
                      <Store className="mt-5 ml-5 text-black" />
                    </div>
                    <div className="p-[10px]">
                      <span className="pricetitle">INR 20000</span>
                      <br />
                      <span className="pricesubtitle">Total Income</span>
                    </div>
                  </Stack>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <div className="py-2"></div>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                  <Chart />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                  <div className="p-[10px]">
                    <span className="pricetitle">Popular Products</span>{" "}
                  </div>
                  <ListA />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
