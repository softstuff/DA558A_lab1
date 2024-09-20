

function sendEmail() {
    const replyTo = document.getElementById('email').value.trim();
    const name = document.getElementById('name').value ?? 'annonym';
    const question = document.getElementById('question').value.trim();
    var ok = true;
    if (replyTo === '') {
        document.getElementById('email').value = replyTo
        ok = false
    }
    if (question.length < 5) {
        document.getElementById('question').value = question
        ok = false
    }
    if (ok) {
        const subject = "Kontakt"
        const body = encodeURI(`${name} (${replyTo})\nUndrar: ${question}`)
        document.forms["contact-form"].action = `mailto:contact@labb1.se?subject=${subject}&body=${body}`
        document.forms["contact-form"].submit()
    }
    return ok
}