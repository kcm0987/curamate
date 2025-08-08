# pip install fastapi uvicorn torch transformers PyPDF2 aiofiles scikit-learn nltk python-multipart pandas

from fastapi import FastAPI, File, UploadFile, Form
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.templating import Jinja2Templates
from transformers import BertForSequenceClassification, BertTokenizer
import torch
import PyPDF2
from io import BytesIO
import pickle
from fastapi import Request
import numpy as np
import re
from nltk.corpus import stopwords
import pandas as pd
import os

# Make sure to download stopwords from nltk
import nltk

nltk.download('stopwords')

# Load the model, tokenizer, and label encoder
model = BertForSequenceClassification.from_pretrained('./thyroid_model')
tokenizer = BertTokenizer.from_pretrained('./thyroid_model')
label_encoder = pickle.load(open("thyroid_label_encoder.pkl", 'rb'))

# FastAPI instance
app = FastAPI()

# Set up templates and static file directory
templates = Jinja2Templates(directory="templates")

# Load thyroid data from the CSV file
# Make sure to update the path to your CSV file
thyroid_data_df = pd.read_csv("thyroid_data_modified.csv")


# Extended clean_text function with more steps
def clean_text(text):
    stop_words = set(stopwords.words('english'))

    # Convert to string and lowercase the text
    text = str(text).lower()

    # Remove any numbers (you may want to modify this if numbers are important)
    text = re.sub(r'\d+', '', text)

    # Remove special characters, punctuation, and non-alphabetical characters
    text = re.sub(r'[^a-z\s]', '', text)

    # Remove extra spaces
    text = re.sub(r'\s+', ' ', text).strip()

    # Remove stopwords
    text = ' '.join([word for word in text.split() if word not in stop_words])

    return text


# Function to make prediction
def predict_thyroid_condition(patient_note, model, tokenizer, label_encoder):
    patient_note = clean_text(patient_note)

    # Tokenize the input patient note
    inputs = tokenizer(patient_note, return_tensors="pt", padding=True, truncation=True, max_length=512)

    # Make prediction
    with torch.no_grad():
        outputs = model(**inputs)
        logits = outputs.logits

    # Get the predicted label
    predicted_label = torch.argmax(logits, dim=1).item()

    # Convert the predicted label to the corresponding thyroid condition
    predicted_condition = label_encoder.inverse_transform([predicted_label])[0]

    return predicted_condition


# Function to get condition details from the dataframe
def get_condition_details(condition):
    # Find the row in the dataframe that corresponds to the condition
    condition_row = thyroid_data_df[thyroid_data_df["Thyroid Disease"] == condition]

    if len(condition_row) > 0:
        # Extract medications and specialist
        medications = condition_row["Medications"].iloc[0].split(", ")
        specialist = condition_row["Specialist"].iloc[0]

        return {
            "medications": medications,
            "specialist": specialist
        }
    else:
        return {
            "medications": [],
            "specialist": "Unknown"
        }


# Route for rendering the index page
@app.get("/", response_class=HTMLResponse)
async def upload_form(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


# Updated predict endpoint
@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    content = await file.read()
    text = ""

    # Extract text from PDF or TXT file
    if file.filename.endswith(".pdf"):
        pdf_reader = PyPDF2.PdfReader(BytesIO(content))
        for page in pdf_reader.pages:
            text += page.extract_text()
    elif file.filename.endswith(".txt"):
        text = content.decode("utf-8")

    # Predict thyroid condition
    predicted_condition = predict_thyroid_condition(text, model, tokenizer, label_encoder)

    # Get details for the predicted condition
    details = get_condition_details(predicted_condition)

    # Return result with details from the CSV data
    return JSONResponse(content={
        "clinic_notes": text[:100] + "..." if len(text) > 100 else text,  # First 100 chars of notes
        "predicted_condition": predicted_condition,
        "medications": details["medications"],
        "specialist": details["specialist"]
    })

# Run the application with Uvicorn
# Command: uvicorn app:app --reload