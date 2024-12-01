import os
import requests
from bs4 import BeautifulSoup

# URL of the HD Mania website (ye URL aapko customize karna hoga)
base_url = "https://www.hdmania.org/movies"

# Existing movies.html file ko read karna aur update karna
with open('movies.html', 'r', encoding='utf-8') as file:
    content = file.read()

# HD Mania website se movies data scrape karna
response = requests.get(base_url)
soup = BeautifulSoup(response.content, 'html.parser')

# Folder structure aur movie details ko nikalna
movie_sections = soup.find_all('div', class_='movie-section-class')  # Update with actual class or selector

new_movies = ""

for section in movie_sections:
    folder_name = section.find('h2').get_text(strip=True)  # Update with actual tag for folder name
    movies = section.find_all('a', class_='movie-link-class')  # Update with actual tag/class for movie links
    
    folder_html = f'<div class="folder"><h3>{folder_name}</h3><ul>'
    for movie in movies:
        movie_name = movie.get_text(strip=True)
        movie_link = movie['href']
        poster_link = movie.find('img')['src']  # Update with actual tag for poster link
        
        # Movie details ka HTML generate karna
        folder_html += f'''
        <li>
            <img src="{poster_link}" alt="{movie_name}" style="width:150px;height:auto;">
            <a href="{movie_link}">{movie_name}</a>
            <p>Download: <a href="{movie_link}">Click Here</a></p>
        </li>
        '''
    folder_html += '</ul></div>'
    new_movies += folder_html

# Updated content ke saath file ko modify karna
if new_movies:
    updated_content = content.replace('</div><!-- end of movie list -->', new_movies + '</div><!-- end of movie list -->')

    with open('movies.html', 'w', encoding='utf-8') as file:
        file.write(updated_content)

    # File size calculate karna aur print karna
    file_size = os.path.getsize('movies.html') / (1024 * 1024)  # Size in MB
    print(f"Movies list updated successfully. Current file size: {file_size:.2f} MB")
else:
    print("No new movies found. The file has not been updated.")
