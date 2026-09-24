@echo off
title Monster E-Bikes - Bicicleta Eletrica V9 Max 1000W
cd /d "%~dp0"
cls
echo ========================================================
echo   Iniciando Monster E-Bikes (V9 Max 1000W)...
echo ========================================================
echo.
start /b "" node server.js
timeout /t 1 /nobreak >nul
start http://localhost:3000/produto
echo Servidor rodando em: http://localhost:3000/produto
echo O site foi aberto no seu navegador padrao.
echo.
echo Para fechar o servidor, feche esta janela.
echo ========================================================
cmd /k
