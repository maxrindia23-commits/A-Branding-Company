@echo off
cd /d "%~dp0"
set "PATH=C:\Program Files\nodejs;%PATH%"
echo Building website...
call npm run build
if errorlevel 1 (
  echo Build failed.
  pause
  exit /b 1
)
if not exist "..\website-ready" mkdir "..\website-ready"
echo Copying build to website-ready...
xcopy /e /i /y "dist\*" "..\website-ready\"
echo.
echo Done. Double-click ..\website-ready\OPEN-WEBSITE.bat to view.
pause
