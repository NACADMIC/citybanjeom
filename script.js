// 시티반점 실제 메뉴 데이터
const menuData = [
    // 면류
    {
        id: 1,
        name: '[안심] 시티짜장',
        desc: '부드럽고 고급진 안심 고기로 볶은 짜장',
        price: 6900,
        category: 'noodle',
        emoji: '🍜',
        color: '#3d2817',
        badge: '인기'
    },
    {
        id: 2,
        name: '[안심] 간짜장',
        desc: '부드럽고 고급진 안심고기와 아삭한 양파',
        price: 9000,
        category: 'noodle',
        emoji: '🍝',
        color: '#4a3728'
    },
    {
        id: 3,
        name: '고추간짜장 [실장추천]',
        desc: '특별한 메뉴! 남은 장에 밥 비벼드세요',
        price: 11000,
        category: 'noodle',
        emoji: '🌶️',
        color: '#c62828',
        badge: '대표'
    },
    {
        id: 4,
        name: '(통오징어1마리) 직화짬뽕',
        desc: '통오징어 한마리가 들어간 직화짬뽕',
        price: 9500,
        category: 'noodle',
        emoji: '🦑',
        color: '#d32f2f'
    },
    {
        id: 5,
        name: '열직화짬뽕(매운)',
        desc: '일반짬뽕보다 2~3배 매운 핫한 짬뽕',
        price: 10500,
        category: 'noodle',
        emoji: '🔥',
        color: '#ff3d00',
        badge: 'HOT'
    },
    {
        id: 6,
        name: '야끼우동 [실장추천]',
        desc: '경상도식 볶음짬뽕, 한번 먹으면 또 생각나는',
        price: 11000,
        category: 'noodle',
        emoji: '🍲',
        color: '#ff6b35',
        badge: '대표'
    },
    {
        id: 7,
        name: '삼선간짜장',
        desc: '안심고기, 삼선해물, 아삭한 양파',
        price: 11000,
        category: 'noodle',
        emoji: '🦐',
        color: '#ff8a65'
    },
    {
        id: 8,
        name: '백짬뽕(삼선)',
        desc: '고추가루를 뺀 하얀 국물에 약간 매운맛',
        price: 11000,
        category: 'noodle',
        emoji: '🥛',
        color: '#eeeeee'
    },
    {
        id: 9,
        name: '삼선우동',
        desc: '삼선해물과 맑은 색에 담백한 맛',
        price: 11000,
        category: 'noodle',
        emoji: '🍜',
        color: '#8d6e63'
    },
    {
        id: 10,
        name: '황제고추간짜장',
        desc: '해물 듬뿍 고추간짜장 업그레이드',
        price: 13000,
        category: 'noodle',
        emoji: '👑',
        color: '#ffd700'
    },
    {
        id: 11,
        name: '(특)삼선짬뽕',
        desc: '통오징어, 여러가지 해물 듬뿍',
        price: 13000,
        category: 'noodle',
        emoji: '🦞',
        color: '#e65100'
    },
    {
        id: 12,
        name: '소고기짬뽕',
        desc: '불향가득 소고기를 직화로 볶아 풍미UP',
        price: 13000,
        category: 'noodle',
        emoji: '🥩',
        color: '#8b4513'
    },
    // 밥류
    {
        id: 13,
        name: '[구름계란] 볶음밥',
        desc: '짜장소스, 짬뽕국물, 볶음밥 세가지 맛',
        price: 9000,
        category: 'rice',
        emoji: '☁️',
        color: '#f57c00'
    },
    {
        id: 14,
        name: '짬뽕밥',
        desc: '직화짬뽕을 공기밥과 함께',
        price: 10000,
        category: 'rice',
        emoji: '🍛',
        color: '#d84315'
    },
    {
        id: 15,
        name: '잡채밥',
        desc: '탱글탱글 당면, 야채와 유슬고기',
        price: 10000,
        category: 'rice',
        emoji: '🥢',
        color: '#6d4c41'
    },
    {
        id: 16,
        name: '마파두부덮밥',
        desc: '매콤하고 고소한 마파두부',
        price: 10000,
        category: 'rice',
        emoji: '🌶️',
        color: '#c62828'
    },
    {
        id: 17,
        name: '[총총] 새우볶음밥',
        desc: '총총 박힌 새우와 세가지 맛',
        price: 11000,
        category: 'rice',
        emoji: '🦐',
        color: '#ff8a65'
    },
    {
        id: 18,
        name: '삼선볶음밥',
        desc: '삼선 해물과 세가지 맛',
        price: 11000,
        category: 'rice',
        emoji: '🍚',
        color: '#ff6b35'
    },
    {
        id: 19,
        name: '중화비빔밥 [실장추천]',
        desc: '해물, 야채 매콤하게 직화로 볶고 계란까지',
        price: 11000,
        category: 'rice',
        emoji: '🍱',
        color: '#ff5722',
        badge: '대표'
    },
    {
        id: 20,
        name: '속풀이순두부짬뽕밥',
        desc: '순두부 한통이 통째로! 짬뽕과 조화',
        price: 11000,
        category: 'rice',
        emoji: '🥘',
        color: '#f44336',
        badge: '대표'
    },
    {
        id: 21,
        name: '한돈제육덮밥',
        desc: '불향 가득한 직화제육덮밥',
        price: 11000,
        category: 'rice',
        emoji: '🐷',
        color: '#d32f2f'
    },
    {
        id: 22,
        name: '유산슬밥',
        desc: '해삼, 죽순, 버섯의 담백하고 고급스러운 맛',
        price: 13000,
        category: 'rice',
        emoji: '🍄',
        color: '#6d4c41'
    },
    {
        id: 23,
        name: '잡탕밥(해물듬뿍)',
        desc: '삼선해물과 야채를 직화로 조리',
        price: 14000,
        category: 'rice',
        emoji: '🦞',
        color: '#ff6b35'
    },
    // 요리류
    {
        id: 24,
        name: '[바삭부들] 안심탕수육(소)',
        desc: '고급 안심 고기로 만든 바삭부들 탕수육',
        price: 20000,
        category: 'main',
        emoji: '🍖',
        color: '#e65100',
        badge: '대표'
    },
    {
        id: 25,
        name: '[바삭부들] 안심탕수육(중)',
        desc: '고급 안심 고기로 만든 바삭부들 탕수육',
        price: 25000,
        category: 'main',
        emoji: '🍖',
        color: '#ef6c00',
        badge: '대표'
    },
    {
        id: 26,
        name: '[바삭부들] 안심탕수육(대)',
        desc: '고급 안심 고기로 만든 바삭부들 탕수육',
        price: 30000,
        category: 'main',
        emoji: '🍖',
        color: '#f57c00',
        badge: '대표'
    },
    {
        id: 27,
        name: '양장피',
        desc: '화려한 비주얼! 야채, 해물과 겨자소스',
        price: 32000,
        category: 'main',
        emoji: '🥗',
        color: '#558b2f'
    },
    {
        id: 28,
        name: '삼선술국',
        desc: '삼선해물과 함께 조리한 술국',
        price: 15000,
        category: 'main',
        emoji: '🍲',
        color: '#d32f2f'
    },
    // 신메뉴
    {
        id: 29,
        name: '고기듬뿍 짜장',
        desc: '안심고기 170g 추가! 고기집 1인분 수준',
        price: 10000,
        category: 'noodle',
        emoji: '🥩',
        color: '#8b4513',
        badge: 'NEW'
    },
    {
        id: 30,
        name: '바지락폭탄 짬뽕',
        desc: '바지락 80~100마리 이상! 다른 해물 없음',
        price: 11000,
        category: 'noodle',
        emoji: '🐚',
        color: '#00897b',
        badge: 'NEW'
    },
    {
        id: 31,
        name: '고기듬뿍 간짜장',
        desc: '안심고기 170g 추가! 소스 못버려요',
        price: 12000,
        category: 'noodle',
        emoji: '🥩',
        color: '#6d4c41',
        badge: 'NEW'
    },
    {
        id: 32,
        name: '고기듬뿍 고추간짜장',
        desc: '안심고기 170g 추가! 특별한 조합',
        price: 14000,
        category: 'noodle',
        emoji: '🥩',
        color: '#bf360c',
        badge: 'NEW'
    },
    // 사이드
    {
        id: 33,
        name: '군만두(8P)',
        desc: '바삭한 군만두 8개 + 미니간장',
        price: 5000,
        category: 'side',
        emoji: '🥟',
        color: '#fbc02d'
    },
    {
        id: 34,
        name: '연유꽃빵튀김(4P)',
        desc: '꽃빵튀김과 연유크림 소스',
        price: 3000,
        category: 'side',
        emoji: '🍩',
        color: '#ffeb3b'
    },
    {
        id: 35,
        name: '멘보샤(6P)',
        desc: '새우토스트! 식빵 사이에 으깬 새우',
        price: 6000,
        category: 'side',
        emoji: '🍤',
        color: '#ff9800'
    },
    {
        id: 36,
        name: '칠리만두(8P)',
        desc: '매콤한 칠리소스로 조리한 만두',
        price: 7000,
        category: 'side',
        emoji: '🌶️',
        color: '#f44336'
    }
];

