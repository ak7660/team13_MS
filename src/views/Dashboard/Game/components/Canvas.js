import React, { useEffect, useRef } from 'react';
import './styles.css';

export default function Canvas({ restartGame, updateScore }) {
  const canvasRef = useRef(null);
  const balloonImage = new Image();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    skyGradient.addColorStop(0, '#87CEEB');
    skyGradient.addColorStop(1, '#B0E0E6');

    let balloonX = canvas.width / 2 - 30;
    const balloonWidth = 60;
    const balloonHeight = 80;
    const balloonY = canvas.height - balloonHeight - 20;
    let moveLeft = false;
    let moveRight = false;
    const balloonSpeed = 5;
    let score = 0;
    const questions = [
      "How would you rate our service on a scale of 1 to 5?",
      "How satisfied are you with our support team?",
      "What do you think about our delivery speed?",
      "How would you rate the quality of our products?",
      "Overall, how satisfied are you with our company?"
    ];
    let questionDetails = questions.map((question, index) => ({
      text: question,
      yOffset: -500 - index * 500,
      answered: false,
      answer: null,
      box: document.createElement('div')
    }));
    const openingWidth = 60;
    const barrierHeight = 30;

    balloonImage.src = process.env.PUBLIC_URL + '/Picture1.png';

    questionDetails.forEach(detail => {
      detail.box.className = 'scrollBox';
      detail.box.innerText = detail.text;
      document.body.appendChild(detail.box);
    });

    document.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowLeft') {
        moveLeft = true;
      } else if (event.key === 'ArrowRight') {
        moveRight = true;
      }
    });

    document.addEventListener('keyup', function(event) {
      if (event.key === 'ArrowLeft') {
        moveLeft = false;
      } else if (event.key === 'ArrowRight') {
        moveRight = false;
      }
    });

    function drawBalloon() {
      ctx.drawImage(balloonImage, balloonX, balloonY, balloonWidth, balloonHeight);
    }

    function getBrickPattern() {
      const patternCanvas = document.createElement('canvas');
      const patternContext = patternCanvas.getContext('2d');
      patternCanvas.width = 32;
      patternCanvas.height = 16;

      patternContext.fillStyle = '#B22222';
      patternContext.fillRect(0, 0, 32, 16);
      patternContext.strokeStyle = '#8B0000';
      patternContext.strokeRect(0, 0, 32, 16);
      patternContext.strokeStyle = '#FFF';
      patternContext.beginPath();
      patternContext.moveTo(0, 8);
      patternContext.lineTo(32, 8);
      patternContext.stroke();

      return patternCanvas;
    }

    function drawQuestionsAndBarriers() {
      const brickPattern = ctx.createPattern(getBrickPattern(), 'repeat');

      questionDetails.forEach(detail => {
        const questionY = detail.yOffset + 20;
        detail.box.style.left = `${canvas.width / 2}px`;
        detail.box.style.top = `${questionY - 100}px`;

        ctx.fillStyle = brickPattern;
        ctx.fillRect(0, questionY, canvas.width, barrierHeight);

        if (!detail.answered) {
          detail.box.style.display = 'block';
        } else {
          detail.box.style.display = 'none';
        }

        ctx.font = 'bold 20px Georgia';
        ctx.fillStyle = 'black';
        for (let j = 1; j <= 5; j++) {
          let openingX = j * canvas.width / 6 - openingWidth / 2;
          ctx.clearRect(openingX, questionY, openingWidth, barrierHeight);
          ctx.fillText(j, openingX + openingWidth / 2 - 5, questionY + barrierHeight / 2 + 5);
        }
      });
    }

    function checkCollision() {
      questionDetails.forEach(detail => {
        let questionY = detail.yOffset + 20;
        if (balloonY < questionY + barrierHeight && balloonY + balloonHeight > questionY) {
          let isInOpening = false;
          for (let j = 1; j <= 5; j++) {
            let openingX = j * canvas.width / 6 - openingWidth / 2;
            if (balloonX + balloonWidth > openingX && balloonX < openingX + openingWidth) {
              isInOpening = true;
              if (!detail.answered) {
                detail.answered = true;
                detail.answer = j;
                score += 10;
                updateScore(score);
                checkGameCompletion();
              }
              break;
            }
          }
          if (!isInOpening && !detail.answered) {
            document.getElementById('failureDialog').style.display = 'block';
          }
        }
      });
    }

    function checkGameCompletion() {
      if (questionDetails.every(detail => detail.answered)) {
        let summaryContent = document.getElementById('summaryContent');
        summaryContent.innerHTML = '';
        questionDetails.forEach(detail => {
          summaryContent.innerHTML += `<p>${detail.text}: ${detail.answer}</p>`;
        });
        document.getElementById('summaryDialog').style.display = 'block';
      }
    }

    function updateBalloonPosition() {
      if (moveLeft) {
        balloonX -= balloonSpeed;
        if (balloonX < 0) balloonX = 0;
      }
      if (moveRight) {
        balloonX += balloonSpeed;
        if (balloonX + balloonWidth > canvas.width) balloonX = canvas.width - balloonWidth;
      }
    }

    const clouds = Array.from({ length: 13 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height / 2,
      size: 50 + Math.random() * 30
    }));

    function drawClouds() {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      clouds.forEach(cloud => {
        ctx.beginPath();
        ctx.arc(cloud.x, cloud.y, cloud.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cloud.x + cloud.size * 0.5, cloud.y - cloud.size * 0.3, cloud.size * 0.7, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cloud.x - cloud.size * 0.5, cloud.y - cloud.size * 0.3, cloud.size * 0.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cloud.x + cloud.size * 0.8, cloud.y + cloud.size * 0.2, cloud.size * 0.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cloud.x - cloud.size * 0.8, cloud.y + cloud.size * 0.2, cloud.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function gameLoop() {
      ctx.fillStyle = skyGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawClouds();
      updateBalloonPosition();
      drawQuestionsAndBarriers();
      drawBalloon();
      checkCollision();

      questionDetails.forEach(detail => {
        detail.yOffset += 2;
      });

      requestAnimationFrame(gameLoop);
    }

    balloonImage.onload = gameLoop;

  }, [updateScore]);

  return <canvas id="gameCanvas" ref={canvasRef}></canvas>;
}