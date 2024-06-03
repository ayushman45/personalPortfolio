import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('./DynamicNoSSR'),
  { ssr: false }
)

function Home() {
  return (
    <div>
      <DynamicComponentWithNoSSR />

    </div>
  )
}

export default Home