// 상태 관리
let cart = [];
let currentCategory = 'all';
let searchKeyword = '';
let userPoints = parseInt(localStorage.getItem('userPoints')) || 0;
let pointsHistory = JSON.parse(localStorage.getItem('pointsHistory')) || [];
let usedPoints = 0;
let orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
let savedAddress = localStorage.getItem('savedAddress') || '';
let savedPhone = localStorage.getItem('savedPhone') || '';

// 포인트 적립률 (5%)
const POINT_RATE = 0.05;
const DELIVERY_FEE = 3000;
const MIN_ORDER_AMOUNT = 9900;

// DOM 요소
const menuList = document.getElementById('menuList');
const cartToggle = document.getElementById('cartToggle');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const totalPrice = document.getElementById('totalPrice');
const orderBtn = document.getElementById('orderBtn');
const overlay = document.getElementById('overlay');
const categoryBtns = document.querySelectorAll('.category-btn');
const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');

// 포인트 관련 DOM 요소
const pointsValue = document.getElementById('pointsValue');
const pointsBadge = document.getElementById('pointsBadge');
const availablePoints = document.getElementById('availablePoints');
const usePointsCheck = document.getElementById('usePointsCheck');
const pointsInputGroup = document.getElementById('pointsInputGroup');
const pointsInput = document.getElementById('pointsInput');
const pointsMaxBtn = document.getElementById('pointsMaxBtn');
const discountInfo = document.getElementById('discountInfo');
const discountAmount = document.getElementById('discountAmount');
const finalPrice = document.getElementById('finalPrice');
const earnPoints = document.getElementById('earnPoints');
const pointsModal = document.getElementById('pointsModal');
const closePointsModal = document.getElementById('closePointsModal');
const modalPointsValue = document.getElementById('modalPointsValue');
const pointsHistoryEl = document.getElementById('pointsHistory');

