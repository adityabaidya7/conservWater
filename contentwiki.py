import wikipedia

#Search for and fetch Wikipedia page content
def fetch_wikipedia_page(title):
    try:
        summary = wikipedia.summary(title)
        print(f"Title: {title}\n")
        print(f"Summary: {summary}\n")
        
        page = wikipedia.page(title)
        print("Full content:")
        print(page.content[:4000]) 
    
    except wikipedia.exceptions.PageError:
        print(f"Page '{title}' does not exist.")
    except wikipedia.exceptions.DisambiguationError as e:
        print(f"Disambiguation error: {e.options}")

related_pages = [
    "Water scarcity", 
    "Water conservation",
    "Water crisis",
    "Sustainable water management",
    "Water resources",
    "Water scarcity in India",
    "Water supply and sanitation",
    "Water efficiency",
    "Groundwater recharge",
]

for page in related_pages:
    print(f"\nFetching page: {page}\n{'-'*80}")
    fetch_wikipedia_page(page)