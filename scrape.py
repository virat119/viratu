import requests
from bs4 import BeautifulSoup

# Source website URL
source_url = 'https://www.hdmania.org/'

# Function to get movie links
def get_movie_links():
    response = requests.get(source_url)
    soup = BeautifulSoup(response.content, 'html.parser')

    # Scraping logic for movie download links
    download_links = soup.find_all('a', href=True)
    movie_links = [link['href'] for link in download_links if 'download' in link['href']]
    return movie_links

# Function to update your HTML file
def update_html_file(new_links):
    with open('movies.html', 'r', encoding='utf-8') as file:
        content = file.read()

    # Create a section with all new movie links
    new_content = '<ul>'
    for link in new_links:
        new_content += f'<li><a href="{link}">{link}</a></li>'
    new_content += '</ul>'

    # Replace or append the new content in your HTML file
    updated_content = content.replace('<div id="movie-list"></div>', f'<div id="movie-list">{new_content}</div>')

    with open('movies.html', 'w', encoding='utf-8') as file:
        file.write(updated_content)

# Main execution
new_links = get_movie_links()
update_html_file(new_links)
