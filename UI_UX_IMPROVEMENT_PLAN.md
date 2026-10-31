# 2027-eu-trip UI/UX 개선 계획서

## ✅ 완료된 작업
- **P1: 표 셀 폰트 크기 향상** 
  - `style.css` `table { font-size: 15px }` (데스크톱) / `@media (max-width: 480px) { table { font-size: 13px } }` (모바일)
  - 효과: 시니어 부모님들이 표 내용을 더 쉽게 읽을 수 있음

- **P2: 영문 용어에 한국어 풀이 추가** (총 7군데)
  1. `⚠️ 보험 자기부담금(CDW/PDW·자기부담금 면제 보험 공제액)` (index.html 233줄)
  2. `노상(Kurzparkzone·단속구역)` (index.html 324줄)
  3. `일요일·야간엔 P+R(주차장)보다 비쌈` (index.html 321줄)
  4. `ZTL(저공해 구역·vehicle restricted zone) 주의` (index.html 413줄)
  5. `비네트(전자 도로세)` (index.html 454, 466줄) ×2군데
  6. `IDP(국제면허증)` (index.html 465줄)

- **P3: 모바일 환경 유지**
  - 기존 미디어 쿼리 유지 (`max-width: 480px` → `font-size: 13px`)
  - `max-width: 640px` → `font-size: 12px` (이미 적용됨)

## 📋 다음 단계 예정 (P4~P7)
- P4: 모바일 지도 높이 미세 조정 (`max-height: 70vh` 검토)
- P5: `🔗` 새 창 링크 표시 추가 (구글맵 링크 등)
- P6: `.dim` 색상 대비 강화 (`#64748b` → `#3d4852` 검토)
- P7: Firebase empty 상태 배너 문구 보완

## 📁 수정 파일
- `style.css`: 테이블 폰트 사이즈 14px → 15px (데스크톱)
- `index.html`: 7군데 영문 용어에 한국어 괄호 풀이 추가

## 🎯 목표
고령 부모님들이 주요 표와 안내문을 불편 없이 읽을 수 있는 가독성 확보 및 언어 장벽 해소