// 주문 관련 DOM 요소
const orderModal = document.getElementById('orderModal');
const closeOrderModal = document.getElementById('closeOrderModal');
const orderForm = document.getElementById('orderForm');
const orderItemsSummary = document.getElementById('orderItemsSummary');
const deliveryAddress = document.getElementById('deliveryAddress');
const deliveryAddressDetail = document.getElementById('deliveryAddressDetail');
const phoneNumber = document.getElementById('phoneNumber');
const orderRequest = document.getElementById('orderRequest');
const loadSavedAddress = document.getElementById('loadSavedAddress');
const requestBtns = document.querySelectorAll('.request-btn');
const summaryTotal = document.getElementById('summaryTotal');
const summaryDiscount = document.getElementById('summaryDiscount');
const summaryDiscountRow = document.getElementById('summaryDiscountRow');
const summaryDeliveryFee = document.getElementById('summaryDeliveryFee');
const summaryFinalPrice = document.getElementById('summaryFinalPrice');
const finalPayAmount = document.getElementById('finalPayAmount');

// 주문 완료 모달
const orderCompleteModal = document.getElementById('orderCompleteModal');
const closeCompleteModal = document.getElementById('closeCompleteModal');
const completedOrderNumber = document.getElementById('completedOrderNumber');
const estimatedTime = document.getElementById('estimatedTime');

