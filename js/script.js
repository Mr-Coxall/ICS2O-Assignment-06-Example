// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-06-Example/sw.js", {
    scope: "/ICS2O-Assignment-06-Example/",
  })
}

/**
 * Get API info.
 */
async function getImage() {
  let response = await fetch("https://api.catboys.com/img")
  let jsonData = await response.json()

  return jsonData
}
getImage().then(function (jsonData) {
  document.getElementById("api-image").innerHTML =
    '<img src="' + jsonData.url + '" alt="API image" class="center">'
  if (jsonData.artist_url != "none") {
    document.getElementById("image-artist").innerHTML =
      "<p>Artist: " +
      '<a href="' +
      jsonData.artist_url +
      '">' +
      jsonData.artist +
      "</a>"
  } else {
    document.getElementById("image-artist").innerHTML = "<p>Artist: unknown</p>"
  }
})
