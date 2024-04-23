const express = require('express')
const ejs = require('ejs')

const app = express()
const port = 6660
require('dotenv').config()

app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', 'views')

app.get('/', (req, res) => {
  const urlTrending = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
  const urlTopRated = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIEDB_TOKEN}`
    }
  }

  Promise.all([
      fetch(urlTrending, options).then(res => res.json()),
      fetch(urlTopRated, options).then(res => res.json())
    ])
    .then(([trendingJson, topRatedJson]) => {
      console.log(trendingJson)
      res.render('index.ejs', {
        filmlijst: trendingJson.results || [], 
        searchResults: [], 
        topRatedMovies: topRatedJson.results || []
      })
    })
    .catch(err => {
      console.error('error:' + err)
      res.render('index.ejs', {
        filmlijst: [], 
        searchResults: [], 
        topRatedMovies: [] 
      })
    })
})

// app.get('/paramount', (req, res) => {
//   const urlParamount = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_companies=4';

//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: `Bearer ${process.env.MOVIEDB_TOKEN}`
//     }
//   }

//   fetch(urlParamount, options)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok')
//       }
//       return response.json()
//     })
//     .then(paramountJson => {
//       res.render('paramount.ejs', {
//         paramountLijst: paramountJson.results || [], 
//       })
//     })
//     .catch(err => {
//       console.error('error:' + err)
//       res.render('paramount.ejs', {
//         paramountLijst: [], 
//       })
//     })
// })



app.get('/paramount', (req, res) => {
  const urlparamount = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_companies=4';
  const urlparamountAnimation = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_companies=4&with_genres=16';
  const urlparamountAction = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_companies=4&with_genres=28';
  const urlparamountHorror = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_companies=4&with_genres=27';

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIEDB_TOKEN}`
    }
  }

  // Fetch data from the first URL
  fetch(urlparamount, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then(paramountJson => {
      // Fetch data from the second URL
      fetch(urlparamountAnimation, options)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then(paramountAnimationJson => {
          // Fetch data from the third URL
          fetch(urlparamountAction, options)
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok')
              }
              return response.json()
            })
            .then(paramountActionJson => {
              // Fetch data from the fourth URL
              fetch(urlparamountHorror, options)
                .then(response => {
                  if (!response.ok) {
                    throw new Error('Network response was not ok')
                  }
                  return response.json()
                })
                .then(paramountHorrorJson => {
                  res.render('paramount.ejs', {
                    paramountLijst: paramountJson.results || [], 
                    paramountAnimation: paramountAnimationJson.results || [], 
                    paramountAction: paramountActionJson.results || [], 
                    paramountHorror: paramountHorrorJson.results || [], 
                  })
                })
                .catch(err => {
                  console.error('error:' + err)
                  res.render('paramount.ejs', {
                    paramountLijst: [], 
                    paramountAnimation: [], 
                    paramountAction: [], 
                    paramountHorror: [], 
                  })
                })
            })
            .catch(err => {
              console.error('error:' + err)
              res.render('paramount.ejs', {
                paramountLijst: [], 
                paramountAnimation: [], 
                paramountAction: [], 
                paramountHorror: [], 
              })
            })
        })
        .catch(err => {
          console.error('error:' + err)
          res.render('paramount.ejs', {
            paramountLijst: [], 
            paramountAnimation: [], 
            paramountAction: [], 
            paramountHorror: [], 
          })
        })
    })
    .catch(err => {
      console.error('error:' + err)
      res.render('paramount.ejs', {
        paramountLijst: [], 
        paramountAnimation: [], 
        paramountAction: [], 
        paramountHorror: [], 
      })
    })
})


