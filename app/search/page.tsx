import { redirect } from "next/navigation";

interface SearchPageProps{
  searchParams: {
    term: string;
  }
}


function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = searchParams;
  if (!term) {
    redirect('/')
  }

  return (
    <div>
      {term}
    </div>
  )
}

export default SearchPage
