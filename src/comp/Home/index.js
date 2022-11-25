import LiveC from './LiveC';
import Nav from './Nav';

function Home() {
  return (
    <div className="h-screen bg-slate-900 text-white overflow-hidden">
      <Nav />
      <LiveC />
    </div>
  )
}

export default Home