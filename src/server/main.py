import traceback
import json
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, HTTPException
from data_base import InitDB

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

db = InitDB('Entriesnodu.csv', 'Examples.csv')


@app.get("/examples")
def get_examples(entry=None):
    try:
        response = db.get_list(entry)
        response = json.dumps(response)
    except Exception as e:
        err = traceback.format_exception(etype=type(e), value=e, tb=e.__traceback__)
        msg = {
            "message": str(e),
            "Error": "Method error",
            "traceback": err,
            "success": False,
            "Method": 'get_list',
            "Class": "ListGenerator"
        }
        print(msg)
        raise HTTPException(status_code=422, detail=msg)

    return response