// 주문 상태 조회 모달
const orderStatusBtn = document.getElementById('orderStatusBtn');
const orderStatusModal = document.getElementById('orderStatusModal');
const closeOrderStatusModal = document.getElementById('closeOrderStatusModal');
const searchOrderBtn = document.getElementById('searchOrderBtn');
const orderNumberInput = document.getElementById('orderNumberInput');
const orderStatusResult = document.getElementById('orderStatusResult');
const orderNotFound = document.getElementById('orderNotFound');

// 주문내역 모달
const orderHistoryBtn = document.getElementById('orderHistoryBtn');
const orderHistoryModal = document.getElementById('orderHistoryModal');
const closeOrderHistoryModal = document.getElementById('closeOrderHistoryModal');
const orderHistoryList = document.getElementById('orderHistoryList');

// 메뉴 렌더링
function renderMenu() {
    menuList.innerHTML = '';
    
    let filteredMenu = currentCategory === 'all' 
        ? menuData 
        : menuData.filter(item => item.category === currentCategory);
    
    // 검색 필터링
    if (searchKeyword) {
        filteredMenu = filteredMenu.filter(item => 
            item.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
            item.desc.toLowerCase().includes(searchKeyword.toLowerCase())
        );
    }
    
    // 검색 결과 없음
    if (filteredMenu.length === 0) {
        menuList.innerHTML = `
            <div style="text-align: center; padding: 60px 20px; color: #999;">
                <div style="font-size: 48px; margin-bottom: 16px;">🔍</div>
                <p style="font-size: 16px; font-weight: 600; margin-bottom: 8px;">검색 결과가 없습니다</p>
                <p style="font-size: 14px;">"${searchKeyword}"에 대한 메뉴를 찾을 수 없어요</p>
            </div>
        `;
        return;
    }
    
    filteredMenu.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        const badgeHtml = item.badge ? `<span class="menu-badge">${item.badge}</span>` : '';
        const emoji = item.emoji || '🍜';
        const color = item.color || '#ff6b6b';
        menuItem.innerHTML = `
            <div class="menu-image" style="background: linear-gradient(135deg, ${color}22, ${color}44);">
                <span class="menu-emoji">${emoji}</span>
            </div>
            <div class="menu-info">
                <div>
                    <div class="menu-name">
                        ${item.name}
                        ${badgeHtml}
                    </div>
                    <div class="menu-desc">${item.desc}</div>
                </div>
                <div class="menu-footer">
                    <span class="menu-price">${item.price.toLocaleString()}원</span>
                    <button class="add-btn" onclick="addToCart(${item.id})">담기</button>
                </div>
            </div>
        `;
        menuList.appendChild(menuItem);
    });
}

// 장바구니에 추가
function addToCart(itemId) {
    const item = menuData.find(m => m.id === itemId);
    const existingItem = cart.find(c => c.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    
    updateCart();
    showCartNotification();
}

// 장바구니 업데이트
function updateCart() {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPrice.textContent = `${total.toLocaleString()}원`;
    
    // 포인트 사용 가능 금액 업데이트
    const maxUsablePoints = Math.min(userPoints, Math.floor(total * 0.5)); // 최대 50%까지 사용 가능
    pointsInput.max = maxUsablePoints;
    
    // 사용 포인트 검증 및 조정
    if (usedPoints > maxUsablePoints) {
        usedPoints = maxUsablePoints;
        pointsInput.value = usedPoints;
    }
    
    // 최종 금액 계산
    const finalTotal = Math.max(0, total - usedPoints);
    finalPrice.textContent = `${finalTotal.toLocaleString()}원`;
    
    // 할인 정보 표시
    if (usedPoints > 0) {
        discountInfo.style.display = 'flex';
        discountAmount.textContent = `-${usedPoints.toLocaleString()}원`;
    } else {
        discountInfo.style.display = 'none';
    }
    
    // 적립 예정 포인트 계산
    const earnPointsAmount = Math.floor(finalTotal * POINT_RATE);
    earnPoints.textContent = `${earnPointsAmount}P`;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">장바구니가 비어있습니다</p>';
        orderBtn.disabled = true;
        usedPoints = 0;
        usePointsCheck.checked = false;
        pointsInputGroup.style.display = 'none';
    } else {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price.toLocaleString()}원</div>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">삭제</button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
        orderBtn.disabled = false;
    }
}

