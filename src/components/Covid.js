import React, { useEffect, useState } from "react";
import "./Covid.css"

const Covid = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <html lang="en" />
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Bootstrap demo</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
        <link href="Covid.css" />
      </head>
      <body>
        <div class="container text-center">
          <h1 class="text-uppercase">live</h1>
          <h1 class="text-uppercase">covid-19 tracker</h1>
        </div>
        <div class="container">
          <div class="row gy-3">
            <div class="col-md-6">
              <div class="card bg-primary bg-gradient">
                <div class="card-body">
                  <h5 class="card-title text-uppercase">recoverd cases</h5>
                  <p class="card-text"><h3 class="text-uppercase">{data.recovered} people recovered</h3></p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card bg-secondary bg-gradient">
                <div class="card-body">
                  <h5 class="card-title text-uppercase">active cases</h5>
                  <p class="card-text"><h3 class="text-uppercase">{data.active} people with active cases</h3></p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card bg-success bg-gradient">
                <div class="card-body">
                  <h5 class="card-title text-uppercase">total deaths</h5>
                  <p class="card-text"><h3 class="text-uppercase">{data.deaths} who people died</h3></p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card bg-info bg-gradient">
                <div class="card-body">
                  <h5 class="card-title text-uppercase">confirmed cases</h5>
                  <p class="card-text"><h3 class="text-uppercase">{data.confirmed} cases where confirmed</h3></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
      </body>
    </>
  )
}
export default Covid;