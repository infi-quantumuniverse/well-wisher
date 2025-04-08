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
    0%, 100% {
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
    0%, 100% {
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
    0%, 100% {
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
    0%, 100% {
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