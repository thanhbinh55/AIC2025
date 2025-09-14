# News Retrieval Explain Challenge

A comprehensive multimodal video search and retrieval system that enables intelligent querying of video content through text, visual elements, and contextual information. This system processes video data to create searchable representations using state-of-the-art computer vision and natural language processing techniques. My result **top 25** in **HCM AI Challenge 2025**.

## 🚀 Features

- **Multimodal Search**: Search videos using text queries, visual similarity, and contextual information
- **Scene-based Retrieval**: Intelligent video segmentation and keyframe extraction
- **Cross-modal Understanding**: Combines CLIP, Nomic embeddings, OCR, and ASR for comprehensive content understanding
- **Interactive Web Interface**: User-friendly frontend for exploring and searching video content
- **Temporal Filtering**: Search within specific time ranges or video segments
- **Relevance Feedback**: Improve search results through positive/negative feedback
- **Real-time Translation**: Multi-language support for queries

## 🏗️ Architecture

### Core Components

1. **Video Processing Pipeline** (`notebooks/`):
   - Scene segmentation and keyframe extraction
   - Audio extraction and ASR processing
   - Metadata extraction (OCR, object detection, visual features)
   - CLIP/Nomic embedding generation

2. **Search Engine** (`utils/`):
   - **Semantic Search**: CLIP v2 and Nomic embeddings for visual understanding
   - **Object Retrieval**: Spatial, color, and category-based object search
   - **OCR Retrieval**: Text recognition and search within video frames
   - **ASR Retrieval**: Speech-to-text search capabilities
   - **Tag-based Search**: Semantic tag recommendation and retrieval

3. **Backend API** (`app.py`):
   - FastAPI-based REST API
   - Multiple search endpoints (text, image, panel, feedback)
   - Real-time search result processing

4. **Frontend Interface** (`frontend/`):
   - Next.js React application
   - Interactive search interface
   - Video result visualization
   - Real-time feedback system

## 🛠️ Installation

### Prerequisites

- Python 3.8+
- Node.js 16+
- CUDA-compatible GPU (recommended for embeddings)

### Backend Setup

```bash
# Clone the repository
git clone https://github.com/danielway2k3/News-Retrieval-Explain-Challenge.git
cd News-Retrieval-Explain-Challenge

# Install Python dependencies
pip install -r requirements.txt

# Start the backend server
python app.py
```

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### Search Interface

![UI Search Interface](images/ui-search.png)

## 📂 Project Structure

```
News-Retrieval-Explain-Challenge/
├── app.py                     # Main FastAPI application
├── requirements.txt           # Python dependencies
├── video_split.py            # Video clustering and splitting utilities
├── socket_app.py             # WebSocket server for real-time features
├── export_name_obj.py        # Object name extraction utilities
├── test.ipynb               # Testing and experimentation notebook
│
├── dict/                    # Data storage and processed features
│   ├── *.json              # Metadata mappings (ID mappings, scene info)
│   ├── *.bin               # Precomputed embeddings (CLIP, Nomic)
│   ├── audio_ARS/          # Audio ASR transcriptions
│   ├── audio_detection/    # Audio processing results
│   ├── CLIPv2_features/    # CLIP v2 embeddings
│   ├── Nomic_features/     # Nomic embeddings
│   ├── context_encoded/    # Encoded contextual features
│   ├── ocr/               # OCR extraction results
│   └── bin/               # Binary feature files
│
├── frontend/               # Next.js React application
│   ├── src/               # Source code
│   ├── public/            # Static assets
│   └── package.json       # Frontend dependencies
│
├── notebooks/             # Data processing pipeline
│   ├── data_prepare.ipynb # Main data preparation notebook
│   ├── 1_scene_extraction/  # Video segmentation notebooks
│   ├── 2_audio_extraction/  # Audio processing notebooks
│   ├── 3_metadata_extraction/ # Feature extraction notebooks
│   └── 4_CLIP/            # Embedding generation notebooks
│
└── utils/                 # Core utility modules
    ├── faiss_processing.py    # FAISS index management
    ├── context_encoding.py    # Visual context encoding
    ├── search_utils.py        # Search result processing
    ├── models.py             # Pydantic data models
    ├── combine_utils.py      # Result combination utilities
    ├── parse_frontend.py     # Frontend data parsing
    ├── semantic_embed/       # Embedding modules
    ├── object_retrieval_engine/ # Object-based search
    ├── ocr_retrieval_engine/    # OCR-based search
    └── spelling_correction_engine/ # Query correction
```

