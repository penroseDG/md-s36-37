function dapan(){
    let answerInput = document.getElementById('answer');
    let result = document.getElementById('result');

    if (answerInput.value.length > 10) {
        result.style.color = 'red';
        result.textContent = 'Câu trả lời không hợp lệ (độ dài lớn hơn 10 ký tự).';
    } else {
        result.style.color = 'green';
        result.textContent = 'Câu trả lời hợp lệ.';
    }
}
