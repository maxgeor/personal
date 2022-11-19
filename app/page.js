import React from 'react'
import Tile from '../components/Tile'

export default function Home() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-12 font-crimson-pro'>
      <Tile position={1}>
        <div className='flex flex-col gap-y-3 -mt-2'>
          <h1 className='text-3xl italic leading-8 '>Max Georgopoulos</h1>
          <h4 className='max-w-md'>I'm a developer & designer. Right now, I'm focused on getting more designers to code.</h4>
        </div>
        <div className='text-sm flex flex-wrap gap-x-3'>
          <a href="https://github.com/maxgeor">Github</a>
          <a href="https://twitter.com/maxoulos">Twitter</a>
          <a href="https://dribbble.com/maxgeo">Dribbble</a>
        </div>
      </Tile>
      <Tile position={2}>
        <div className='flex flex-col gap-y-2 -mt-1'>
          <h3 className='text-xl italic leading-5'>Writing</h3>
          <div className='flex flex-col gap-x-1'>
            <div className='flex items-baseline gap-x-2'>
              <a href="bad.html">In defence of bad writing</a>
              <p className='text-sm'>2022</p>
            </div>
            <div className='flex items-baseline gap-x-2'>
              <a href="yes.html">Yes, you can learn to code</a>
              <p className='text-sm'>2021</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-y-2'>
          <h3 className='text-xl italic leading-5'>Inspo</h3>
          <p>I curate a <a href='https://mmm.page/maxg.inspo2' target='_blank'>personal MOMA</a> of my biggest inspirations</p>
        </div>
        <div className='flex flex-col gap-y-2'>
          <h3 className='text-xl italic leading-5'>Now</h3>
          <ul className='flex flex-col gap-x-1 list-inside list-disc'>
            <li>Living in Lisbon</li>
            <li>Exploring ways to get designers into coding</li>
          </ul>
        </div>
      </Tile>
      <Tile 
        position={3}
        textColor='#F3F3FF'
        backgroundColor='#3B3C56'
        >
        <div className='flex flex-col gap-y-2'>
          <h3 className='text-2xl italic leading-6'>Hueii <span className='text-sm italic'>(Coming soon)</span></h3>
          <p>The easiest way to create VSCode themes</p>
        </div>
      </Tile>
      <Tile
        position={4}
        textColor='white'
        backgroundColor='#3c82f6'
      >
        <div className='flex flex-col gap-y-2'>
          <h3 className='text-2xl italic leading-6'>Formie</h3>
          <p>Beautiful smart contract UIs, with no code</p>
        </div>
      </Tile>
      <Tile 
        position={5}
        textColor='#0A1512'
        backgroundColor='#49b393'
        >
        <div className='flex flex-col gap-y-2'>
          <h3 className='text-2xl italic leading-6'>Scope Todo</h3>
          <p>Good ol' todo widget for Figma (inspired by Ryan Singer's design techniques)</p>
        </div>
      </Tile>
      <Tile 
        position={6}
        textColor='#e6e5e4'
        backgroundColor='#423D37'
      >
        <div className='flex flex-col gap-y-2'>
          <h3 className='text-2xl italic leading-6'>The Quest Board</h3>
          <p>A job board for the Loot community</p>
        </div>
      </Tile>
      <Tile position={7}>
        <div className='flex flex-col gap-y-2'>
          <h3 className='text-2xl italic leading-6'>Dissect Design</h3>
          <p>A collection of product design case studies</p>
        </div>
      </Tile>
    </div>
  )
}
