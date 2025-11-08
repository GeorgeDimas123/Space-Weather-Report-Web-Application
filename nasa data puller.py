"""
Fetch solar flare events from NASA's DONKI API for the past 24 hours.
Requires: requests
Install with: pip install requests
"""

import requests
from datetime import datetime, timedelta, timezone

# NASA DONKI endpoint for solar flares
DONKI_FLR_URL = "https://api.nasa.gov/DONKI/FLR"

# Replace with your NASA API key, or use the demo key (limited)
API_KEY = "DEMO_KEY"

def get_last_day_range():
    """Return start and end date (UTC, YYYY-MM-DD) for the last 24 hours."""
    now = datetime.now(timezone.utc)
    date = now - timedelta(days=5)
    return date.strftime("%Y-%m-%d"), now.strftime("%Y-%m-%d")

def fetch_solar_flares(start_date, end_date):
    """Fetch solar flare data from DONKI between two dates."""
    params = {
        "startDate": start_date,
        "endDate": end_date,
        "api_key": API_KEY,
    }
    response = requests.get(DONKI_FLR_URL, params=params, timeout=15)
    response.raise_for_status()
    return response.json()

def main():
    start_date, end_date = get_last_day_range()
    print(f"Fetching solar flare data from {start_date} to {end_date}...")
    
    try:
        flares = fetch_solar_flares(start_date, end_date)
        if not flares:
            print("No solar flare events found in the past 24 hours.")
            return
        
        print(f"Found {len(flares)} solar flare events:\n")
        for flare in flares:
            print(f"ID: {flare.get('flrID', 'N/A')}")
            print(f"Class: {flare.get('classType', 'Unknown')}")
            print(f"Begin Time: {flare.get('beginTime', 'N/A')}")
            print(f"Peak Time: {flare.get('peakTime', 'N/A')}")
            print(f"Source Location: {flare.get('sourceLocation', 'N/A')}")
            print(f"Active Region: {flare.get('activeRegionNum', 'N/A')}")
            print(f"Link: {flare.get('link', 'N/A')}")
            print("-" * 60)
    except requests.RequestException as e:
        print(f"Error fetching data from NASA DONKI API: {e}")
    input("Type anything to exit.")

if __name__ == "__main__":
    main()