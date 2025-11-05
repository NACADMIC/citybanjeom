// 메뉴 데이터 - 실제 음식 사진 사용
const menuData = [
    {
        id: 1,
        name: '짜장면',
        desc: '달콤한 춘장이 일품인 짜장면',
        price: 6000,
        category: 'noodle',
        image: 'https://i.ibb.co/ZMXwq1P/jjajangmyeon.jpg'
    },
    {
        id: 2,
        name: '짬뽕',
        desc: '매콤한 해물이 듬뿍 들어간 짬뽕',
        price: 7000,
        category: 'noodle',
        image: 'https://i.ibb.co/qYyKq7h/jjamppong.jpg'
    },
    {
        id: 3,
        name: '간짜장',
        desc: '고소한 간짜장',
        price: 7000,
        category: 'noodle',
        image: 'https://i.ibb.co/vXm5BZR/ganjjajang.jpg'
    },
    {
        id: 4,
        name: '삼선짜장',
        desc: '해산물이 듬뿍 들어간 짜장면',
        price: 8000,
        category: 'noodle',
        image: 'https://i.ibb.co/7XqL8hQ/samseon.jpg'
    },
    {
        id: 5,
        name: '볶음짬뽕',
        desc: '매콤달콤한 볶음짬뽕',
        price: 8000,
        category: 'noodle',
        image: 'https://i.ibb.co/HKFjN5V/bokkeum-jjamppong.jpg'
    },
    {
        id: 6,
        name: '우동',
        desc: '담백한 우동',
        price: 6000,
        category: 'noodle',
        image: 'https://i.ibb.co/2KQ5mZ4/udong.jpg'
    },
    {
        id: 7,
        name: '볶음밥',
        desc: '야채가 듬뿍 들어간 볶음밥',
        price: 7000,
        category: 'rice',
        image: 'https://i.ibb.co/hLXj6Rp/bokkeumbap.jpg'
    },
    {
        id: 8,
        name: '짬뽕밥',
        desc: '얼큰한 짬뽕밥',
        price: 8000,
        category: 'rice',
        image: 'https://i.ibb.co/yy5s8Lq/jjamppongbap.jpg'
    },
    {
        id: 9,
        name: '해물볶음밥',
        desc: '싱싱한 해물이 들어간 볶음밥',
        price: 8500,
        category: 'rice',
        image: 'https://i.ibb.co/jhTTRcf/haemul-bokkeumbap.jpg'
    },
    {
        id: 10,
        name: '탕수육(소)',
        desc: '바삭하고 달콤한 탕수육',
        price: 15000,
        category: 'main',
        image: 'https://i.ibb.co/Wfg5KmY/tangsooyook.jpg'
    },
    {
        id: 11,
        name: '탕수육(중)',
        desc: '바삭하고 달콤한 탕수육',
        price: 20000,
        category: 'main',
        image: 'https://i.ibb.co/Wfg5KmY/tangsooyook.jpg'
    },
    {
        id: 12,
        name: '탕수육(대)',
        desc: '바삭하고 달콤한 탕수육',
        price: 25000,
        category: 'main',
        image: 'https://i.ibb.co/Wfg5KmY/tangsooyook.jpg'
    },
    {
        id: 13,
        name: '깐풍기',
        desc: '매콤달콤한 깐풍기',
        price: 18000,
        category: 'main',
        image: 'https://i.ibb.co/5xFT7Jj/kanpunggi.jpg'
    },
    {
        id: 14,
        name: '라조기',
        desc: '매콤한 라조기',
        price: 18000,
        category: 'main',
        image: 'https://i.ibb.co/LJqp9Pm/lazogi.jpg'
    },
    {
        id: 15,
        name: '양장피',
        desc: '야채가 풍부한 양장피',
        price: 20000,
        category: 'main',
        image: 'https://i.ibb.co/VTcTgGF/yangjangpi.jpg'
    },
    {
        id: 16,
        name: '유산슬',
        desc: '고급스러운 유산슬',
        price: 22000,
        category: 'main',
        image: 'https://i.ibb.co/0BjGzTY/yusanseul.jpg'
    },
    {
        id: 17,
        name: '팔보채',
        desc: '8가지 재료가 들어간 팔보채',
        price: 20000,
        category: 'main',
        image: 'https://i.ibb.co/D7kFTwQ/palbochae.jpg'
    },
    {
        id: 18,
        name: '마파두부',
        desc: '얼큰한 마파두부',
        price: 15000,
        category: 'main',
        image: 'https://i.ibb.co/FhYRPRH/mapadubu.jpg'
    },
    {
        id: 19,
        name: '군만두',
        desc: '바삭한 군만두',
        price: 6000,
        category: 'appetizer',
        image: 'https://i.ibb.co/dK9rZzY/gunmandu.jpg'
    },
    {
        id: 20,
        name: '물만두',
        desc: '촉촉한 물만두',
        price: 6000,
        category: 'appetizer',
        image: 'https://i.ibb.co/Xy8FHhY/mulmandu.jpg'
    },
    {
        id: 21,
        name: '계란탕',
        desc: '부드러운 계란탕',
        price: 5000,
        category: 'appetizer',
        image: 'https://i.ibb.co/LpZqFgq/gyerantang.jpg'
    },
    {
        id: 22,
        name: '짜사이',
        desc: '아삭한 짜사이',
        price: 3000,
        category: 'appetizer',
        image: 'https://i.ibb.co/hDpjLVR/jjasai.jpg'
    }
];

