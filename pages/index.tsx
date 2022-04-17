import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import sidebar from '../components/sidebar'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
    <sidebar />
    </main>


    </div>
  )
}

export default Home
