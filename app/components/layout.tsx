import Navbar from './navbar'

export default function ({ children } : { children : React.ReactNode }) {
  return <>
    <div className='min-h-screen bg-gradient-to-br from-purple-900 to-indigo-800'>
      <div className="min-h-screen flex flex-col">
        <Navbar/>
        <main> {children} </main>
      </div>
    </div>
  </>
}