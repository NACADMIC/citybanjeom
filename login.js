// 폼 전환
function showSignup() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('signupForm').classList.remove('hidden');
}

function showLogin() {
    document.getElementById('signupForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
}

// 토스트 알림
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// 전화번호 포맷
function formatPhone(value) {
    const numbers = value.replace(/[^\d]/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 7) return numbers.slice(0, 3) + '-' + numbers.slice(3);
    return numbers.slice(0, 3) + '-' + numbers.slice(3, 7) + '-' + numbers.slice(7, 11);
}

// 전화번호 입력 자동 포맷
document.addEventListener('DOMContentLoaded', () => {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            e.target.value = formatPhone(e.target.value);
        });
    });
});

// 로그인 처리
function handleLogin(e) {
    e.preventDefault();
    const phone = document.getElementById('loginPhone').value;
    
    // localStorage에서 사용자 찾기
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.phone === phone);
    
    if (user) {
        // 로그인 성공
        localStorage.setItem('currentUser', JSON.stringify(user));
        showToast('로그인 성공!', 'success');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    } else {
        // 사용자 없음
        showToast('등록되지 않은 전화번호입니다.', 'error');
    }
}

// 회원가입 처리
function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const phone = document.getElementById('signupPhone').value;
    const address = document.getElementById('signupAddress').value;
    
    // localStorage에서 기존 사용자 목록 가져오기
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // 중복 체크
    if (users.some(u => u.phone === phone)) {
        showToast('이미 가입된 전화번호입니다.', 'error');
        return;
    }
    
    // 새 사용자 추가
    const newUser = {
        name,
        phone,
        address,
        points: 0,
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    showToast('회원가입 완료!', 'success');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

// 소셜 로그인 (UI만)
function socialLogin(type) {
    const messages = {
        kakao: '카카오 로그인',
        naver: '네이버 로그인'
    };
    
    showToast(`${messages[type]} 준비중입니다`, 'error');
    
    // 실제로는 여기서 API 연동을 하면 됩니다
    // 지금은 임시로 게스트 계정 생성
    setTimeout(() => {
        const guestUser = {
            name: `${type}사용자`,
            phone: '010-0000-0000',
            address: '주소 미입력',
            points: 0,
            loginType: type
        };
        localStorage.setItem('currentUser', JSON.stringify(guestUser));
        window.location.href = 'index.html';
    }, 1500);
}

// 건너뛰기
function skipLogin() {
    const guestUser = {
        name: '게스트',
        phone: '',
        address: '',
        points: 0,
        isGuest: true
    };
    localStorage.setItem('currentUser', JSON.stringify(guestUser));
    window.location.href = 'index.html';
}

// 로그인 페이지는 누구나 접근 가능 (비회원도 회원가입 할 수 있도록)

