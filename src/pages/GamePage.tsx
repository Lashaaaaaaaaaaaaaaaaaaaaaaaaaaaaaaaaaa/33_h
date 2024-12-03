import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_GAME } from '../graphql/queries/get-game'
import { useParams } from 'react-router-dom'
import { IGame } from '../interfaces/game.interface'
import { IReview } from '../interfaces/review.interface'

const GamePage: React.FC = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_GAME, {
    variables: { gameId: id },
  });

  if (loading) return <h1>Loading . . .</h1>;
  if (error) return <h3>Error: {error.message}</h3>;

  const { title, platform, reviews } = data ? data.game : {} as IGame;

  return (
    <div>
      <h1>{title}</h1>
      <h2>Platforms:</h2>
      <ul>
        {platform.map((p: string) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <h2>Reviews:</h2>
      <ul>
        {reviews.map((review: IReview, index: number) => (
          <li key={index}>
            <p><strong>Rating:</strong> {review.rating}</p>
            <p><strong>Author:</strong> {review.author.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GamePage;