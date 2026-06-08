@echo off
title Adzangaadi - Dev Server (edit src files here)
cd /d "%~dp0"
set "PATH=C:\Program Files\nodejs;%PATH%"
echo.
echo  Edit files in: src\content\siteContent.js  or  src\components\sections\
echo  Browser: http://localhost:5173
echo  Save any file to see changes instantly.
echo  Press Ctrl+C to stop.
echo.
start "" "http://localhost:5173"
call npm run dev