app.get('/sony', (req, res) => {
  const urlSony = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_companies=34';
  const urlSonyAnimation = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_companies=34&with_genres=16';
  const urlSonyAction = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_companies=34&with_genres=28';
  const urlsonyHorror = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_companies=34&with_genres=27';

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIEDB_TOKEN}`
    }
  }

  // Fetch data from the first URL
  fetch(urlSony, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then(sonyJson => {
      // Fetch data from the second URL
      fetch(urlSonyAnimation, options)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then(sonyAnimationJson => {
          // Fetch data from the third URL
          fetch(urlSonyAction, options)
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok')
              }
              return response.json()
            })
            .then(sonyActionJson => {
              // Fetch data from the fourth URL
              fetch(urlsonyHorror, options)
                .then(response => {
                  if (!response.ok) {
                    throw new Error('Network response was not ok')
                  }
                  return response.json()
                })
                .then(sonyHorrorJson => {
                  res.render('sony.ejs', {
                    sonyLijst: sonyJson.results || [], 
                    sonyAnimation: sonyAnimationJson.results || [], 
                    sonyAction: sonyActionJson.results || [], 
                    sonyHorror: sonyHorrorJson.results || [], 
                  })
                })
                .catch(err => {
                  console.error('error:' + err)
                  res.render('sony.ejs', {
                    sonyLijst: [], 
                    sonyAnimation: [], 
                    sonyAction: [], 
                    sonyHorror: [], 
                  })
                })
            })
            .catch(err => {
              console.error('error:' + err)
              res.render('sony.ejs', {
                sonyLijst: [], 
                sonyAnimation: [], 
                sonyAction: [], 
                sonyHorror: [], 
              })
            })
        })
        .catch(err => {
          console.error('error:' + err)
          res.render('sony.ejs', {
            sonyLijst: [], 
            sonyAnimation: [], 
            sonyAction: [], 
            sonyHorror: [], 
          })
        })
    })
    .catch(err => {
      console.error('error:' + err)
      res.render('sony.ejs', {
        sonyLijst: [], 
        sonyAnimation: [], 
        sonyAction: [], 
        sonyHorror: [], 
      })
    })
})


app.get('/disney', (req, res) => {
  const urlTrending = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_companies=3166'
  const urlFrom2005 = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.gte=2010-01-01&primary_release_date.lte=2020-01-01&sort_by=original_title.asc&with_companies=3166%7C104966%7C5391%7C15935%7C81026%7C126540%7C40148%7C171656%7C171657%7C101999%7C109755%7C112779%7C158079%7C158526%7C88716%7C91233%7C135745%7C52126%7C107038%7C107039'
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIEDB_TOKEN}`
    }
  }

  // Fetch data from the first URL
  fetch(urlTrending, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then(trendingJson => {
      // Fetch data from the second URL
      fetch(urlFrom2005, options)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then(from2005Json => {
          console.log(trendingJson, from2005Json)
          res.render('disney.ejs', {
            filmlijst: trendingJson.results || [], // Renamed 'movies' to 'filmlijst'
            searchResults: [], // Voeg een lege array toe voor searchResults
            filmsFrom2005: from2005Json.results || [] // Films vanaf 2005
          })
        })
        .catch(err => {
          console.error('error:' + err)
          res.render('disney.ejs', {
            filmlijst: [], // Renamed 'movies' to 'filmlijst'
            searchResults: [], // Voeg een lege array toe voor searchResults
            filmsFrom2005: [] // Films vanaf 2005
          })
        })
    })
    .catch(err => {
      console.error('error:' + err)
      res.render('disney.ejs', {
        filmlijst: [], // Renamed 'movies' to 'filmlijst'
        searchResults: [], // Voeg een lege array toe voor searchResults
        filmsFrom2005: [] // Films vanaf 2005
      })
    })
})




app.get('/results/search', (req, res) => {
  const searchQuery = req.query.term

  const urlSearch = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIEDB_TOKEN}`
    }
  }

  fetch(urlSearch, options)
    .then(res => res.json())
    .then(data => {

      const searchResults = data.results.filter(movie => 
        movie.poster_path !== null
        ) // Filter films die vóór het jaar 2000 zijn en een poster hebben
        console.log(searchResults)
      
      res.render('results.ejs', {
        title: `Search results for '${searchQuery}'`,
        queryResults: searchResults // Gebruik de variabele searchResults hier
      })

    })
    .catch(err => console.error('error:' + err))
})

app.get('/detail/:movie_id', (req, res) => {
  const movieId = req.params.movie_id
  const detailDataUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${process.env.API_KEY}`
  const detailVideoUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`
  console.log(detailDataUrl)
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIEDB_TOKEN}`
    }
  }


  Promise.all([
      fetch(detailDataUrl, options).then(res => res.json()),
      fetch(detailVideoUrl, options).then(res => res.json())
    ])
    .then(([jsonDetailData, jsonVideoData]) => {
      const detailData = jsonDetailData
      const videoData = jsonVideoData.results

      res.render('detail.ejs', {
        detailData,
        videoData
      })
    })
    .catch(err => {
      console.error('error:' + err)
      res.render('detail.ejs', {
        videoData: [],
        detailData: []
        //   filmlijst: [], // Renamed 'movies' to 'filmlijst'
        //   searchResults: [], // Voeg een lege array toe voor searchResults
        //   topRatedMovies: [] // Add top-rated films to the data sent to EJS
      })
    })
})


app.use((req, res, next) => {
  res.status(404).render('404')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function renderTemplate(file, data) {
  ejs.renderFile(file, data, {}, function (err, str) {
    if (err) {
      console.error(err)
      return // Handle error
    }
    return str
  })
}
