📅  기간 : 2022-10-17 ~ 2022-11-02 <br>
📚  목적 : 서울 전 지역에서 진행되고 있는 전시회 및 축제 등의 이벤트 일정을 제공하는 서비스입니다.

<hr/>

## 📌기획 의도
⁃ 당장 내일 어디가지? 뭐하지? 고민할 때 사용할 수 있는 서비스<br>
⁃ 코로나 완화로 정상적인 일상으로 돌아오며 축제나 전시회 등을 찾는 사람들이 증가하는 추세<br>
⁃ SNS, 검색이 아니면 축제 등의 일정을 쉽게 알 수 없음<br>
⁃ 내가 현재 있는 위치 혹은 내가 설정한 위치를 중심으로 반경 몇 km 이내로 검색해서 목록을 조회할 수 있음<br>

## 📌상세 기능
데이터베이스에 저장된 이벤트 정보 지도, 목록 형식으로 보여주기<br>
⁃ 지도 API 사용 -> 카카오 or 네이버<br>
⁃ 검색<br>

이벤트 종류 별, 기간 별 필터링 기능 <br>
⁃ 현재 진행 중인 이벤트 확인 가능<br>

회원 가입 / 로그인<br>
⁃ 자체 로그인 (암호화)<br>
⁃ 카카오 or 구글 로그인<br>


즐겨찾기<br>
⁃ 지도에 즐겨찾기 한 항목 따로 표시해주기<br>

마이 페이지<br>
⁃ 즐겨찾기 항목 보여주기<br>
⁃ 참가할 이벤트 달력에 표시해주기<br>

사용자 별점 & 리뷰 등록<br>

최신순, 별점순 정렬<br>
⁃ 지도에서 아이콘 크기 다르게<br>

## 📌폴더구조
```
client
📦src
 ┣ 📂Components
 ┃ ┣ 📂Banner
 ┃ ┃ ┣ 📜Banner.js
 ┃ ┃ ┗ 📜Banner.scss
 ┃ ┣ 📂ChatInput
 ┃ ┃ ┗ 📜ChatInput.js
 ┃ ┣ 📂Commons
 ┃ ┃ ┗ 📜Commons.scss
 ┃ ┣ 📂Event
 ┃ ┃ ┣ 📜Map.js
 ┃ ┃ ┗ 📜Map.scss
 ┃ ┣ 📂Footer
 ┃ ┃ ┣ 📜Footer.js
 ┃ ┃ ┗ 📜Footer.scss
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜Header.js
 ┃ ┃ ┗ 📜Header.scss
 ┃ ┣ 📂MainGallery
 ┃ ┃ ┣ 📜Gallery.js
 ┃ ┃ ┗ 📜Gallery.scss
 ┃ ┣ 📂MainMyPage
 ┃ ┃ ┣ 📜Mypage.js
 ┃ ┃ ┗ 📜Mypage.scss
 ┃ ┣ 📂Modal
 ┃ ┃ ┣ 📜Modal.js
 ┃ ┃ ┗ 📜Modal.scss
 ┃ ┣ 📂mypage
 ┃ ┃ ┣ 📜Calendar.js
 ┃ ┃ ┣ 📜Calendar.scss
 ┃ ┃ ┣ 📜Favorites.js
 ┃ ┃ ┣ 📜Favorites.scss
 ┃ ┃ ┣ 📜MyPage.js
 ┃ ┃ ┣ 📜Mypage.scss
 ┃ ┃ ┣ 📜MyPlan.js
 ┃ ┃ ┣ 📜MyPlan.scss
 ┃ ┃ ┣ 📜Plan.js
 ┃ ┃ ┣ 📜Plan.scss
 ┃ ┃ ┣ 📜Reply.js
 ┃ ┃ ┗ 📜Reply.scss
 ┃ ┣ 📂Review
 ┃ ┃ ┣ 📜Review.js
 ┃ ┃ ┗ 📜Review.scss
 ┃ ┣ 📂ReviewForm
 ┃ ┃ ┣ 📜ReviewForm.js
 ┃ ┃ ┗ 📜ReviewForm.scss
 ┃ ┣ 📂Room
 ┃ ┃ ┗ 📜Room.js
 ┃ ┣ 📜Button.js
 ┃ ┗ 📜ScrollToTop.js
 ┣ 📂Pages
 ┃ ┣ 📂Chat
 ┃ ┃ ┣ 📜Chat.js
 ┃ ┃ ┗ 📜Chat.scss
 ┃ ┣ 📂Schedule
 ┃ ┃ ┗ 📜Schedule.js
 ┃ ┣ 📜Date.json
 ┃ ┣ 📜Event.js
 ┃ ┣ 📜Event.scss
 ┃ ┣ 📜EventDetail.js
 ┃ ┣ 📜EventDetail.scss
 ┃ ┣ 📜FindId.js
 ┃ ┣ 📜FindId.scss
 ┃ ┣ 📜FindId_Code.js
 ┃ ┣ 📜KakaoShareButton.js
 ┃ ┣ 📜Login.js
 ┃ ┣ 📜Login.scss
 ┃ ┣ 📜Main.js
 ┃ ┣ 📜Resetpw.js
 ┃ ┣ 📜Resetpw.scss
 ┃ ┣ 📜Signup.js
 ┃ ┗ 📜Signup.scss
 ┣ 📂utils
 ┃ ┗ 📜Router.js
 ┗ 📜index.js

sever
 📦src
 ┣ 📂controller
 ┃ ┣ 📜EmailController.js
 ┃ ┣ 📜EventController.js
 ┃ ┣ 📜ReviewController.js
 ┃ ┣ 📜ScheduleController.js
 ┃ ┣ 📜SocketController.js
 ┃ ┗ 📜UserController.js
 ┣ 📂middleware
 ┃ ┗ 📜auth.js
 ┣ 📂model
 ┃ ┣ 📜Event.js
 ┃ ┣ 📜index.js
 ┃ ┣ 📜Like.js
 ┃ ┣ 📜Review.js
 ┃ ┣ 📜ReviewImg.js
 ┃ ┣ 📜Schedule.js
 ┃ ┣ 📜Socket.js
 ┃ ┗ 📜User.js
 ┣ 📂passport
 ┃ ┣ 📜GoogleStrategy.js
 ┃ ┗ 📜kakaoStrategy.js
 ┣ 📂routes
 ┃ ┣ 📜auth.js
 ┃ ┣ 📜email.js
 ┃ ┣ 📜event.js
 ┃ ┣ 📜review.js
 ┃ ┣ 📜schedule.js
 ┃ ┣ 📜socket.js
 ┃ ┗ 📜user.js
 ┗ 📜index.js
```