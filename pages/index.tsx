import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

import vercel from '../public/youtube.svg'

export default function Home() {

  const [link, setLink] = useState('');
  const [currentLink, setCurrentLink] = useState('');

  function handleChangeText(any: any) {
    setLink(any.target.value);
  }
  
  function handleSubmit() {
    setCurrentLink(link);
  }

  return (
    <main className="min-h-screen">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <title>Music | Video Downloader</title>
      </Head>
      <section className="bg-slate-900">
        <div className='container mx-auto min-h-screen flex items-center px-4 lg:w-5/12'>
          <div className='flex-row text-center space-y-8 lg:space-y-16 mb-12 w-full'>
            <h1 className='text-white text-xl lg:text-3xl font-semibold'><text className='text-red-400'>Youtube</text> Downloader</h1>
            <div className='flex'>
              <input className='w-full px-3 rounded-l-lg focus:outline-none' type="text" placeholder="Paste URL..." onChange={handleChangeText}/>
              <Link href='#widgetApi'>
                <button className='py-3 px-8 text-slate-700 hover:text-slate-900 bg-amber-200 hover:bg-amber-300' onClick={handleSubmit}>Submit</button>
              </Link>
            </div>
            <h4 className='text-slate-400 text-sm lg:text-xl'>MP3 / MP4 Supported</h4>
          </div>
        </div>
      </section>
      {link && (
      <section className='mt-28' id='focus'>
        <iframe 
          className='w-full h-full flex items-center border-none min-h-screen'
          id='widgetApi'
          src={`https://convert2mp3s.com/api/widgetv2?url=${currentLink}`}
          scrolling="no"
          allowTransparency={true}
        >
        </iframe>
      </section>
       )}
      <section className='py-12 lg:py-28'>
        <h2 className='text-lg lg:text-4xl text-center font-bold'>Supports</h2>
        <div className="container mx-auto py-4 lg:py-12 flex justify-center">
          <Image
            alt="Vercel logo"
            src={vercel}
            className="w-12 h-12 lg:w-28 lg:h-28"
          />
        </div>
      </section>
    </main>
  )
}
