import os
from dotenv import load_dotenv
from supabase import create_client, Client


# Load .env variables into the environment
load_dotenv()

# Get variables
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

# Create Supabase client
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)