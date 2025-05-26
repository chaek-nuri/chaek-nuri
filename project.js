  /* 데이터 베이스 대체용 도서 샘플 변수 선언 const는 내부 값을 변경할 수 없음 */
   const books = [
    { id:1, title:"데미안", author:"헤르만 헤세", category:"소설", price:12000, img:"https://image.yes24.com/goods/97903156/XL", description:"자아를 찾아가는 성장 소설의 대표작.", bestseller:false, recommended:true },
    { id:2, title:"아침의 피아노", author:"김영하", category:"소설", price:15000, img:"https://image.yes24.com/goods/10333668/XL", description:"감성 가득한 단편 소설집.", bestseller:false, recommended:false },
    { id:8, title:"노르웨이의 숲", author:"무라카미 하루키", category:"소설", price:14000, img:"https://via.placeholder.com/150?text=노르웨이의+숲", description:"청춘의 고독과 사랑을 그린 소설.", bestseller:true, recommended:false },
    { id:9, title:"해리 포터와 마법사의 돌", author:"J.K. 롤링", category:"소설", price:20000, img:"https://via.placeholder.com/150?text=해리+포터", description:"마법 세계의 시작을 알린 판타지 소설.", bestseller:true, recommended:true },
    { id:10, title:"채식주의자", author:"한강", category:"소설", price:13000, img:"https://via.placeholder.com/150?text=채식주의자", description:"강렬한 상징으로 한국 사회를 비판.", bestseller:false, recommended:false },
    { id:11, title:"82년생 김지영", author:"조남주", category:"소설", price:15000, img:"https://via.placeholder.com/150?text=82년생+김지영", description:"한국 여성의 삶을 그린 소설.", bestseller:true, recommended:false },

    { id:3, title:"미움받을 용기", author:"기시미 이치로", category:"자기계발", price:13000, img:"https://image.yes24.com/goods/42983090/XL", description:"행복한 삶을 위한 아들러 심리학 입문서.", bestseller:false, recommended:true },
    { id:12, title:"아침형 인간", author:"하루 1시간", category:"자기계발", price:16000, img:"https://via.placeholder.com/150?text=아침형+인간", description:"생산성을 높이는 습관 형성 가이드.", bestseller:false, recommended:false },
    { id:13, title:"그릿", author:"앤절라 더크워스", category:"자기계발", price:18000, img:"https://via.placeholder.com/150?text=그릿", description:"성공을 이끄는 집중력과 끈기에 대하여.", bestseller:true, recommended:false },
    { id:14, title:"원씽", author:"게리 켈러", category:"자기계발", price:17000, img:"https://via.placeholder.com/150?text=원씽", description:"가장 중요한 것에 집중하는 법.", bestseller:false, recommended:false },
    { id:15, title:"작은 습관의 힘", author:"제임스 클리어", category:"자기계발", price:19000, img:"https://via.placeholder.com/150?text=작은+습관", description:"습관 변화의 심리학과 실행 전략.", bestseller:false, recommended:false },

    { id:4, title:"아가페 인문학", author:"김철수", category:"인문학", price:18000, img:"https://via.placeholder.com/150?text=아가페+인문학", description:"사랑과 인문학의 만남을 다룬 책.", bestseller:false, recommended:false },
    { id:16, title:"총, 균, 쇠", author:"재레드 다이아몬드", category:"인문학", price:22000, img:"https://via.placeholder.com/150?text=총,+균,+쇠", description:"문명의 발전을 과학적으로 분석.", bestseller:true, recommended:false },
    { id:17, title:"사피엔스", author:"유발 하라리", category:"인문학", price:21000, img:"https://via.placeholder.com/150?text=사피엔스", description:"인류 역사를 통찰하는 통합적 시각.", bestseller:true, recommended:true },
    { id:18, title:"호모 데우스", author:"유발 하라리", category:"인문학", price:20000, img:"https://via.placeholder.com/150?text=호모+데우스", description:"미래 인류의 가능성 탐구.", bestseller:false, recommended:false },
    { id:19, title:"이기적 유전자", author:"리처드 도킨스", category:"인문학", price:19000, img:"https://via.placeholder.com/150?text=이기적+유전자", description:"유전자 중심의 진화론 설명.", bestseller:false, recommended:false },

    { id:5, title:"HTML 웹 프로그래밍 입문", author:"한빛아카데미", category:"컴퓨터/IT", price:25000, img:"https://via.placeholder.com/150?text=HTML+웹+프로그래밍", description:"HTML과 웹 프로그래밍 기초 입문서.", bestseller:false, recommended:false },
    { id:20, title:"자바스크립트 완벽 가이드", author:"데이빗 플래너건", category:"컴퓨터/IT", price:28000, img:"https://via.placeholder.com/150?text=JS+완벽+가이드", description:"JS 언어의 모든 것을 담은 레퍼런스.", bestseller:false, recommended:true },
    { id:21, title:"클린 코드", author:"로버트 C. 마틴", category:"컴퓨터/IT", price:30000, img:"https://via.placeholder.com/150?text=클린+코드", description:"읽기 쉽고 유지보수 좋은 코드를 위한 원칙.", bestseller:false, recommended:false },
    { id:22, title:"알고리즘 문제 해결 전략", author:"구종만", category:"컴퓨터/IT", price:32000, img:"https://via.placeholder.com/150?text=알고리즘+전략", description:"다양한 알고리즘 기법과 풀이 방법.", bestseller:true, recommended:false },
    { id:23, title:"모던 C++", author:"벤 스코웰", category:"컴퓨터/IT", price:27000, img:"https://via.placeholder.com/150?text=모던+C++","description":"C++11 이후 최신 문법과 활용.",bestseller:false,recommended:false},
    { id:24, title:"파이썬 라이브러리를 활용한 머신러닝", author:"세바스찬 라시카", category:"컴퓨터/IT", price:35000, img:"https://via.placeholder.com/150?text=파이썬+ML+라이브러리", description:"scikit-learn 중심 실습서.", bestseller:false, recommended:false },

    { id:6, title:"어린이 과학 탐험", author:"어린이 과학 연구소", category:"어린이", price:10000, img:"https://via.placeholder.com/150?text=어린이+과학+탐험",description:"재미있고 신나는 어린이 과학 이야기.",bestseller:false,recommended:false},
    { id:25, title:"코딩 호랑이", author:"박코더", category:"어린이", price:12000, img:"https://via.placeholder.com/150?text=코딩+호랑이", description:"아이들을 위한 쉽고 재미있는 코딩 학습.",bestseller:false,recommended:true},
    { id:26, title:"마법 천자문", author:"유대영", category:"어린이", price:9000, img:"https://via.placeholder.com/150?text=마법+천자문", description:"한자를 마법 이야기로 풀어낸 학습 만화.",bestseller:false,recommended:false},
    { id:27, title:"엄마 까투리 과학동화", author:"어린이 과학 연구소", category:"어린이", price:11000, img:"https://via.placeholder.com/150?text=엄마+까투리", description:"과학 원리를 동화로 쉽게 설명.",bestseller:false,recommended:false},
    { id:28, title:"구름빵", author:"백희나", category:"어린이", price:10000, img:"https://via.placeholder.com/150?text=구름빵", description:"환상적인 그림과 따뜻한 이야기.",bestseller:true,recommended:false},

    { id:7, title:"경제학 원론", author:"박재현", category:"경제/경영", price:22000, img:"https://via.placeholder.com/150?text=경제학+원론",description:"경제학의 기본 개념과 원리를 정리한 책.",bestseller:false,recommended:false},
    { id:29, title:"부의 인문학", author:"홍성호", category:"경제/경영", price:18000, img:"https://via.placeholder.com/150?text=부의+인문학",description:"인문학 시각으로 풀어본 부의 법칙.",bestseller:true,recommended:false},
    { id:30, title:"경제 지표 읽는 법", author:"이성훈", category:"경제/경영", price:20000, img:"https://via.placeholder.com/150?text=경제+지표",description:"실전에서 쓰이는 주요 지표 해설.",bestseller:false,recommended:false},
    { id:31, title:"블루오션 전략", author:"김위찬", category:"경제/경영", price:24000, img:"https://via.placeholder.com/150?text=블루오션+전략",description:"경쟁 없는 시장을 창출하는 전략.",bestseller:false,recommended:false},
    { id:32, title:"하버드 경영전략", author:"아일린 슈랭거", category:"경제/경영", price:26000, img:"https://via.placeholder.com/150?text=하버드+경영전략",description:"하버드 사례로 배우는 전략 기법.",bestseller:false,recommended:false}
  ];

  let cart = []; // 장바구니 

  function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.length;
  }

  function renderSection(listId, filterFn) {
    const container = document.getElementById(listId);
    container.innerHTML = '';
    books.filter(filterFn).forEach(book => {
      const bookDiv = document.createElement('div');
      bookDiv.className = 'book';
      bookDiv.innerHTML = `
        <img src="${book.img}" alt="${book.title}" />
        <div class="book-info">
          <h3>${book.title}</h3>
          <p>저자: ${book.author}</p>
          <p>카테고리: ${book.category}</p>
          <p class="price">${book.price.toLocaleString()}원</p>
          <button class="add-cart-btn" onclick="addToCart(${book.id})">장바구니 담기</button>
        </div>`;
      container.appendChild(bookDiv);
    });
  }

  function renderBookList() {
    renderSection('mainBookList', book => book.recommended);
    renderSection('bestsellerList', book => book.bestseller);
  }

  function addToCart(id) {
    const book = books.find(b => b.id === id);
    if (book) cart.push(book);
    updateCartCount();
  }

  function openCartModal() {
    renderCartModal();
    document.getElementById('cartModal').style.display = 'flex';
  }
  function closeCartModal() { document.getElementById('cartModal').style.display = 'none'; }

  function renderCartModal() {
    const list = document.getElementById('cartItems');
    const totalElem = document.getElementById('cartTotal');
    list.innerHTML = '';
    let sum = 0;
    cart.forEach((b,i) => {
      const div = document.createElement('div');
      div.textContent = `${b.title} - ${b.price.toLocaleString()}원`;
      list.appendChild(div);
      sum += b.price;
    });
    totalElem.textContent = sum.toLocaleString();
  }

  function checkout() {
    if (!currentUser) { alert('로그인 후 구매 가능합니다.'); return; }
    if (cart.length === 0) { alert('장바구니가 비어 있습니다.'); return; }
    if (confirm(`${cart.length}권의 도서를 구매하시겠습니까?`)) {
      cart = []; updateCartCount(); closeCartModal(); alert('구매가 완료되었습니다!');
    }
  }

  window.onload = function() {
    renderBookList(); updateCartCount();
  };

  /* ----------------------------------------------
   * 로그인 상태 관리용 객체 (간단한 예제)
   * 실제 프로젝트에서는 보안 강화 필요
   * -------------------------------------------- */
  let currentUser = null;

  // 대여중인 eBook 데이터 샘플
  const userBorrowedEBooks = {
    'testuser': [
      { title: "데미안", dueDate: "2025-06-30" },
      { title: "미움받을 용기", dueDate: "2025-07-15" },
    ]
  };

  /* ----------------------------------------------
   * 초기 화면 도서 리스트 렌더링 함수
   * -------------------------------------------- */
  function renderBookList() {
    const container = document.getElementById('mainBookList');
    container.innerHTML = ""; // 기존 내용 제거
    books.forEach(book => {
      // 각 도서 카드 생성
      const bookDiv = document.createElement('div');
      bookDiv.className = 'book';
      bookDiv.setAttribute('data-id', book.id);
      bookDiv.innerHTML = `
        <img src="${book.img}" alt="${book.title}" />
        <div class="book-info">
          <h3>${book.title}</h3>
          <p>저자: ${book.author}</p>
          <p>카테고리: ${book.category}</p>
          <p class="price">${book.price.toLocaleString()}원</p>
        </div>
      `;

      // 클릭 시 상세 모달 열기 (검색 결과, 카테고리와 동일 UI 활용 가능)
      bookDiv.addEventListener('click', () => {
        openBookDetailModal(book);
      });

      container.appendChild(bookDiv);
    });
  }

  /* ----------------------------------------------
   * 검색 모달 열기: 입력값 기준 책 제목 포함 여부로 필터링
   * -------------------------------------------- */
  function openSearchModal() {
    const query = document.getElementById('searchInput').value.trim();
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ""; // 초기화

    if (query === "") {
      resultsContainer.innerHTML = "<p>검색어를 입력하세요.</p>";
    } else {
      // 대소문자 구분 없이 제목에 검색어 포함된 책들 필터링
      const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );

      if (filteredBooks.length === 0) {
        resultsContainer.innerHTML = "<p>검색 결과가 없습니다.</p>";
      } else {
        filteredBooks.forEach(book => {
          resultsContainer.appendChild(createBookDetailElement(book));
        });
      }
    }

    document.getElementById('searchModal').style.display = 'flex';
  }

  /* 검색 모달 닫기 */
  function closeSearchModal() {
    document.getElementById('searchModal').style.display = 'none';
  }

  /* ----------------------------------------------
   * 카테고리 모달 열기: 해당 카테고리 도서만 필터링
   * -------------------------------------------- */
  function openCategoryModal(category) {
    const titleElem = document.getElementById('categoryTitle');
    const resultsContainer = document.getElementById('categoryResults');

    titleElem.textContent = `${category} 도서 목록`;
    resultsContainer.innerHTML = "";

    // 카테고리 일치 도서만 필터링
    const filteredBooks = books.filter(book => book.category === category);

    if (filteredBooks.length === 0) {
      resultsContainer.innerHTML = "<p>해당 카테고리의 도서가 없습니다.</p>";
    } else {
      filteredBooks.forEach(book => {
        resultsContainer.appendChild(createBookDetailElement(book));
      });
    }

    document.getElementById('categoryModal').style.display = 'flex';
  }

  /* 카테고리 모달 닫기 */
  function closeCategoryModal() {
    document.getElementById('categoryModal').style.display = 'none';
  }

  /* ----------------------------------------------
   * 도서 상세 정보를 보여주는 요소 생성 함수
   * 모달 내에서 책 정보 표시용
   * -------------------------------------------- */
  function createBookDetailElement(book) {
    const container = document.createElement('div');
    container.className = 'modal-book';
    container.style.cursor = 'default';

    container.innerHTML = `
      <img src="${book.img}" alt="${book.title}" />
      <div class="modal-book-info">
        <h4>${book.title}</h4>
        <p><strong>저자:</strong> ${book.author}</p>
        <p><strong>카테고리:</strong> ${book.category}</p>
        <p>${book.description}</p>
        <p class="price">${book.price.toLocaleString()}원</p>
      </div>
    `;

    return container;
  }

  /* ----------------------------------------------
   * 로그인 모달 열기
   * -------------------------------------------- */
  function openLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
  }

  /* 로그인 모달 닫기 */
  function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
  }

  /* ----------------------------------------------
   * 로그인 처리 함수
   * - 간단히 아이디가 'nsu123'이고 비밀번호 '1234'일 때 성공 처리
   * - 실제 프로젝트에선 서버 인증 연동 필요
   * -------------------------------------------- */
  function login() {
    const idInput = document.getElementById('userId').value.trim();
    const pwdInput = document.getElementById('userPwd').value.trim();

    if (idInput === "" || pwdInput === "") {
      alert("아이디와 비밀번호를 모두 입력하세요.");
      return;
    }

    if (idInput === "nsu123" && pwdInput === "1234") {
      currentUser = idInput;
      alert(`${currentUser}님, 환영합니다!`);
      closeLoginModal();
      updateLoginState();
    } else {
      alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  }

  /* ----------------------------------------------
   * 로그아웃 처리 함수
   * -------------------------------------------- */
  function logout() {
    if (confirm("로그아웃 하시겠습니까?")) {
      currentUser = null;
      updateLoginState();
      alert("로그아웃 되었습니다.");
    }
  }

  /* ----------------------------------------------
   * 로그인 상태에 따른 UI 업데이트
   * -------------------------------------------- */
  function updateLoginState() {
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const myInfoBtn = document.getElementById('myInfoBtn');

    if (currentUser) {
      loginBtn.style.display = 'none';
      logoutBtn.style.display = 'inline-block';
      myInfoBtn.style.display = 'inline-block';
    } else {
      loginBtn.style.display = 'inline-block';
      logoutBtn.style.display = 'none';
      myInfoBtn.style.display = 'none';
    }
  }

  /* ----------------------------------------------
   * '나의 정보' 모달 열기
   * -------------------------------------------- */
  
  function openMyInfoModal() {
    if (!currentUser) {
      alert("로그인 후 이용 가능합니다.");
      return;
    }
    document.getElementById('infoUserId').textContent = currentUser;

    const borrowedList = document.getElementById('borrowedEBooks');
    borrowedList.innerHTML = "";

    const borrowed = userBorrowedEBooks[currentUser] || [];
    if (borrowed.length === 0) {
      borrowedList.innerHTML = "<li>대여 중인 도서가 없습니다.</li>";
    } else {
      borrowed.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.title} (반납 예정일: ${book.dueDate})`;
        borrowedList.appendChild(li);
      });
    }

    document.getElementById('myInfoModal').style.display = 'flex';
  }

  /* '나의 정보' 모달 닫기 */
  function closeMyInfoModal() {
    document.getElementById('myInfoModal').style.display = 'none';
  }

  /* ----------------------------------------------
   * 도서 상세 모달 열기 (검색, 카테고리, 리스트 공통)
   * -------------------------------------------- */
  function openBookDetailModal(book) {
    // 검색 결과나 카테고리 결과를 보여주는 모달 영역을 재활용하지 않고
    // 별도의 상세 모달을 만들 수도 있지만, 여기서는 간단히 alert로 대체
    // 필요시 모달 UI 구현 가능
    alert(`도서명: ${book.title}\n저자: ${book.author}\n카테고리: ${book.category}\n설명: ${book.description}\n가격: ${book.price.toLocaleString()}원`);
  }

  // 페이지 로드 시 초기 렌더링 및 상태 초기화
  window.onload = function () {
    renderBookList();
    updateLoginState();
  };
