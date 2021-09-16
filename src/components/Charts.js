import React, { useEffect, useState } from 'react' 
import { Link } from 'react-router-dom'
import axios from 'axios'

const Charts = () => {

  const [ charts, getCharts ] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios('https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=100&country=uk&apikey=4a57c04a9326056adaa43411fcd7db3c')
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])





  return (
    <h1>Charts</h1>
  )
}
export default Charts