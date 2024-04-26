import jwt
from datetime import datetime, timedelta, timezone


SECRET_KEY = "fwf123h2o"

def generate_JWT_token(user_id):
    expiration_time = datetime.now() + timedelta(hours=2)
    expiration_time_str = expiration_time.isoformat()

    payload = {"user_id": user_id, "expiration_time": expiration_time_str}

    token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")
    return token