// 수량 변경
function changeQuantity(itemId, change) {
    const item = cart.find(c => c.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            updateCart();
        }
    }
}

// 장바구니에서 제거
function removeFromCart(itemId) {
    cart = cart.filter(c => c.id !== itemId);
    updateCart();
}

// 장바구니 토글
cartToggle.addEventListener('click', () => {
    cartSidebar.classList.add('open');
    overlay.classList.add('show');
});

closeCart.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
    overlay.classList.remove('show');
});

overlay.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
    orderModal.classList.remove('show');
    orderCompleteModal.classList.remove('show');
    orderStatusModal.classList.remove('show');
    orderHistoryModal.classList.remove('show');
    pointsModal.classList.remove('show');
    overlay.classList.remove('show');
});

// 카테고리 필터
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        searchKeyword = '';
        searchInput.value = '';
        clearSearch.classList.remove('show');
        renderMenu();
    });
});

// 메뉴 검색
searchInput.addEventListener('input', (e) => {
    searchKeyword = e.target.value.trim();
    
    if (searchKeyword) {
        clearSearch.classList.add('show');
        // 검색 시 전체 카테고리로 변경
        currentCategory = 'all';
        categoryBtns.forEach(b => b.classList.remove('active'));
        categoryBtns[0].classList.add('active');
    } else {
        clearSearch.classList.remove('show');
    }
    
    renderMenu();
});

// 검색 초기화
clearSearch.addEventListener('click', () => {
    searchInput.value = '';
    searchKeyword = '';
    clearSearch.classList.remove('show');
    renderMenu();
    searchInput.focus();
});

// 포인트 관련 이벤트
usePointsCheck.addEventListener('change', (e) => {
    if (e.target.checked) {
        pointsInputGroup.style.display = 'flex';
    } else {
        pointsInputGroup.style.display = 'none';
        usedPoints = 0;
        pointsInput.value = '';
        updateCart();
    }
});

pointsInput.addEventListener('input', (e) => {
    let value = parseInt(e.target.value) || 0;
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const maxUsable = Math.min(userPoints, Math.floor(total * 0.5));
    
    if (value > maxUsable) {
        value = maxUsable;
        e.target.value = value;
    }
    
    usedPoints = value;
    updateCart();
});

pointsMaxBtn.addEventListener('click', () => {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const maxUsable = Math.min(userPoints, Math.floor(total * 0.5));
    pointsInput.value = maxUsable;
    usedPoints = maxUsable;
    updateCart();
});

// 포인트 업데이트
function updatePoints() {
    pointsValue.textContent = `${userPoints.toLocaleString()}P`;
    availablePoints.textContent = userPoints.toLocaleString();
    modalPointsValue.textContent = `${userPoints.toLocaleString()}P`;
    localStorage.setItem('userPoints', userPoints);
}

// 포인트 내역 추가
function addPointsHistory(type, amount, description) {
    const history = {
        type,
        amount,
        description,
        date: new Date().toLocaleString('ko-KR')
    };
    pointsHistory.unshift(history);
    localStorage.setItem('pointsHistory', JSON.stringify(pointsHistory));
}

// 포인트 내역 렌더링
function renderPointsHistory() {
    if (pointsHistory.length === 0) {
        pointsHistoryEl.innerHTML = '<p class="empty-history">포인트 내역이 없습니다</p>';
        return;
    }
    
    pointsHistoryEl.innerHTML = '';
    pointsHistory.forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.innerHTML = `
            <div class="history-info">
                <div class="history-type">${item.description}</div>
                <div class="history-date">${item.date}</div>
            </div>
            <div class="history-points ${item.type}">
                ${item.type === 'earn' ? '+' : '-'}${item.amount.toLocaleString()}P
            </div>
        `;
        pointsHistoryEl.appendChild(historyItem);
    });
}

// 포인트 모달 열기
pointsBadge.addEventListener('click', () => {
    pointsModal.classList.add('show');
    renderPointsHistory();
});

closePointsModal.addEventListener('click', () => {
    pointsModal.classList.remove('show');
});