// 상태 관리
let cart = [];
let currentCategory = 'all';
let userPoints = parseInt(localStorage.getItem('userPoints')) || 0;
let pointsHistory = JSON.parse(localStorage.getItem('pointsHistory')) || [];
let usedPoints = 0;
let orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
let savedAddress = localStorage.getItem('savedAddress') || '';
let savedPhone = localStorage.getItem('savedPhone') || '';

// 포인트 적립률 (5%)
const POINT_RATE = 0.05;
const DELIVERY_FEE = 3000;
const MIN_ORDER_AMOUNT = 15000;

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

// 주문내역 모달
const orderHistoryBtn = document.getElementById('orderHistoryBtn');
const orderHistoryModal = document.getElementById('orderHistoryModal');
const closeOrderHistoryModal = document.getElementById('closeOrderHistoryModal');
const orderHistoryList = document.getElementById('orderHistoryList');

// 메뉴 렌더링
function renderMenu() {
    menuList.innerHTML = '';
    
    const filteredMenu = currentCategory === 'all' 
        ? menuData 
        : menuData.filter(item => item.category === currentCategory);
    
    filteredMenu.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <div class="menu-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="menu-info">
                <div>
                    <div class="menu-name">${item.name}</div>
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
        renderMenu();
    });
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
        earnedPoints: earnPointsAmount,
        address: `${deliveryAddress.value} ${deliveryAddressDetail.value}`,
        phone: phoneNumber.value,
        request: orderRequest.value,
        paymentMethod,
        status: '배달완료'
    };
    
    orderHistory.unshift(order);
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
    
    // 포인트 처리
    if (usedPoints > 0) {
        userPoints -= usedPoints;
        addPointsHistory('use', usedPoints, '주문 시 포인트 사용');
    }
    
    userPoints += earnPointsAmount;
    addPointsHistory('earn', earnPointsAmount, '주문 적립');
    updatePoints();
    
    // 주문서 모달 닫기
    orderModal.classList.remove('show');
    
    // 주문 완료 모달 표시
    showOrderComplete(orderNumber);
    
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
function showOrderComplete(orderNumber) {
    completedOrderNumber.textContent = orderNumber;
    orderCompleteModal.classList.add('show');
    overlay.classList.add('show');
}

closeCompleteModal.addEventListener('click', () => {
    orderCompleteModal.classList.remove('show');
    overlay.classList.remove('show');
});

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

// 초기화
renderMenu();
updateCart();
updatePoints();


