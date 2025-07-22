# 1. OCR
---
Extracting text from video frames using Paddle OCR.

Input:
```bash
./Keyframes/
└── L01_extra/
    └── 001/
        ├── 000000.jpg  (Ảnh này chứa dòng chữ "BẢN TIN BUỔI SÁNG")
        ├── 000099.jpg  (Ảnh này không có chữ)
        ├── 000199.jpg  (Ảnh này có dòng chữ chạy ở dưới: "Thị trường chứng khoán biến động")
        └── 000299.jpg  (Ảnh này có hai dòng chữ: "MC: Thu Hoài" và "Biên tập: Minh Anh")
    ├── 002/
        ├── 000000.jpg
        ├── 000099.jpg
        └── ...
```

Output:
```bash
./ocr/
└── L01_extra/
    ├── 001.json
    ├── 002.json
    └── ...
```
The contents inside `001.json` as will be follow:
```json
[
    [
        "BẢN TIN BUỔI SÁNG"
    ],
    [],
    [
        "Thị trường chứng khoán biến động"
    ],
    [
        "MC: Thu Hoài",
        "Biên tập: Minh Anh"
    ]
]
```