pointsModal.addEventListener('click', (e) => {
    if (e.target === pointsModal) {
        pointsModal.classList.remove('show');
    }
});

// 주문서 작성 버튼
orderBtn.addEventListener('click', () => {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // 최소 주문금액 체크
    if (total < MIN_ORDER_AMOUNT) {
        alert(`최소 주문금액은 ${MIN_ORDER_AMOUNT.toLocaleString()}원입니다.`);
        return;
    }
    
    // 주문서 모달 열기
    openOrderModal();
});

// 주문서 모달 열기
function openOrderModal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const finalTotal = total - usedPoints + DELIVERY_FEE;
    
    // 현재 사용자 확인
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const isGuest = !currentUser.phone || currentUser.isGuest;
    
    // 비회원이면 포인트 사용 불가
    const pointsSection = document.querySelector('.points-section');
    if (pointsSection) {
        if (isGuest) {
            pointsSection.style.display = 'none';
            usedPoints = 0;
            usePointsCheck.checked = false;
            pointsInputGroup.style.display = 'none';
        } else {
            pointsSection.style.display = 'block';
        }
    }
    
    // 주문 상품 요약
    orderItemsSummary.innerHTML = cart.map(item => `
        <div class="summary-item">
            <span>${item.name} x${item.quantity}</span>
            <span>${(item.price * item.quantity).toLocaleString()}원</span>
        </div>
    `).join('');
    
    // 저장된 정보 불러오기
    if (savedAddress) deliveryAddress.value = savedAddress;
    if (savedPhone) phoneNumber.value = savedPhone;
    
    // 금액 정보 업데이트
    summaryTotal.textContent = `${total.toLocaleString()}원`;
    summaryDeliveryFee.textContent = `${DELIVERY_FEE.toLocaleString()}원`;
    
    if (usedPoints > 0) {
        summaryDiscountRow.style.display = 'flex';
        summaryDiscount.textContent = `-${usedPoints.toLocaleString()}원`;
    } else {
        summaryDiscountRow.style.display = 'none';
    }
    
    summaryFinalPrice.textContent = `${finalTotal.toLocaleString()}원`;
    finalPayAmount.textContent = `${finalTotal.toLocaleString()}원`;
    
    orderModal.classList.add('show');
    cartSidebar.classList.remove('open');
}

// 주문서 모달 닫기
closeOrderModal.addEventListener('click', () => {
    orderModal.classList.remove('show');
});

// 저장된 주소 불러오기
loadSavedAddress.addEventListener('click', () => {
    if (savedAddress) {
        deliveryAddress.value = savedAddress;
        alert('저장된 주소를 불러왔습니다.');
    } else {
        alert('저장된 주소가 없습니다.');
    }
});

// 요청사항 버튼
requestBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const request = btn.dataset.request;
        if (orderRequest.value) {
            orderRequest.value += '\n' + request;
        } else {
            orderRequest.value = request;
        }
        btn.classList.add('active');
        setTimeout(() => btn.classList.remove('active'), 300);
    });
});

// 주문 제출
orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // 입력값 검증
    if (!deliveryAddress.value || !deliveryAddressDetail.value) {
        alert('배달 주소를 입력해주세요.');
        return;
    }
    
    if (!phoneNumber.value) {
        alert('연락처를 입력해주세요.');
        return;
    }
    
    // 주소와 연락처 저장
    savedAddress = deliveryAddress.value;
    savedPhone = phoneNumber.value;
    localStorage.setItem('savedAddress', savedAddress);
    localStorage.setItem('savedPhone', savedPhone);
    
    // 주문 처리
    processOrder();
});

