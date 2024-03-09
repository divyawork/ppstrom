import tweepy
import os
from datetime import datetime, timedelta

# Replace with your own API keys and tokens
consumer_key = "#"
consumer_secret = "#"
access_token = "#"
access_token_secret = "#"

# Authenticate with Twitter
client = tweepy.Client(consumer_key=consumer_key, consumer_secret=consumer_secret, access_token=access_token, access_token_secret=access_token_secret)

def tweet_daily(text_file):
    # Read text from file
    with open(text_file, 'r', encoding='utf-8') as file:
        tweet_text = file.read()

    # Print statements for debugging
    print(f"Tweeting for the day with text file: {text_file}")

    # Tweet with text only
    response = client.create_tweet(text=tweet_text)
    
    print("Tweet successfully posted.")

# Specify your own file name
custom_text_file = "tweet.txt"

# Tweet for the day
tweet_daily(custom_text_file)
