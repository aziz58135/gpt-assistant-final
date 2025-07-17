from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
import os

# Read scopes from environment or use default
SCOPES = ['https://www.googleapis.com/auth/gmail.send',
          'https://www.googleapis.com/auth/calendar']

def get_google_credentials():
    flow = InstalledAppFlow.from_client_secrets_file(
        'credentials.json', SCOPES)
    creds = flow.run_local_server(port=0)
    return creds

def get_gmail_service():
    creds = get_google_credentials()
    service = build('gmail', 'v1', credentials=creds)
    return service

def get_calendar_service():
    creds = get_google_credentials()
    service = build('calendar', 'v3', credentials=creds)
    return service
