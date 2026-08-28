# LensFact

한국 유통 콘택트렌즈 공식 사양 해석 서비스. 정적 사이트(`site/`), 빌드 없음. 상세는 `README.md`, `DESIGN.md`.

## 프로세스 관리 규칙 (필수)

- **이름으로 프로세스를 일괄 종료하지 않는다.** `taskkill /IM python.exe`, `taskkill /IM node.exe`, `Stop-Process -Name python`, `pkill python` 등 금지. 이 PC에는 상시 서비스(Hermes 게이트웨이 = python.exe, Flow = pythonw.exe, MCP 서버 = node.exe)가 항상 떠 있어서 함께 죽는다. 2026-08-28 서브에이전트가 `taskkill /F /IM python.exe`로 테스트 서버를 끄다 Hermes 게이트웨이를 종료시킨 사고가 있었다.
- **자기가 띄운 프로세스는 PID로만 끈다.**
  ```bash
  cd site && python -m http.server 4174 > /dev/null 2>&1 &
  SERVER_PID=$!
  # ... 작업 ...
  kill $SERVER_PID
  ```
  PowerShell이면 `$p = Start-Process python -ArgumentList '-m','http.server','4174' -PassThru` 후 `Stop-Process -Id $p.Id`.
- 포트가 이미 점유돼 있으면 죽이지 말고 **다른 포트**를 쓴다 (`4175`, `4176` …). 누가 점유했는지는 `netstat -ano | findstr :4174`로 PID를 확인한 뒤, 그 PID가 이 세션이 띄운 것일 때만 종료한다.
- 서브에이전트에게 서버·브라우저 작업을 위임할 때 이 규칙을 프롬프트에 그대로 넣는다.
