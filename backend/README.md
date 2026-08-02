# Production Contact Email Setup

## Requirements
- Python 3.11+
- Redis server running locally or on Render
- SMTP provider credentials

## Local development
1. Create and activate a virtual environment.
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Start Redis:
   ```bash
   redis-server
   ```
4. Start Celery worker:
   ```bash
   celery -A config worker -l info
   ```
5. Run Django:
   ```bash
   python manage.py runserver
   ```

## Render deployment notes
- Add Redis service and set `CELERY_BROKER_URL` to the Redis connection string.
- Set environment variables for SMTP credentials.
- Start a Celery worker in the Render service with:
  ```bash
  celery -A config worker -l info
  ```
