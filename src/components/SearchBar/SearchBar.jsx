import { useSearchParams } from "react-router-dom";
import { Notify } from "notiflix";

export default function SearchBar () {
  
  const [params, setSearchParams] = useSearchParams();
  const search = params.get('query') ?? '';

  const onSubmitSearchBar = (query) => {
    query.preventDefault();
    const form = query.currentTarget;
    const searchValue = form.search.value 
      .trim()
      .toLowerCase();
    
    if (searchValue === '') {
      setSearchParams({});
      return;
    };

    if (searchValue === search) {
      Notify.info('Enter new request, please!');
      return;
    };

    setSearchParams({ query: searchValue });
  };


 return (
        <div>
                <form onSubmit={onSubmitSearchBar}>
                    <button type="submit">
                        <span>Search</span>
                    </button>
                    <input
                      name="search" 
                      type="text"
                      autoComplete="off"
                      autoFocus
                      placeholder="Enter your request!"
                    />
                </form>
        </div>
  )
};