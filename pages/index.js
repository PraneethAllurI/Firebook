import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Header from '../components/header/Header'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import { db } from '../fib'
import Videoplayer from '../components/VideoPlay'
import MarketPlace from '../components/Market'
/* import Groups from './groups' */
import FriendList from '../pages/friendlist'
import Profile from './profile'



export default function Home({ session, posts }) {
  if (!session) return <Login />;
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Firebook</title>
      </Head>

      <Header />

      <main className="flex">
        <Sidebar />
        {/* <Videoplayer /> */}
        <Feed posts={posts} />
        {/* <MarketPlace /> */}
        {/* <Groups /> */}
        {/* <Friends /> */}
        {/* <Profile /> */}
        <Widgets />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);


  /* --------------------------------------------------------------------------------- */
  const posts = await db.collection("posts").orderBy
    ("timestamp", "desc").get();

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }))

  /* -------------------------------------------------------------------------------------- */
  return {
    props: {
      session,
      posts: docs,
    },
  }
}
