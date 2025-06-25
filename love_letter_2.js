<<<<<<< HEAD
$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  function updateButtons() {
    if (envelope.hasClass("open")) {
      btn_open.css({opacity:0, pointerEvents:'none'});
      btn_reset.css({opacity:1, pointerEvents:'auto'});
    } else {
      btn_open.css({opacity:1, pointerEvents:'auto'});
      btn_reset.css({opacity:0, pointerEvents:'none'});
    }
  }

  envelope.on('click', '#open', function(e) {
    e.stopPropagation();
    open();
  });
  envelope.on('click', '#reset', function(e) {
    e.stopPropagation();
    close();
  });
  envelope.click(function (e) {
    if (!$(e.target).is('#open, #reset')) open();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
    updateButtons();
  }
  function close() {
    envelope.addClass("close").removeClass("open");
    updateButtons();
  }

  // Inisialisasi tombol saat load
  updateButtons();
});

// Animasi partikel hati kecil di background
(function() {
  var canvas = document.getElementById('bg-hearts');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var hearts = [];
  var w = window.innerWidth;
  var h = window.innerHeight;
  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
  }
  window.addEventListener('resize', resize);
  resize();
  function randomColor() {
    var colors = [
      'rgba(255,182,193,0.7)', // light pink
      'rgba(255,192,203,0.6)', // pink
      'rgba(221,160,221,0.6)', // plum
      'rgba(186,85,211,0.5)',  // medium orchid
      'rgba(255,240,245,0.7)'  // lavender blush
    ];
    return colors[Math.floor(Math.random()*colors.length)];
  }
  function Heart() {
    this.x = Math.random() * w;
    this.y = h + 20 + Math.random()*40;
    this.size = 10 + Math.random()*16;
    this.speed = 0.5 + Math.random()*1.2;
    this.color = randomColor();
    this.alpha = 0.7 + Math.random()*0.3;
    this.tilt = Math.random()*Math.PI*2;
    this.tiltSpeed = 0.01 + Math.random()*0.02;
  }
  Heart.prototype.draw = function() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.tilt);
    ctx.scale(this.size/32, this.size/32);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(0, -12, -16, -12, -16, 0);
    ctx.bezierCurveTo(-16, 12, 0, 16, 0, 32);
    ctx.bezierCurveTo(0, 16, 16, 12, 16, 0);
    ctx.bezierCurveTo(16, -12, 0, -12, 0, 0);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.alpha;
    ctx.fill();
    ctx.restore();
  };
  Heart.prototype.update = function() {
    this.y -= this.speed;
    this.tilt += this.tiltSpeed;
    if (this.y < -40) {
      this.x = Math.random() * w;
      this.y = h + 20 + Math.random()*40;
      this.size = 10 + Math.random()*16;
      this.speed = 0.5 + Math.random()*1.2;
      this.color = randomColor();
      this.alpha = 0.7 + Math.random()*0.3;
      this.tilt = Math.random()*Math.PI*2;
      this.tiltSpeed = 0.01 + Math.random()*0.02;
    }
  };
  for (var i=0; i<28; i++) hearts.push(new Heart());
  function animate() {
    ctx.clearRect(0,0,w,h);
    for (var i=0; i<hearts.length; i++) {
      hearts[i].update();
      hearts[i].draw();
    }
    requestAnimationFrame(animate);
  }
  animate();
})();
=======
$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  function updateButtons() {
    if (envelope.hasClass("open")) {
      btn_open.css({opacity:0, pointerEvents:'none'});
      btn_reset.css({opacity:1, pointerEvents:'auto'});
    } else {
      btn_open.css({opacity:1, pointerEvents:'auto'});
      btn_reset.css({opacity:0, pointerEvents:'none'});
    }
  }

  envelope.on('click', '#open', function(e) {
    e.stopPropagation();
    open();
  });
  envelope.on('click', '#reset', function(e) {
    e.stopPropagation();
    close();
  });
  envelope.click(function (e) {
    if (!$(e.target).is('#open, #reset')) open();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
    updateButtons();
  }
  function close() {
    envelope.addClass("close").removeClass("open");
    updateButtons();
  }

  // Inisialisasi tombol saat load
  updateButtons();
});

// Animasi partikel hati kecil di background
(function() {
  var canvas = document.getElementById('bg-hearts');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var hearts = [];
  var w = window.innerWidth;
  var h = window.innerHeight;
  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
  }
  window.addEventListener('resize', resize);
  resize();
  function randomColor() {
    var colors = [
      'rgba(255,182,193,0.7)', // light pink
      'rgba(255,192,203,0.6)', // pink
      'rgba(221,160,221,0.6)', // plum
      'rgba(186,85,211,0.5)',  // medium orchid
      'rgba(255,240,245,0.7)'  // lavender blush
    ];
    return colors[Math.floor(Math.random()*colors.length)];
  }
  function Heart() {
    this.x = Math.random() * w;
    this.y = h + 20 + Math.random()*40;
    this.size = 10 + Math.random()*16;
    this.speed = 0.5 + Math.random()*1.2;
    this.color = randomColor();
    this.alpha = 0.7 + Math.random()*0.3;
    this.tilt = Math.random()*Math.PI*2;
    this.tiltSpeed = 0.01 + Math.random()*0.02;
  }
  Heart.prototype.draw = function() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.tilt);
    ctx.scale(this.size/32, this.size/32);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(0, -12, -16, -12, -16, 0);
    ctx.bezierCurveTo(-16, 12, 0, 16, 0, 32);
    ctx.bezierCurveTo(0, 16, 16, 12, 16, 0);
    ctx.bezierCurveTo(16, -12, 0, -12, 0, 0);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.alpha;
    ctx.fill();
    ctx.restore();
  };
  Heart.prototype.update = function() {
    this.y -= this.speed;
    this.tilt += this.tiltSpeed;
    if (this.y < -40) {
      this.x = Math.random() * w;
      this.y = h + 20 + Math.random()*40;
      this.size = 10 + Math.random()*16;
      this.speed = 0.5 + Math.random()*1.2;
      this.color = randomColor();
      this.alpha = 0.7 + Math.random()*0.3;
      this.tilt = Math.random()*Math.PI*2;
      this.tiltSpeed = 0.01 + Math.random()*0.02;
    }
  };
  for (var i=0; i<28; i++) hearts.push(new Heart());
  function animate() {
    ctx.clearRect(0,0,w,h);
    for (var i=0; i<hearts.length; i++) {
      hearts[i].update();
      hearts[i].draw();
    }
    requestAnimationFrame(animate);
  }
  animate();
})();
>>>>>>> 9016be7489a3ce3f5b5c644f00cdf9c763b27402
