from flask import Flask, jsonify
from flask_cors import CORS
from supabase import create_client, Client
from dotenv import load_dotenv
import os

app = Flask(__name__)
cors = CORS(app, origins='*')
load_dotenv()
url = "https://gmarmelbkzqbpyjdgort.supabase.co"
key = os.getenv("API_KEY")
supabase: Client = create_client(url, key)
res = supabase.table("journals").select("*").order("rank", desc=False).limit(4).execute()

# Sample data for the dashboard
overview_stats = [
    {"name": "Active Research Projects", "count": 2478, "trend": 5.2},
    {"name": "Clinical Trials", "count": 1791, "trend": 3.8},
    {"name": "Research Publications", "count":12345, "trend": 7.6},
    {"name": "Global Collaborations", "count": 243, "trend": 12.4}
]

cancer_types_data = [
    {"name": "WALALLALAL", "percent": 22, "color": "#2C5282"},
    {"name": "Lung", "percent": 27, "color": "#553C9A"},
    {"name": "Colorectal", "percent": 16, "color": "#285E61"},
    {"name": "Prostate", "percent": 14, "color": "#4299E1"},
    {"name": "Skin", "percent": 10, "color": "#9F7AEA"},
    {"name": "Other", "percent": 11, "color": "#68D391"}
]

research_funding_data = [
    {"year": 2018, "funding": 5.2},
    {"year": 2019, "funding": 5.9},
    {"year": 2020, "funding": 6.3},
    {"year": 2021, "funding": 6.8},
    {"year": 2022, "funding": 7.1},
    {"year": 2023, "funding": 7.4},
    {"year": 2024, "funding": 7.6}
]

clinical_trials_data = [
    {"name": "Phase 1", "value": 358},
    {"name": "Phase 2", "value": 724},
    {"name": "Phase 3", "value": 413},
    {"name": "Phase 4", "value": 296}
]

survival_rate_data = [
    {"year": "1990", "rate": 58},
    {"year": "1995", "rate": 62},
    {"year": "2000", "rate": 66},
    {"year": "2005", "rate": 68},
    {"year": "2010", "rate": 69},
    {"year": "2015", "rate": 71},
    {"year": "2020", "rate": 73},
    {"year": "2025", "rate": 75}
]

recent_breakthrough_data = [
    {
        "title": res.data[0]["journal"],
        "date": "March 2025",
        "description": "New targeted immunotherapy shows 45% improved response in non-small cell lung cancer patients",
        "impact": "high",
        "institution": "Memorial Sloan Kettering"
    },
    {
        "title": res.data[1]["journal"],
        "date": "February 2025",
        "description": "Blood test detects pancreatic cancer with 91% accuracy up to 2 years before conventional diagnosis",
        "impact": "high",
        "institution": "Johns Hopkins University"
    },
    {
        "title": res.data[2]["journal"],
        "date": "January 2025",
        "description": "Algorithm identifies subtle patterns in imaging studies, improving early detection rates by 34%",
        "impact": "medium",
        "institution": "Stanford Medical Center"
    },
    {
        "title": res.data[3]["journal"],
        "date": "December 2024",
        "description": "CRISPR-based approach shows promising results in targeting previously 'undruggable' cancer mutations",
        "impact": "medium",
        "institution": "Harvard Medical School"
    }
]

research_areas_data = [
    {
        "title": "Immunotherapy",
        "description": "Research focused on harnessing the body's immune system to target and destroy cancer cells.",
        "projects": 412,
        "institutions": 78
    },
    {
        "title": "Precision Medicine",
        "description": "Developing treatments tailored to the genetic profile of each patient's cancer.",
        "projects": 327,
        "institutions": 64
    },
    {
        "title": "Early Detection",
        "description": "Creating new technologies and methods to detect cancer at earlier, more treatable stages.",
        "projects": 285,
        "institutions": 55
    },
    {
        "title": "Drug Discovery",
        "description": "Identifying and developing new compounds that can target cancer cells more effectively.",
        "projects": 392,
        "institutions": 83
    },
    {
        "title": "Cancer Genomics",
        "description": "Studying the complete set of genes and mutations involved in cancer development.",
        "projects": 278,
        "institutions": 61
    },
    {
        "title": "Radiation Oncology",
        "description": "Advancing radiation techniques to improve treatment effectiveness and reduce side effects.",
        "projects": 203,
        "institutions": 47
    }
]

@app.route("/api/users", methods=['GET'])
def get_cancer_data():
    return jsonify({
        "research_areas_data": research_areas_data,
        "recent_breakthrough_data": recent_breakthrough_data,
        "survival_rate_data": survival_rate_data,
        "clinical_trials_data": clinical_trials_data,
        "research_funding_data": research_funding_data,
        "cancer_types_data": cancer_types_data,
        "overview_stats": overview_stats
    })

if __name__ == "__main__":
    app.run(debug=True, port=5000)