## 🔍 API Endpoints

### Search Endpoints

- **POST `/textsearch`**: Text-based video search
- **GET `/imgsearch`**: Image similarity search
- **POST `/panel`**: Multi-modal panel search (objects, OCR, ASR)
- **POST `/feedback`**: Relevance feedback for result improvement
- **POST `/getrec`**: Get tag recommendations for queries
- **POST `/translate`**: Translate queries to different languages

### Utility Endpoints

- **GET `/data`**: Retrieve paginated video data
- **GET `/relatedimg`**: Get related images from same scene
- **GET `/getvideoshot`**: Get video shot information

### Request Examples

#### Text Search
```json
{
  "textquery": "person walking on bridge",
  "k": 20,
  "nomic": true,
  "clipv2": true,
  "search_space": 0,
  "range_filter": 5,
  "filter": false
}
```

#### Multi-modal Panel Search
```json
{
  "k": 20,
  "search_space": 0,
  "ocr": "news headline",
  "asr": "breaking news",
  "dragObject": [
    {"name": "person", "bbox": [100, 100, 200, 200]}
  ],
  "tags": ["outdoor", "city"]
}
```

## 🧠 Search Methods

### 1. Semantic Search
- **CLIP v2**: Visual-text understanding
- **Nomic Embeddings**: Multilingual semantic representations
- **Combined Search**: Fusion of multiple embedding models

### 2. Contextual Search
- **Object Detection**: Spatial object queries with bounding boxes
- **OCR Search**: Text extraction and search within frames
- **ASR Search**: Speech-to-text content retrieval
- **Color/Tag Search**: Visual attribute-based filtering

### 3. Temporal Search
- **Scene-aware Filtering**: Search within specific video segments
- **Temporal Expansion**: Find content before/after specific moments
- **Shot-level Navigation**: Browse related keyframes within scenes

## 🔧 Usage Examples

### Basic Text Search
```python
import requests

response = requests.post("http://localhost:8080/textsearch", json={
    "textquery": "car accident on highway",
    "k": 10,
    "nomic": True,
    "clipv2": True,
    "search_space": 0,
    "range_filter": 3,
    "filter": False
})

results = response.json()
```

### Image Similarity Search
```python
response = requests.get(
    "http://localhost:8080/imgsearch",
    params={"imgid": 1234, "k": 15}
)
```

### Multi-modal Search
```python
response = requests.post("http://localhost:8080/panel", json={
    "k": 20,
    "search_space": 0,
    "ocr": "breaking news",
    "asr": "live report",
    "dragObject": [
        {"name": "person", "bbox": [100, 100, 200, 200]}
    ]
})
```

## 📊 Data Processing Pipeline

### 1. Video Preprocessing
- Scene boundary detection
- Keyframe extraction
- Audio track separation

### 2. Feature Extraction
- **Visual**: CLIP v2, Nomic embeddings
- **Textual**: OCR text extraction
- **Audio**: ASR transcription
- **Objects**: YOLO detection with spatial coordinates
- **Metadata**: Colors, tags, temporal information

### 3. Index Building
- FAISS vector databases for embeddings
- TF-IDF indices for text search
- Spatial indices for object queries

## 🚀 Performance Features

- **Efficient Indexing**: FAISS-based similarity search
- **Multi-GPU Support**: Distributed embedding computation
- **Caching**: Precomputed features for fast retrieval
- **Batch Processing**: Optimized for large video collections
- **Real-time Search**: Sub-second query response times


## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
