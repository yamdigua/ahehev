const wheel = document.querySelector('.wheel'),
      spinBtn = document.querySelector('.spinBtn');

const targetAngle = 360;
let clicked = false;
spinBtn.onclick =  function() {
    if (clicked) {
        alert("很抱歉您的抽奖机会已用完");
      } else {
        wheel.style.transform = `rotate(${targetAngle}deg)`;
        setTimeout(() => {
          alert("谢谢参与");
        }, 5000);
        clicked = true; // 标记按钮已点击过
      }
    };



    
    let isLoggedIn = false;

    function toggleLogin() {
      if (isLoggedIn) {
        logout();
      } else {
        const loginModal = document.getElementById('loginModal');
        loginModal.style.display = 'block';
      }
    }
    
    function login() {
      alert('登录成功');
      const loginModal = document.getElementById('loginModal');
      loginModal.style.display = 'none';
      const loginBtn = document.getElementById('loginBtn');
      loginBtn.innerHTML = '注销';
      isLoggedIn = true;
    }
    
    function logout() {
      alert('已注销');
      const loginBtn = document.getElementById('loginBtn');
      loginBtn.innerHTML = '登录';
      isLoggedIn = false;
    }
    

    function showWinners() {
        const winnersModal = document.getElementById('winnersModal');
        winnersModal.style.display = 'block';
      }

      function closeWinners() {
        const winnersModal = document.getElementById('winnersModal');
        winnersModal.style.display = 'none';
      }
      