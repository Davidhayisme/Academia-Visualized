import json
from supabase import create_client, Client


# Supabase config
url = "https://gmarmelbkzqbpyjdgort.supabase.co"
key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtYXJtZWxia3pxYnB5amRnb3J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwNTc1NDAsImV4cCI6MjA1OTYzMzU0MH0.IKMl1ocGzRw2Z4ec4Jk_7JacG1nXKho-MCKRJ0c0tbU"
supabase: Client = create_client(url, key)
res = supabase.table("journals").select("*").order("rank", desc=False).limit(4).execute()
def lambda_handler(event, context):
    try:
        res = supabase.table("journals").select("*").order("rank", desc=False).limit(4).execute()

        recent_breakthrough_data = [
            {
                "title": res.data[0]["journal"],
                "date": "March 2025",
                "description": "New targeted immunotherapy shows 45% improved response in lung cancer patients",
                "impact": "high",
                "institution": "Memorial Sloan Kettering"
            },
            {
                "title": res.data[1]["journal"],
                "date": "February 2025",
                "description": "Blood test detects pancreatic cancer with 91% accuracy",
                "impact": "high",
                "institution": "Johns Hopkins University"
            },
            {
                "title": res.data[2]["journal"],
                "date": "January 2025",
                "description": "AI improves early detection rates by 34%",
                "impact": "medium",
                "institution": "Stanford Medical Center"
            },
            {
                "title": res.data[3]["journal"],
                "date": "December 2024",
                "description": "CRISPR shows promise in undruggable cancers",
                "impact": "medium",
                "institution": "Harvard Medical School"
            }
        ]

        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            "body": json.dumps({
                "cancer_types_data": [
                    {"name": "WALALLALAL", "percent": 22, "color": "#2C5282"},
                    {"name": "Lung", "percent": 27, "color": "#553C9A"},
                    {"name": "Colorectal", "percent": 16, "color": "#285E61"},
                    {"name": "Prostate", "percent": 14, "color": "#4299E1"},
                    {"name": "Skin", "percent": 10, "color": "#9F7AEA"},
                    {"name": "Other", "percent": 11, "color": "#68D391"}
                ],
                "recent_breakthrough_data": recent_breakthrough_data
            })
        }

    except Exception as e:
        return {
            "statusCode": 500,
            "headers": { "Access-Control-Allow-Origin": "*" },
            "body": json.dumps({ "error": str(e) })
        }