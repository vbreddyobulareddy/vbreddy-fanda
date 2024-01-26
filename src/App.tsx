import { gql, useQuery } from "@apollo/client";

const GET_VOTES_QUERY = gql`
  query MyQuery {
    votes {
      id
      timeCast
    }
  }
`;
export default function App() {
  const { loading, error, data } = useQuery(GET_VOTES_QUERY);
  console.log("--==GET_VOTES_QUERY ", loading, error, data);
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world! : {data?.votes ? data.votes.length : 'loading'}
    </h1>
  );
}
