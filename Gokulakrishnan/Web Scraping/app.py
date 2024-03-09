import requests
from bs4 import BeautifulSoup

URL = "https://ppstrom.vercel.app/"
page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")
print(soup.find("title").text)
