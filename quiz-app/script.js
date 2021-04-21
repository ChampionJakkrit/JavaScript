const quizData = [
    {
        question: 'เมื่อไหร่โควิดจะหายไปซักที?',
        a: 'ไม่รู้',
        b: 'ไม่มีวัน',
        c: 'วันที่เราตายกันหมดแล้ว',
        d: 'ถูกทุกข้อ',
        correct: 'd'
    }, {
        question: 'ซอมเบิ่งครบ 1000 ครั้งจะปลดล็อคอะไร?',
        a: 'เตียงทองคำ',
        b: 'ตาทองคำ',
        c: 'ไหทองคำ',
        d: 'แว่นทองคำ',
        correct: 'c'
    }, {
        question: 'นักร้องคนไหนชอบชวนเพื่อนเต้น?',
        a: 'โต๋ สักผิด',
        b: 'ขวัญ อุส่ามานี่',
        c: 'คริส หอพัง',
        d: 'สิงโต นำโยก',
        correct: 'd'
    }, {
        question: 'ม้าอะไรอยู่ในช่วงโควิด?',
        a: 'ม้าตาย',
        b: 'ม้ามีจาแดก',
        c: 'ม้าไอ',
        d: 'ม้าเป็นไข้',
        correct: 'b'
    }, {
        question: 'ใครน่าตาดีที่สุด?',
        a: 'แชมป์',
        b: 'แช่ม',
        c: 'แช้ม',
        d: 'แช้มป์',
        correct: 'a'
    },
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz")
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deSelectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

   return answer;
}

function deSelectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h3>คุณได้คะแนนสำหรับแชมป์ควิซ ${score}/${quizData.length} คะแนน</h3>
            
            <button onclick="location.reload()">Reload</button>`
        }
    }
});