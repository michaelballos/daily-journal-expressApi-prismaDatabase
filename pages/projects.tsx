import { withPageAuthRequired } from "@auth0/nextjs-auth0"
export default function Projects () {
  return <p>this is projexts</p>
}

export const getServerSideProps = withPageAuthRequired();