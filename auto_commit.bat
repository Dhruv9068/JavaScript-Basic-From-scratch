@echo off

:: Change directory to your project folder
cd /d "E:\Web development Notebook\Javascript learning code"

:: Add all changes to git
git add .

:: Commit changes with a generic message
git commit -m "Auto-commit: %date% %time%"

:: Push to the remote repository
git push origin main
