@echo off
title Adzangaadi Website
cd /d "%~dp0"
set "PATH=C:\Program Files\nodejs;%PATH%"

where node >nul 2>&1
if errorlevel 1 (
  echo Node.js is not installed.
  echo Install from https://nodejs.org then double-click this file again.
  pause
  exit /b 1
)

echo.
echo  Adzangaadi website is starting...
echo  Browser will open at: http://127.0.0.1:8080
echo  Keep this window open. Press Ctrl+C to stop.
echo.

start "" "http://127.0.0.1:8080"
npx --yes serve -l 8080 .