// 주문 처리
function processOrder() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const finalTotal = total - usedPoints + DELIVERY_FEE;
    const earnPointsAmount = Math.floor(finalTotal * POINT_RATE);
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    
    // 현재 사용자 확인
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const isGuest = !currentUser.phone || currentUser.isGuest;
    
    // 주문번호 생성
    const orderNumber = 'CT' + Date.now().toString().slice(-8);
    
    // 주문 정보 저장
    const order = {
        orderNumber,
        date: new Date().toLocaleString('ko-KR'),
        items: cart.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price
        })),
        total,
        usedPoints,
        deliveryFee: DELIVERY_FEE,
        finalTotal,
        earnedPoints: isGuest ? 0 : earnPointsAmount,
        address: `${deliveryAddress.value} ${deliveryAddressDetail.value}`,
        phone: phoneNumber.value,
        request: orderRequest.value,
        paymentMethod,
        status: '배달완료',
        isGuest
    };
    
    orderHistory.unshift(order);
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
    
    // 포인트 처리 (회원만)
    if (!isGuest) {
        if (usedPoints > 0) {
            userPoints -= usedPoints;
            addPointsHistory('use', usedPoints, '주문 시 포인트 사용');
        }
        
        userPoints += earnPointsAmount;
        addPointsHistory('earn', earnPointsAmount, '주문 적립');
        updatePoints();
    }
    
    // 주문서 모달 닫기
    orderModal.classList.remove('show');
    
    // 주문 완료 모달 표시
    showOrderComplete(orderNumber, isGuest);
    
    // 초기화
    cart = [];
    usedPoints = 0;
    usePointsCheck.checked = false;
    pointsInput.value = '';
    pointsInputGroup.style.display = 'none';
    updateCart();
    
    // 폼 초기화
    orderForm.reset();
    orderRequest.value = '';
}

// 주문 완료 모달 표시
function showOrderComplete(orderNumber, isGuest) {
    completedOrderNumber.textContent = orderNumber;
    
    // 비회원은 포인트 안내 숨기기
    const pointsEarnedText = document.querySelector('.order-complete-content .points-earned');
    if (pointsEarnedText) {
        if (isGuest) {
            pointsEarnedText.style.display = 'none';
        } else {
            pointsEarnedText.style.display = 'block';
        }
    }
    
    orderCompleteModal.classList.add('show');
    overlay.classList.add('show');
}

closeCompleteModal.addEventListener('click', () => {
    orderCompleteModal.classList.remove('show');
    overlay.classList.remove('show');
});

// 주문 상태 조회
orderStatusBtn.addEventListener('click', () => {
    orderStatusModal.classList.add('show');
    overlay.classList.add('show');
    orderStatusResult.classList.add('hidden');
    orderNotFound.classList.add('hidden');
    orderNumberInput.value = '';
});

closeOrderStatusModal.addEventListener('click', () => {
    orderStatusModal.classList.remove('show');
    overlay.classList.remove('show');
});

searchOrderBtn.addEventListener('click', () => {
    const orderNumber = orderNumberInput.value.trim().toUpperCase();
    
    if (!orderNumber) {
        alert('주문번호를 입력해주세요');
        return;
    }
    
    searchOrderStatus(orderNumber);
});

orderNumberInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchOrderBtn.click();
    }
});

function searchOrderStatus(orderNumber) {
    // 모든 주문 내역에서 검색
    const order = orderHistory.find(o => o.orderNumber === orderNumber);
    
    if (!order) {
        orderStatusResult.classList.add('hidden');
        orderNotFound.classList.remove('hidden');
        return;
    }
    
    // 주문 찾음
    orderNotFound.classList.add('hidden');
    orderStatusResult.classList.remove('hidden');
    
    // 주문 정보 표시
    document.getElementById('resultOrderNumber').textContent = order.orderNumber;
    document.getElementById('resultOrderDate').textContent = order.date;
    document.getElementById('resultOrderAddress').textContent = order.address;
    document.getElementById('resultOrderPhone').textContent = order.phone;
    document.getElementById('resultOrderAmount').textContent = order.finalTotal.toLocaleString() + '원';
    
    // 주문 메뉴 표시
    document.getElementById('resultOrderItems').innerHTML = order.items.map(item => `
        <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e0e0e0;">
            <span>${item.name} x${item.quantity}</span>
            <span>${(item.price * item.quantity).toLocaleString()}원</span>
        </div>
    `).join('');
    
    // 주문 상태 시뮬레이션 (실제로는 서버에서 가져와야 함)
    simulateOrderStatus(order);
}

