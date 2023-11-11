export default function SearchBar ({ onSubmitSearchBar, value }) {
  
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
                      defaultValue={value}
                      placeholder="Enter your request!"
                    />
                </form>
        </div>
  )
};
