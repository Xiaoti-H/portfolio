function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


document.addEventListener('DOMContentLoaded', function () {
    var circles = {
      'central-circle-1': { x: '45%', y: '22%' },
      'central-circle-2': { x: '5%', y: '8%' },
      'central-circle-3': { x: '25%', y: '85%' },
      'central-circle-4': { x: '70%', y: '60%' },
      'central-circle-5': { x: '84%', y: '-20%' }
    };
  
    var skills = {
      'central-circle-1': ['Java', 'Python', 'C',  'C++', 'JavaScript','Kotlin'],
      'central-circle-2': ['HTML', 'CSS', 'MongoDB', 'Firebase',  'Figma', 'Android SDK','API'],
      'central-circle-3': ['SQL', 'NoSQL','R'],
      'central-circle-5': ['Photoshop', 'Illustrator', 'AfterEffect','Autodesk\n CAD', 'GIS'],
      'central-circle-4': ['Flask', 'Beautiful\nSoup','AWS', 'Git', 'Junit','Pandas', 'PyTorch', 'Scikit-learn']
    };
  
    Object.entries(circles).forEach(([circleId, position]) => {
      var circle = document.getElementById(circleId);
      circle.style.left = position.x;
      circle.style.top = position.y;
  
      // Generate skill icons for each circle
      skills[circleId].forEach(function (skillName, index) {
        var skillIcon = document.createElement('div');
        skillIcon.className = 'skill-icon';
        skillIcon.innerText = skillName; // Add text or you could use an image
        skillIcon.dataset.angle = (index / skills[circleId].length) * (2 * Math.PI);
        circle.appendChild(skillIcon);
      });
  
      circle.addEventListener('mouseover', function () {
        var distance = 140; // Distance from center
        var skillIcons = circle.querySelectorAll('.skill-icon');
        skillIcons.forEach(function (icon) {
          var angle = icon.dataset.angle;
          var x = distance * Math.cos(angle);
          var y = distance * Math.sin(angle);
          icon.style.transform = `translate(${x}px, ${y}px)`;
          icon.style.opacity = 1;
        });
      });
  
      circle.addEventListener('mouseout', function () {
        var skillIcons = circle.querySelectorAll('.skill-icon');
        skillIcons.forEach(function (icon) {
          icon.style.transform = 'translate(0px, 0px)';
          icon.style.opacity = 0;
        });
      });
    });
  });
  
  
