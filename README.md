# NodeJS API Documentation

## Introduction

This documentation provides an overview of the API endpoints, methods, and functionalities of the application.

## Base URL

The base URL for all API endpoints is `http://localhost:3030`.

## Authentication

There is no authentication required for accessing the endpoints.

## Endpoints

### Get Summary by ID

- **URL:** `/getSummary/:summaryId`
- **Method:** GET
- **Description:** Retrieves a summary by its ID.
- **Parameters:**
  - `summaryId` (URL parameter): The ID of the summary to retrieve.
- **Response:**
  - Status Code: 200 OK
  - Body: JSON object containing the summary details.
- **Error Responses:**
  - Status Code: 400 Bad Request

### Save Summary

- **URL:** `/saveSummary`
- **Method:** POST
- **Description:** Saves a new summary.
- **Request Body:**
  - `summaryTitle`: Title of the summary.
  - `summaryContent`: Content of the summary.
- **Response:**
  - Status Code: 200 OK
  - Body: None
- **Error Responses:**
  - Status Code: 400 Bad Request

### Summarize File

- **URL:** `/summarizeFile/`
- **Method:** POST
- **Description:** Summarizes the content of a file.
- **Request Body:**
  - `lectureFile`: PDF file to be summarized (multipart/form-data).
- **Response:**
  - Status Code: 200 OK
  - Body: JSON object containing the summarized content.
- **Error Responses:**
  - Status Code: 400 Bad Request

### Get Summaries

- **URL:** `/getSummaries/`
- **Method:** GET
- **Description:** Retrieves all saved summaries.
- **Response:**
  - Status Code: 200 OK
  - Body: JSON array containing summary objects.
- **Error Responses:**
  - Status Code: 400 Bad Request

## Libraries and Dependencies

- Express.js: Handles HTTP requests.
- Mongoose: MongoDB object modeling tool.
- Multer: Middleware for handling multipart/form-data.
- Cors: Middleware for enabling Cross-Origin Resource Sharing.
- Body-parser: Middleware for parsing JSON request bodies.
- Axios: Promise-based HTTP client for making HTTP requests.
- MongoDB: Database for storing summaries.

## Setup

Ensure that Node.js, npm, and MongoDB are installed on the system.

# Python API Documentation

## Introduction

This documentation provides an overview of the Python API modules and their functionalities used in conjunction with the main API.

## UI Module

### Function: summarize_text(filePath)

- **Description:** Summarizes the text content of a PDF file.
- **Input:**
  - `filePath`: Path to the PDF file.
- **Output:**
  - Summarized text extracted from the PDF file.

## Text Summarizer

### Function: summarizeText(file_content)

- **Description:** Summarizes the provided text content using TF-IDF and cosine similarity.
- **Input:**
  - `file_content`: Text content to be summarized.
- **Output:**
  - Summarized text extracted from the input content.

## Text PreProcessing

### Function: preprocess_data(fileContent)

- **Description:** Preprocesses the input text content by tokenizing, removing stopwords, and lemmatizing.
- **Input:**
  - `fileContent`: Text content to be preprocessed.
- **Output:**
  - Preprocessed sentences and lemmatized text.

## PDF Reader

### Function: readPdf(targetPDF)

- **Description:** Reads the text content from a PDF file.
- **Input:**
  - `targetPDF`: Path to the PDF file.
- **Output:**
  - Text content extracted from the PDF file.

## Python API

### Endpoint: /execute

- **Description:** Executes text summarization for a given PDF file.
- **Method:** GET
- **Parameters:**
  - `filePath`: Path to the PDF file.
- **Response:**
  - Summarized text extracted from the PDF file.
- **Error Responses:**
  - Status Code: 400 Bad Request

## Conclusion

This Python API documentation provides details on the modules and functions used for text summarization and PDF processing.
