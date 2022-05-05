import { withPageAuthRequired } from "@auth0/nextjs-auth0"

export default function Journal() {
  return (
    <p>this is journal</p>
  )
}

export const getServerSideProps = withPageAuthRequired();