import React from 'react'
import Landing from '../components/Landing'
import Highlights from '../components/Highlights'
import Featured from '../components/Featured'
import Discounted from '../components/Discounted'
import Explore from '../components/Explore'

export default function Home({books}) {
  return (
    <>
        <Landing/>
        <Highlights/>
        <Featured books={books}/>
        <Discounted books={books}/>
        <Explore />
    </>
  )
}
