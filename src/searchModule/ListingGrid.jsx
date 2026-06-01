import ListingCard from "./ListingCard";

const listings = [1, 2, 3, 4, 5, 6];

export default function ListingGrid() {
  return (
    <div className="p-5 grid grid-cols-1 xl:grid-cols-2 gap-5">
      
      {listings.map((item) => (
        <ListingCard key={item} />
      ))}

    </div>
  );
}