import { gql } from "@apollo/client";

export const GET_GAME = gql`
  query Game($gameId: ID!) {
    game(id: $gameId) {
       id
       platform
       title
       reviews {
        rating
        author {
          name
      }
    }
  }
} 
`