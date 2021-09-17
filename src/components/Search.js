import React, { useState, useEffect } from 'react' 
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import spinner from '../images/spinner.gif'
import beyonce from '../images/beyonce.gif'

const Search = () => {

  const history = useHistory()

  const [ artist, setArtist ] = useState(null)
  const [ albums, setAlbums ] = useState([])
  const [ searchTerm, setSearchTerm ] = useState('')

  const [ hasError, setHasError ] = useState(false)

  // const albumArray = albums[0]
  // console.log(albumArray)
  
  const getArtist = async (searchTerm) => {
    setArtist(null)
    setAlbums(null)
    try {
      const { data } = await axios(
        `https://theaudiodb.com/api/v1/json/1/search.php?s=${searchTerm}`
      )
      setArtist(data.artists[0])
    } catch (err) {
      setHasError(true)
    }
  }

  const getAlbums = async (searchTerm) => {
    try {
      const { data } = await axios(
        `https://theaudiodb.com/api/v1/json/1/discography.php?s=${searchTerm}`
      )
      setAlbums(data.album)
      console.log('Data ->', albums)
    } catch (err) {
      setHasError(true)
    }
  }

  const handleChange = async (event) => {
    if (event.target.value.includes(' ')){
      ' ' === '_'
    }
    if (event.target.value === null) {
      setArtist(null)
    }
    setSearchTerm(event.target.value)
  }

  // const handleEnter = async (event) => {
  //   if (event.code === 'Enter'){
  //     handleChange()
  //   }
  //   return
  // }


  useEffect(() => {
    searchTerm && getArtist(searchTerm)
  }, [searchTerm, history])

  useEffect(() => {
    searchTerm && getAlbums(searchTerm)
  }, [artist, history, searchTerm])


  return (
    <>
      <div className="search-background">
        <div className="container">
          <div className="search">
            <h1 className="search-title">Artist Search</h1>
            <div className="search-bar">
              <input type="text" placeholder="" onChange={handleChange} defaultValue={searchTerm}></input>
            </div>
          </div>
        </div>
        <div className="container">
          {artist ?
            <>
              <h2 className="artist-name">{artist.strArtist.toUpperCase()}</h2>
              <div className="profile">
                <div className="album-pos">
                  <img className="artist-pic" src={artist.strArtistThumb} />
                  {albums ?
                    <>
                      <div className="albums">
                        <h2 className="album-title">Albums</h2>
                        {albums.map((a, i) => {
                          return (
                            <p key={i}><strong>{a.strAlbum}</strong> - {a.intYearReleased}</p>
                          )
                        })}
                      </div>
                    </>
                    :
                    <>
                      { hasError && <h2></h2>}
                    </>
                  } 
                </div>
                <div className="artist-bio">
                  <p >
                    {artist.strBiographyEN}
                  </p>
                </div>


              </div>
            </>
            :
            <>
              { hasError ?
                <div className="error-div">
                  <h2 className="error-message">No Artist Found....</h2>
                  <img src={beyonce} className="beyonce" />
                </div>
                :
                <div className="spinner">
                  <img className="gif" src={spinner}/>
                </div>
              }
            </>
          }
        </div>
        {/* <footer>
        <hr />
        <p className="footer-text">&copy; Vez &amp; Dan 2021</p>
      </footer> */}
      </div>
    </>
  )
}
export default Search