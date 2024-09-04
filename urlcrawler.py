import wikipedia

#Search Wikipedia and display URLs
def search_wikipedia(query, results_limit=5):
    search_results = wikipedia.search(query, results=results_limit)
    
    if not search_results:
        print(f"No results found for '{query}'.")
        return
    
    print(f"Search results for '{query}':")
    
    for title in search_results:
        try:
            page = wikipedia.page(title)
            print(f"Title: {page.title}")
            print(f"URL: {page.url}\n")
        except wikipedia.exceptions.DisambiguationError as e:
            print(f"Disambiguation page found for '{title}': {e.options}")
        except wikipedia.exceptions.PageError:
            print(f"Page '{title}' not found.")

keywords = "Water scarcity, conservation, best practices"
search_wikipedia(keywords, results_limit=15)