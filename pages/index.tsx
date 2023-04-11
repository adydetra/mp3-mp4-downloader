import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

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
        <title>Music | Video Downloader</title>
      </Head>
      <section className="bg-slate-900">
        <div className='container mx-auto min-h-screen flex items-center px-4 lg:w-5/12'>
          <div className='flex mb-12 w-full'>
            <input className='w-full px-3 rounded-l-lg focus:outline-none' type="text" placeholder="Paste URL..." onChange={handleChangeText}/>
            <Link href='#widgetApi'>
              <button className='py-3 px-8 text-slate-700 hover:text-slate-900 bg-amber-300 hover:bg-amber-200' onClick={handleSubmit}>Submit</button>
            </Link>
          </div>
        </div>
      </section>
      {link && (
      <section className='' id='focus'>
        <iframe 
          className='w-full py-28 h-full flex items-center border-none min-h-screen'
          id='widgetApi'
          src={`https://convert2mp3s.com/api/widgetv2?url=${currentLink}`}
          scrolling="no"
          allowTransparency={true}
        >
        </iframe>
      </section>
       )}
    </main>
  )
}
