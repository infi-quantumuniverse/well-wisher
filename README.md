<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Romantic Birthday Wishes</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: linear-gradient(135deg, #f8b195, #f67280, #c06c84, #6c5b7b, #355c7d);
            background-size: 800% 800%;
            animation: dreamyBG 25s ease infinite;
            font-family: 'Dancing Script', cursive;
            overflow: hidden;
            position: relative;
        }

        @keyframes dreamyBG {
            0% {
                background-position: 0% 0%;
            }

            50% {
                background-position: 100% 100%;
            }

            100% {
                background-position: 0% 0%;
            }
        }

        .container {
            position: relative;
            text-align: center;
            width: 100%;
            padding: 40px;
            box-sizing: border-box;
            z-index: 1;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 20px;
            backdrop-filter: blur(10px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
            transition: transform 0.5s ease;
        }

        .container:hover {
            transform: scale(1.02);
        }

        .heart {
            position: relative;
            width: 60vw;
            height: 60vw;
            max-width: 300px;
            max-height: 300px;
            margin: 50px auto;
            animation: gentleBeat 2s infinite ease-in-out;
            transform-origin: center;
            filter: drop-shadow(0 10px 30px rgba(255, 143, 171, 0.4));
            transition: transform 0.3s ease;
        }

        .heart:hover {
            transform: scale(1.1);
        }

        @keyframes gentleBeat {

            0%,
            100% {
                transform: scale(1);
            }

            50% {
                transform: scale(1.06);
            }
        }

        .heart:before,
        .heart:after {
            position: absolute;
            content: "";
            left: 50%;
            top: 0;
            width: 50%;
            height: 80%;
            background: linear-gradient(135deg, #ff8fab, #ffccd5, #ffebf0);
            border-radius: 50vw 50vw 0 0;
            transform: rotate(-45deg);
            transform-origin: 0 100%;
            box-shadow: 0 15px 25px rgba(255, 143, 171, 0.4);
        }

        .heart:after {
            left: 0;
            transform: rotate(45deg);
            transform-origin: 100% 100%;
        }

        .name {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #fff;
            text-shadow: 0 2px 15px rgba(255, 143, 171, 0.8), 0 0 5px rgba(0, 0, 0, 0.3);
            z-index: 2;
            animation: sway 4s infinite ease-in-out;
        }

        @keyframes sway {

            0%,
            100% {
                transform: translate(-50%, -50%) rotate(-3deg);
            }

            50% {
                transform: translate(-50%, -55%) rotate(3deg);
            }
        }

        .main-name {
            font-size: clamp(34px, 10vw, 50px);
            font-weight: 700;
            letter-spacing: 2px;
            color: #fff;
            background: linear-gradient(45deg, rgba(255, 143, 171, 0.3), rgba(255, 204, 213, 0.3));
            padding: 5px 12px;
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: transform 0.3s ease, background 0.5s ease;
        }

        .main-name:hover {
            transform: scale(1.05);
            background: linear-gradient(45deg, rgba(255, 143, 171, 0.5), rgba(255, 204, 213, 0.5));
        }

        .nick-name {
            font-size: clamp(22px, 7vw, 32px);
            font-weight: 400;
            color: #fff;
            background: linear-gradient(45deg, rgba(255, 143, 171, 0.3), rgba(255, 204, 213, 0.3));
            padding: 4px 10px;
            border-radius: 8px;
            margin-top: 8px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: transform 0.3s ease, background 0.5s ease;
        }

        .nick-name:hover {
            transform: scale(1.05);
            background: linear-gradient(45deg, rgba(255, 143, 171, 0.5), rgba(255, 204, 213, 0.5));
        }

        .birthday-text {
            font-size: clamp(30px, 8vw, 42px);
            margin-top: 35px;
            color: #ff8fab;
            text-shadow: 0 0 15px rgba(255, 143, 171, 0.8), 0 2px 10px rgba(0, 0, 0, 0.2);
            animation: glowText 2.5s infinite alternate;
            cursor: pointer;
        }

        @keyframes glowText {
            0% {
                text-shadow: 0 0 10px rgba(255, 143, 171, 0.6);
            }

            100% {
                text-shadow: 0 0 25px rgba(255, 143, 171, 0.9);
            }
        }

        .particles-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
        }

        .rose-petal {
            position: absolute;
            width: 18px;
            height: 12px;
            background: linear-gradient(45deg, #ff6b81, #ffb6c1);
            border-radius: 50% 0 50% 50%;
            animation: fallPetal 7s linear forwards;
            transform-origin: center;
            box-shadow: 0 5px 15px rgba(255, 107, 129, 0.3);
        }

        .sparkle {
            position: absolute;
            width: 8px;
            height: 8px;
            background: linear-gradient(45deg, #fff, #ffccd5);
            border-radius: 50%;
            animation: floatSparkle 3.5s infinite ease-in-out;
            box-shadow: 0 0 12px rgba(255, 255, 255, 0.9);
        }

        .heart-particle {
            position: absolute;
            width: 10px;
            height: 10px;
            background: linear-gradient(45deg, #ff8fab, #ffccd5);
            clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
            animation: floatHeart 4s linear forwards;
            box-shadow: 0 0 10px rgba(255, 143, 171, 0.5);
        }

        .emoji-particle {
            position: absolute;
            font-size: 20px;
            animation: floatEmoji 3s linear forwards;
            text-shadow: 0 0 10px rgba(255, 143, 171, 0.7);
        }

        @keyframes fallPetal {
            0% {
                transform: translateY(-20vh) rotate(0deg);
                opacity: 1;
            }

            100% {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }

        @keyframes floatSparkle {

            0%,
            100% {
                transform: translateY(0);
                opacity: 0.6;
            }

            50% {
                transform: translateY(-25px);
                opacity: 1;
            }
        }

        @keyframes floatHeart {
            0% {
                transform: translateY(0) scale(1);
                opacity: 1;
            }

            100% {
                transform: translateY(-100px) scale(0.5);
                opacity: 0;
            }
        }

        @keyframes floatEmoji {
            0% {
                transform: translateY(0) scale(1);
                opacity: 1;
            }

            100% {
                transform: translateY(-80px) scale(0.8);
                opacity: 0;
            }
        }

        .love-message {
            margin-top: 30px;
            font-size: clamp(24px, 6vw, 34px);
            color: #fff;
            background: linear-gradient(135deg, rgba(255, 143, 171, 0.25), rgba(255, 204, 213, 0.25));
            padding: 18px 35px;
            border-radius: 50px;
            text-shadow: 0 0 12px rgba(255, 255, 255, 0.7);
            animation: fadeIn 3s ease-in, pulseGlow 2.5s infinite;
            backdrop-filter: blur(12px);
            border: 2px solid rgba(255, 255, 255, 0.4);
            box-shadow: 0 10px 25px rgba(255, 143, 171, 0.3);
            cursor: pointer;
            transition: transform 0.3s ease;
        }

        .love-message:hover {
            transform: scale(1.05);
        }

        @keyframes pulseGlow {
            0% {
                box-shadow: 0 0 15px rgba(255, 143, 171, 0.5);
            }

            50% {
                box-shadow: 0 0 30px rgba(255, 143, 171, 0.8);
            }

            100% {
                box-shadow: 0 0 15px rgba(255, 143, 171, 0.5);
            }
        }

        @keyframes fadeIn {
            0% {
                opacity: 0;
                transform: translateY(25px);
            }

            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .stars {
            position: absolute;
            width: 4px;
            height: 4px;
            background: linear-gradient(45deg, #fff, #ffebef);
            border-radius: 50%;
            animation: twinkle 2.5s infinite;
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
        }

        @keyframes twinkle {

            0%,
            100% {
                opacity: 0.4;
            }

            50% {
                opacity: 1;
            }
        }

        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.2) 100%);
            pointer-events: none;
            z-index: 0;
        }

        .hidden-message {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            font-size: clamp(20px, 5vw, 28px);
            color: #fff;
            background: linear-gradient(135deg, rgba(255, 143, 171, 0.4), rgba(255, 204, 213, 0.4));
            padding: 20px 40px;
            border-radius: 15px;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 255, 255, 0.5);
            box-shadow: 0 10px 20px rgba(255, 143, 171, 0.4);
            z-index: 10;
            opacity: 0;
            transition: transform 0.5s ease, opacity 0.5s ease;
        }

        .hidden-message.show {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }

        .emoji-button {
            margin-top: 20px;
            font-size: 28px;
            padding: 12px 25px;
            background: linear-gradient(45deg, #ff8fab, #ffccd5);
            border-radius: 50px;
            border: 2px solid rgba(255, 255, 255, 0.5);
            cursor: pointer;
            color: #fff;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
            box-shadow: 0 5px 15px rgba(255, 143, 171, 0.4);
            transition: transform 0.3s ease, background 0.5s ease;
        }

        .emoji-button:hover {
            transform: scale(1.1);
            background: linear-gradient(45deg, #ff6b81, #ffb6c1);
        }

        .emoji-picker {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            padding: 10px;
            border-radius: 15px;
            display: none;
            flex-wrap: wrap;
            width: 200px;
            justify-content: center;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            z-index: 5;
        }

        .emoji-picker.show {
            display: flex;
        }

        .emoji-option {
            font-size: 24px;
            margin: 5px;
            cursor: pointer;
            transition: transform 0.2s ease;
        }

        .emoji-option:hover {
            transform: scale(1.2);
        }

        .response-notification {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(45deg, #ff8fab, #ffccd5);
            color: #fff;
            padding: 10px 20px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(255, 143, 171, 0.4);
            font-size: 18px;
            z-index: 20;
            opacity: 0;
            transition: opacity 0.5s ease;
        }

        .response-notification.show {
            opacity: 1;
        }

        .creator {
            position: fixed;
            bottom: 10px;
            right: 10px;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.7);
            text-shadow: 0 0 5px rgba(255, 143, 171, 0.5);
            font-family: 'Arial', sans-serif;
            z-index: 2;
            transition: color 0.3s ease;
        }

        .creator:hover {
            color: #ff8fab;
        }

        @media (max-width: 400px) {
            .heart {
                width: 50vw;
                height: 50vw;
            }

            .love-message {
                padding: 12px 25px;
            }

            .hidden-message {
                padding: 15px 30px;
            }

            .emoji-button {
                font-size: 24px;
                padding: 10px 20px;
            }

            .emoji-picker {
                width: 150px;
            }

            .response-notification {
                font-size: 16px;
                padding: 8px 16px;
            }

            .creator {
                font-size: 12px;
                bottom: 5px;
                right: 5px;
            }
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet">
</head>

<body>
    <div class="overlay"></div>
    <div class="container">
        <div class="heart">
            <div class="name">
                <div class="main-name">heart_beat</div>
                <div class="nick-name">My Sweet Kritika</div>
            </div>
        </div>
        <div class="birthday-text">Happy Birthday, My Love ❤️</div>
        <div class="love-message">Forever Yours, With All My Heart</div>
        <div class="emoji-button" id="emoji-button">✨ Add Some Love ✨
            <div class="emoji-picker" id="emoji-picker">
                <span class="emoji-option">❤️</span>
                <span class="emoji-option">💕</span>
                <span class="emoji-option">💖</span>
                <span class="emoji-option">💘</span>
                <span class="emoji-option">🌹</span>
                <span class="emoji-option">✨</span>
                <span class="emoji-option">💋</span>
                <span class="emoji-option">🥰</span>
            </div>
        </div>
    </div>

    <div class="particles-container" id="particles-container"></div>
    <div class="hidden-message" id="hidden-message">You Light Up My World Every Day!</div>
    <div class="response-notification" id="response-notification"></div>
    <div class="creator">Created by MANAN GUPTA</div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            createRosePetals();
            createSparkles();
            createStars();
            setInterval(createRosePetals, 1500);
            setInterval(createSparkles, 250);
            setInterval(createStars, 4000);
            setupInteractiveEffects();
            setupEmojiPicker();
        });

        function createRosePetals() {
            const container = document.getElementById('particles-container');
            for (let i = 0; i < 12; i++) {
                const petal = document.createElement('div');
                petal.classList.add('rose-petal');
                const x = Math.random() * window.innerWidth;
                const delay = Math.random() * 5;
                const duration = 6 + Math.random() * 4;

                petal.style.left = `${x}px`;
                petal.style.animation = `fallPetal ${duration}s linear ${delay}s forwards`;
                petal.style.transform = `rotate(${Math.random() * 360}deg)`;

                container.appendChild(petal);
                setTimeout(() => petal.remove(), (duration + delay) * 1000);
            }
        }

        function createSparkles() {
            const container = document.getElementById('particles-container');
            for (let i = 0; i < 6; i++) {
                const sparkle = document.createElement('div');
                sparkle.classList.add('sparkle');
                sparkle.style.left = Math.random() * 100 + 'vw';
                sparkle.style.top = Math.random() * 100 + 'vh';
                sparkle.style.animationDelay = Math.random() * 2 + 's';

                container.appendChild(sparkle);
                setTimeout(() => sparkle.remove(), 3500);
            }
        }

        function createStars() {
            const container = document.getElementById('particles-container');
            for (let i = 0; i < 25; i++) {
                const star = document.createElement('div');
                star.classList.add('stars');
                star.style.left = Math.random() * 100 + 'vw';
                star.style.top = Math.random() * 100 + 'vh';
                star.style.animationDelay = Math.random() * 2 + 's';

                container.appendChild(star);
            }
        }

        function createHeartParticles(x, y) {
            const container = document.getElementById('particles-container');
            for (let i = 0; i < 8; i++) {
                const heart = document.createElement('div');
                heart.classList.add('heart-particle');
                heart.style.left = `${x}px`;
                heart.style.top = `${y}px`;
                const angle = Math.random() * 360;
                const distance = 50 + Math.random() * 50;
                const duration = 2 + Math.random() * 2;

                heart.style.animation = `floatHeart ${duration}s linear forwards`;
                heart.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;

                container.appendChild(heart);
                setTimeout(() => heart.remove(), duration * 1000);
            }
        }

        function createEmojiParticles(x, y, emoji) {
            const container = document.getElementById('particles-container');
            for (let i = 0; i < 5; i++) {
                const emojiParticle = document.createElement('div');
                emojiParticle.classList.add('emoji-particle');
                emojiParticle.textContent = emoji;
                emojiParticle.style.left = `${x}px`;
                emojiParticle.style.top = `${y}px`;
                const angle = Math.random() * 360;
                const distance = 30 + Math.random() * 40;
                const duration = 2 + Math.random() * 1;

                emojiParticle.style.animation = `floatEmoji ${duration}s linear forwards`;
                emojiParticle.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;

                container.appendChild(emojiParticle);
                setTimeout(() => emojiParticle.remove(), duration * 1000);
            }
        }

        function showResponseNotification(emoji) {
            const notification = document.getElementById('response-notification');
            notification.textContent = `You tapped ${emoji}! Sending love back to Manan! 💌`;
            notification.classList.add('show');
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        function logEmojiResponse(emoji) {
            const timestamp = new Date().toLocaleString();
            console.log(`Emoji Response: ${emoji} tapped at ${timestamp}`);
            // Simulate sending response (e.g., to a server)
            // You could replace this with an actual fetch request if you have a backend
            // Example: fetch('your-api-endpoint', { method: 'POST', body: JSON.stringify({ emoji, timestamp }) });
        }

        function setupInteractiveEffects() {
            const birthdayText = document.querySelector('.birthday-text');
            const loveMessage = document.querySelector('.love-message');
            const hiddenMessage = document.getElementById('hidden-message');
            let clickCount = 0;

            birthdayText.addEventListener('click', function (e) {
                const rect = birthdayText.getBoundingClientRect();
                const x = rect.left + rect.width / 2;
                const y = rect.top + rect.height / 2;
                createHeartParticles(x, y);
            });

            loveMessage.addEventListener('click', function () {
                clickCount++;
                if (clickCount === 1) {
                    hiddenMessage.classList.add('show');
                    setTimeout(() => {
                        hiddenMessage.classList.remove('show');
                        clickCount = 0;
                    }, 3000);
                }
            });

            document.addEventListener('mousemove', function (e) {
                if (Math.random() > 0.8) {
                    const sparkle = document.createElement('div');
                    sparkle.classList.add('sparkle');
                    sparkle.style.left = `${e.clientX}px`;
                    sparkle.style.top = `${e.clientY}px`;
                    sparkle.style.animation = `floatSparkle 2s linear forwards`;
                    document.getElementById('particles-container').appendChild(sparkle);
                    setTimeout(() => sparkle.remove(), 2000);
                }
            });

            const heart = document.querySelector('.heart');
            const container = document.querySelector('.container');
            container.addEventListener('mouseenter', function () {
                heart.style.animation = 'gentleBeat 1s infinite ease-in-out';
            });
            container.addEventListener('mouseleave', function () {
                heart.style.animation = 'gentleBeat 2s infinite ease-in-out';
            });
        }

        function setupEmojiPicker() {
            const emojiButton = document.getElementById('emoji-button');
            const emojiPicker = document.getElementById('emoji-picker');
            const emojiOptions = document.querySelectorAll('.emoji-option');

            emojiButton.addEventListener('click', function (e) {
                e.stopPropagation();
                emojiPicker.classList.toggle('show');
            });

            emojiOptions.forEach(option => {
                option.addEventListener('click', function (e) {
                    e.stopPropagation();
                    const emoji = this.textContent;
                    const rect = emojiButton.getBoundingClientRect();
                    const x = rect.left + rect.width / 2;
                    const y = rect.top + rect.height / 2;
                    createEmojiParticles(x, y, emoji);
                    logEmojiResponse(emoji); // Log the emoji tap
                    showResponseNotification(emoji); // Show on-screen notification
                    emojiPicker.classList.remove('show');
                });
            });

            document.addEventListener('click', function (e) {
                if (!emojiButton.contains(e.target) && !emojiPicker.contains(e.target)) {
                    emojiPicker.classList.remove('show');
                }
            });
        }
    </script>
</body>

</html>
