import pandas as pd
from bs4 import BeautifulSoup
import requests
from requests.exceptions import ConnectionError

# Function to fetch links from Futurepedia
def get_links(url):
    try:
        response = requests.get(url)
        soup = BeautifulSoup(response.text, 'html.parser')
        links = [a['href'] for a in soup.find_all('a', href=True) if a['href'].startswith('http')]
        return links
    except ConnectionError as e:
        print(f"Failed to connect to {url}. The exception is: {e}")
        return []

# Main function
def main():
    futurepedia_url = 'https://www.futurepedia.io/'
    all_links = get_links(futurepedia_url)

    if all_links:
        # Create a DataFrame to store the links
        df = pd.DataFrame({'Links': all_links})

        # Save the DataFrame to a CSV file
        df.to_csv('futurepedia_links.csv', index=False)
        print('Links saved to futurepedia_links.csv')
    else:
        print('No links were fetched.')

if __name__ == "__main__":
    main()
