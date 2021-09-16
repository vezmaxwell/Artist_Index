import React, { useState, useEffect } from 'react' 
import axios from 'axios'

const Search = () => {

  const [ artist, setArtist ] = useState(null)
  const [ searchTerm, setSearchTerm ] = useState('')
  
  
  useEffect(() => {
    if (searchTerm) {
      const getArtist = async () => {
        try {
          const { data } = await axios(
            `https://theaudiodb.com/api/v1/json/1/search.php?s=${searchTerm}`
          )
          setArtist(data.artists[0])
        } catch (err) {
          console.log(err)
        }
      }
      getArtist()
    }
  }, [searchTerm])


  const handleChange = async (event) => {
    if (event.target.value.includes(' ')){
      ' ' === '_'
    }
    setSearchTerm(event.target.value)
  }



  return (
    <><div className="container">
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

            <p className="artist-bio">
              {artist.strBiographyEN}
            </p>
          </div>
        </>
      }
    </div>
    </>




  
  )
}
export default Search