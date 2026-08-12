const messageBox = document.getElementById("message");

const count = document.getElementById("count");

const remainingCharacter = document.getElementById("remainingCharacter");

const warning = document.getElementById("warning");

const maxCharacter = 200;

messageBox.addEventListener("input", function () {
    console.log(messageBox.value);

    const typedCharacters = messageBox.value.length;

    const remaining = maxCharacter - typedCharacters

    count.textContent = typedCharacters + "/200 characters";

    remainingCharacter.textContent = remaining + " characters remaining";

    if (typedCharacters === 200) {

        warning.textContent = "You've reached the 200-character limit";
    }

});