function simulateOrderStatus(order) {
    const orderDate = new Date(order.date);
    const now = new Date();
    const elapsedMinutes = Math.floor((now - orderDate) / 1000 / 60);
    
    // 모든 단계 초기화
    for (let i = 1; i <= 4; i++) {
        const step = document.getElementById(`step${i}`);
        step.classList.remove('active', 'completed');
        document.getElementById(`time${i}`).textContent = '';
    }
    
    // 단계별 시간 설정 (10분, 30분, 50분, 60분)
    const stages = [
        { minutes: 0, text: '주문 접수 완료' },
        { minutes: 10, text: '조리 시작' },
        { minutes: 30, text: '배달 출발' },
        { minutes: 50, text: '배달 완료' }
    ];
    
    let currentStage = 0;
    stages.forEach((stage, index) => {
        if (elapsedMinutes >= stage.minutes) {
            currentStage = index + 1;
            const step = document.getElementById(`step${index + 1}`);
            step.classList.add('completed');
            
            const time = new Date(orderDate.getTime() + stage.minutes * 60000);
            document.getElementById(`time${index + 1}`).textContent = 
                time.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
        }
    });
    
    // 현재 진행 중인 단계 표시
    if (currentStage < 4) {
        const nextStep = document.getElementById(`step${currentStage + 1}`);
        nextStep.classList.add('active');
        nextStep.classList.remove('completed');
        
        const nextStageTime = stages[currentStage].minutes;
        const remainingMinutes = nextStageTime - elapsedMinutes;
        document.getElementById(`time${currentStage + 1}`).textContent = 
            `약 ${remainingMinutes}분 후`;
    }
}

// 주문내역 보기
orderHistoryBtn.addEventListener('click', () => {
    renderOrderHistory();
    orderHistoryModal.classList.add('show');
    overlay.classList.add('show');
});

closeOrderHistoryModal.addEventListener('click', () => {
    orderHistoryModal.classList.remove('show');
    overlay.classList.remove('show');
});

// 주문내역 렌더링
function renderOrderHistory() {
    if (orderHistory.length === 0) {
        orderHistoryList.innerHTML = '<p class="empty-history">주문 내역이 없습니다</p>';
        return;
    }
    
    orderHistoryList.innerHTML = orderHistory.map(order => `
        <div class="history-order-item">
            <div class="history-order-header">
                <div>
                    <div class="history-order-date">${order.date}</div>
                    <div style="font-size: 12px; color: #999; margin-top: 3px;">주문번호: ${order.orderNumber}</div>
                </div>
                <div class="history-order-status">${order.status}</div>
            </div>
            <div class="history-order-items">
                ${order.items.map(item => `
                    <div class="history-order-item-text">
                        ${item.name} x${item.quantity}
                    </div>
                `).join('')}
            </div>
            <div class="history-order-total">
                총 ${order.finalTotal.toLocaleString()}원
                ${order.earnedPoints > 0 ? `<span style="color: #4caf50; font-size: 13px; margin-left: 8px;">(+${order.earnedPoints}P 적립)</span>` : ''}
            </div>
        </div>
    `).join('');
}

// 장바구니 알림 효과
function showCartNotification() {
    cartToggle.style.transform = 'scale(1.1)';
    setTimeout(() => {
        cartToggle.style.transform = 'scale(1)';
    }, 200);
}

// 로그인 버튼 기능
document.getElementById('loginBtn').addEventListener('click', (e) => {
    console.log('로그인 버튼 클릭됨');
    e.preventDefault();
    e.stopPropagation();
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    console.log('현재 사용자:', currentUser);
    
    if (currentUser.phone && !currentUser.isGuest) {
        // 로그인된 회원 - 로그아웃
        if (confirm(`${currentUser.name}님, 로그아웃 하시겠습니까?`)) {
            localStorage.removeItem('currentUser');
            location.reload();
        }
    } else {
        // 비회원 또는 게스트 - 로그인 페이지로
        console.log('로그인 페이지로 이동 시도');
        window.location.href = './login.html';
    }
});

// 사용자 이름 표시 업데이트
function updateUserDisplay() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const userNameDisplay = document.getElementById('userNameDisplay');
    
    if (currentUser.phone && !currentUser.isGuest) {
        userNameDisplay.textContent = currentUser.name + '님';
    } else {
        userNameDisplay.textContent = '로그인';
    }
}

// 초기화
updateUserDisplay();
renderMenu();
updateCart();
updatePoints();


