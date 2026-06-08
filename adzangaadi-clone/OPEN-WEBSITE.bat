@echo off
title Adzangaadi Website
cd /d "%~dp0"

if not exist "dist\index.html" (
  echo Building website for the first time...
  set "PATH=C:\Program Files\nodejs;%PATH%"
  call npm run build
  if errorlevel 1 (
    echo Build failed. Install Node.js from https://nodejs.org then run: npm install
    pause
    exit /b 1
  )
)

echo Starting local server...
echo Open in browser: http://localhost:4173
echo Press Ctrl+C to stop.
set "PATH=C:\Program Files\nodejs;%PATH%"
start "" "http://localhost:4173"
call npm run preview -- --host 127.0.0.1 --port 4173
