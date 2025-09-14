from typing import List, Dict, Any, Optional
from pydantic import BaseModel


# Define Pydantic models for request validation
class TextSearchRequest(BaseModel):
    search_space: int
    k: int
    nomic: bool
    clipv2: bool
    textquery: str
    range_filter: int
    filter: bool
    id: Optional[List[int]] = None
    ignore: Optional[bool] = False
    ignore_idxs: Optional[List[int]] = None
    filtervideo: int = 0
    videos: Optional[Dict[str, Any]] = None


class PanelSearchRequest(BaseModel):
    k: int
    search_space: int
    useid: bool
    id: Optional[List[int]] = None
    ignore: Optional[bool] = False
    ignore_idxs: Optional[List[int]] = None
    ocr: str = ""
    asr: str = ""
    dragObject: Optional[List[Dict[str, Any]]] = []
    tags: Optional[List[str]] = []
    amount: Optional[str] = ""


class FeedbackRequest(BaseModel):
    k: int
    videos: Dict[str, Any]
    lst_pos_idxs: List[int]
    lst_neg_idxs: List[int]


class TagRequest(BaseModel):
    text: str


class TranslateRequest(BaseModel):
    textquery: str

# Define Pydantic models for request bodies
class UserRequest(BaseModel):
    user: str


class UsernameRequest(BaseModel):
    username: str


class QuestionNameRequest(BaseModel):
    questionName: str