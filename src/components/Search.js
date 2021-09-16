import React, { useState, useEffect } from 'react' 
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import spinner from '../images/64x64.gif'

const Search = () => {

  const history = useHistory()

  const [ artist, setArtist ] = useState(null)
  const [ albums, setAlbums ] = useState(null)
  const [ searchTerm, setSearchTerm ] = useState('')

  const [ hasError, setHasError ] = useState(false)
  
  
  useEffect(() => {
    if (!searchTerm) return
    if (searchTerm) {
      const getArtist = async () => {
        try {
          const { data } = await axios(
            `https://theaudiodb.com/api/v1/json/1/search.php?s=${searchTerm}`
          )
          setArtist(data.artists[0])
        } catch (err) {
          console.log('error')
        }
      }
      getArtist()
    }
  }, [searchTerm, history])


  const handleChange = async (event) => {
    if (event.target.value.includes(' ')){
      ' ' === '_'
    }
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    if (searchTerm) {
      const getAlbums = async () => {
        try {
          const { data } = await axios(
            `theaudiodb.com/api/v1/json/1/discography.php?s=${searchTerm}`
          )
          setAlbums(data.album)
        } catch (err) {
          console.log('error')
        }
      }
      getAlbums()
    }
  }, [artist, history, searchTerm])


  return (
    <>
      <div className="search-background">
        <div className="container">
          <div className="search">
            <h1 className="search-title">Artist Search</h1>
      
            <div className="search-bar">
              <input type="text" placeholder="" onInput={handleChange} value={searchTerm}></input>
            </div>
          </div>
        </div>
        <div className="container">
          {artist &&
          <>
            <h2 className="artist-name">{artist.strArtist}</h2>
            <div className="profile">
              <img className="artist-pic" src={artist.strArtistThumb} />
              <div className="artist-bio">
                <p >
                  {artist.strBiographyEN}
                </p>

              </div>
              
              {/* <ul>
                {albums.map((a, i) => {
                  return (
                    <li key={i}>{a[0].strAlbum}<span>{a[0].intYearReleased}</span></li>
                  )
                })
                }
              </ul> */}
            </div>
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