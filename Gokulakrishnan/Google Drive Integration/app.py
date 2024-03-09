import gspread
from oauth2client.service_account import ServiceAccountCredentials
from googleapiclient.discovery import build

# Load credentials from the service account key file
credentials = ServiceAccountCredentials.from_json_keyfile_name('pydrivefetcher-037cf3af1eeb.json', scopes=['https://spreadsheets.google.com/feeds', 'https://www.googleapis.com/auth/drive'])

# Authorize the client using the credentials
gc = gspread.authorize(credentials)

# Create a Resource object
drive = build('drive', 'v3', credentials=credentials)

# Example: Access Google Drive files
files = drive.files().list(q="'root' in parents").execute()
for file in files['files']:
    print(f"File Name: {file['name']}, ID: {file['id']}")

# Example: Access a Google Spreadsheet
spreadsheet_key = '1U-QBZ0wOW2BDTZntTmYgNdVq2MsBaQg26te73D24cpc'
spreadsheet = gc.open_by_key(spreadsheet_key)
worksheet = spreadsheet.get_worksheet(0)  # Access the first worksheet
data = worksheet.get_all_values()

for row in data:
    print(row)
