import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Header from '../pages/components/header/Header'
import Login from './components/Login'
import Sidebar from '../pages/components/Sidebar'
import Feed from '../pages/components/Feed'
import Widgets from './components/Widgets'
import { db } from '../fib'





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
        <Feed posts={posts} />
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
