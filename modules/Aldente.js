[Script]
Aldente = type=http-response,pattern=^https:\/\/v3\.paddleapi\.com\/3\.2\/license\/verify.*,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/langkhach270389/Surge-LK/new/scripts/langkhach/Aldente.js,script-update-interval=0

[MITM]
hostname = %APPEND% restore-access.indream.app
