
import CategoryCardsContainer from '../components/cards/CategoryCardsContainer';
import CardsContainer from '../components/cards/CardsContainer';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center p-6">Explora Categorías</h1>
      <CategoryCardsContainer />
      <h1 className="text-3xl font-bold text-center p-6">Todas las Comidas</h1>
      <CardsContainer />
    </div>
  );
}