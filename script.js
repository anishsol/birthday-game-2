function startAdventure() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var color = document.getElementById('color').value;
  
    if (name && age && color) {
      document.querySelector('.form').classList.add('hidden');
      document.getElementById('birthdayMessage').classList.remove('hidden');
      
      var message = document.getElementById('message');
      message.innerHTML = `
        <span style="font-size: 1.5em;">🎉 Happy Birthday, ${name}! 🎉</span><br>
        On this special day of yours,<br>
        You turn ${age} today and your favorite color is ${color}.<br>
        Let's make this day unforgettable with some birthday surprises!<br>
        Enjoy your birthday adventure, ${name}!
      `;
    } else {
      alert('Please fill in all fields!');
    }
  }
  